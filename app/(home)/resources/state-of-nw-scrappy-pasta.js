// === CONFIGURATION ===
const filterDate = "2025-07-01"; // Only include videos on/after this date
// =====================

const parseDateFromTitle = (title) => {
  const match = title.match(/:?\s*([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!match) return null;
  const [_, month, day, year] = match;
  const monthIndex = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  }[month.slice(0, 3)];
  const isoDate = `${year}-${String(monthIndex).padStart(
    2,
    "0"
  )}-${day.padStart(2, "0")}`;
  const imageName = `StateOfNW${monthIndex}${day.padStart(2, "0")}`;
  return { isoDate, imageName };
};

const videos = Array.from(
  document.querySelectorAll("ytd-playlist-video-renderer")
)
  .map((node) => {
    const anchor = node.querySelector("a#video-title");
    const fullTitle = anchor?.getAttribute("title")?.trim() || "";
    const urlSuffix = anchor?.getAttribute("href")?.split("&")[0] || "";
    const url = `https://www.youtube.com${urlSuffix}`;
    const time =
      node
        .querySelector("ytd-thumbnail-overlay-time-status-renderer span")
        ?.innerText.trim() || null;
    const dateInfo = parseDateFromTitle(fullTitle);

    if (!dateInfo) return null;

    return {
      title: "State of Nativewind",
      image: dateInfo.imageName,
      date: dateInfo.isoDate,
      time,
      url,
    };
  })
  .filter((v) => v && v.date >= filterDate);

console.log("export const stateOfNativewind =", videos);
