const API = "https://www.googleapis.com/youtube/v3";

type YTThumbs = {
  maxres?: { url: string };
  standard?: { url: string };
  high?: { url: string };
  medium?: { url: string };
  default?: { url: string };
};

type Item = {
  title: string;
  image: any; // StaticImageData | string
  date: string; // YYYY-MM-DD
  time: string; // HH:MM:SS or MM:SS
  url: string; // https://www.youtube.com/watch?v=...
};

// --- util: parse ISO8601 "PT#H#M#S" into "H:MM:SS" or "MM:SS"
function iso8601ToClock(iso: string): string {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "00:00";
  const h = Number(m[1] || 0),
    min = Number(m[2] || 0),
    s = Number(m[3] || 0);
  const mm = h ? String(min).padStart(2, "0") : String(min);
  const ss = String(s).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

// --- util: prefer date-from-title (matches your old scraper), fallback to publishedAt
function parseDateFromTitleOr(
  snippetTitle: string,
  fallbackISO: string
): string {
  // e.g. "State of Nativewind: Jul 09, 2025"
  const m = snippetTitle.match(/:?\s*([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!m) return fallbackISO.slice(0, 10);
  const [, month, day, year] = m;
  const idx = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].indexOf(month.slice(0, 3));
  if (idx < 0) return fallbackISO.slice(0, 10);
  const mm = String(idx + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

// --- local image map by ISO date (add more as you import them)
import StateOfNWOld from "@/app/assets/state-of-nw-old.jpeg";
import StateOfNW212 from "@/app/assets/state-of-nw-212.png";
import StateOfNW226 from "@/app/assets/state-of-nw-226.png";
import StateOfNW312 from "@/app/assets/state-of-nw-312.png";
import StateOfNW42 from "@/app/assets/state-of-nw-42.png";
import StateOfNW49 from "@/app/assets/state-of-nw-49.png";
import StateOfNW416 from "@/app/assets/state-of-nw-416.png";
import StateOfNW430 from "@/app/assets/state-of-nw-430.png";
import StateOfNW57 from "@/app/assets/state-of-nw-57.png";
import StateOfNW514 from "@/app/assets/state-of-nw-514.png";
import StateOfNW611 from "@/app/assets/state-of-nw-611.png";
import StateOfNW72 from "@/app/assets/state-of-nw-72.png";
import StateOfNWNew from "@/public/og.png";

const LOCAL_IMAGE_BY_DATE: Record<string, any> = {
  "2025-07-02": StateOfNW72,
  "2025-06-26": StateOfNWNew,
  "2025-06-11": StateOfNW611,
  "2025-05-21": StateOfNWNew,
  "2025-05-14": StateOfNW514,
  "2025-05-07": StateOfNW57,
  "2025-04-30": StateOfNW430,
  "2025-04-16": StateOfNW416,
  "2025-04-09": StateOfNW49,
  "2025-04-02": StateOfNW42,
  "2025-03-12": StateOfNW312,
  "2025-02-26": StateOfNW226,
  "2025-02-12": StateOfNW212,
  "2025-02-05": StateOfNWOld,
};

function pickThumbURL(thumbnails?: YTThumbs): string | null {
  if (!thumbnails) return null;
  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    null
  );
}

export async function fetchStateOfNativewind(): Promise<Item[]> {
  const key = process.env.YOUTUBE_API_KEY!;
  const playlistId = "PLTJ_03aE21aqjklDI99Ny82TEit4BqsMM";
  if (!key || !playlistId) return [];

  // 1) Get all items in the playlist (paginated)
  let pageToken: string | undefined;
  const ids: string[] = [];
  const base = `${API}/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${key}`;

  do {
    const url = pageToken ? `${base}&pageToken=${pageToken}` : base;
    const r = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 3 } }); // cache 3 days
    const data = await r.json();
    (data.items || []).forEach((it: any) => {
      const vid = it.contentDetails?.videoId;
      if (vid) ids.push(vid);
    });
    pageToken = data.nextPageToken;
  } while (pageToken);

  if (!ids.length) return [];

  // 2) Batch video details (duration). 50 per call.
  const chunks: string[][] = [];
  for (let i = 0; i < ids.length; i += 50) chunks.push(ids.slice(i, i + 50));

  const idToDuration = new Map<string, string>();
  const idToUploadDate = new Map<string, string>(); // video.snippet.publishedAt
  for (const chunk of chunks) {
    const vidsURL = `${API}/videos?part=contentDetails,snippet&id=${chunk.join(
      ","
    )}&key=${key}`;
    const r = await fetch(vidsURL, { next: { revalidate: 60 * 60 * 24 * 3 } });
    const data = await r.json();
    (data.items || []).forEach((v: any) => {
      idToDuration.set(
        v.id,
        iso8601ToClock(v.contentDetails?.duration || "PT0S")
      );
      idToUploadDate.set(v.id, v.snippet?.publishedAt || "");
    });
  }

  // 3) Build the final array (title/date/url/image).
  // We request playlistItems again (first page loop already had them, but we need titles/thumbs & dates aligned).
  // Simpler: pull again, pushing items as we go.
  const out: Item[] = [];
  pageToken = undefined;
  do {
    const url: any = pageToken ? `${base}&pageToken=${pageToken}` : base;
    const r = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 3 } });
    const data = await r.json();
    (data.items || []).forEach((it: any) => {
      const vid = it.contentDetails?.videoId;
      if (!vid) return;

      const titleRaw = it.snippet?.title || "State of Nativewind";
      const title = /Office Hours/i.test(titleRaw)
        ? "Nativewind Office Hours"
        : "State of Nativewind";

      // prefer date-from-title to keep your old naming, fallback to actual upload date
      const uploadISO = (idToUploadDate.get(vid) || "").slice(0, 10);
      const iso = parseDateFromTitleOr(titleRaw, uploadISO);
      const localImage = LOCAL_IMAGE_BY_DATE[iso];
      const thumb = pickThumbURL(it.snippet?.thumbnails);
      const image = localImage ?? thumb ?? StateOfNWNew; // fallback to your og.png if needed

      out.push({
        title,
        image,
        date: iso,
        time: idToDuration.get(vid) || "00:00",
        url: `https://www.youtube.com/watch?v=${vid}`,
      });
    });
    pageToken = data.nextPageToken;
  } while (pageToken);

  // Sort descending by date (newest first)
  out.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return out;
}
