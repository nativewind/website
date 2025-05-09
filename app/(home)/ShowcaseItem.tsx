import Image, { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";

export interface ShowcaseItemProps {
  name: string;
  website?: string;
  appstore?: string;
  playstore?: string;
  logo: StaticImageData;
  description: string;
}

export default function ShowcaseItem({ name, website, appstore, playstore, logo, description }: ShowcaseItemProps) {
  return (
    <div className={`group pt-12 ${website && 'pb-14'}`}>
      <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card relative">

        <Image src={logo} className="rounded-2xl h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted object-cover" alt={`${name} logo`} />
        <b className="font-bold text-xl">{name}</b>
        <p className="opacity-50 mt-2 text-pretty line-clamp-3">{description}</p>
          
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="absolute left-0 bottom-0 translate-y-12 group/link border px-3 py-1.5 shadow-xl dark:shadow-2xl group-hover:translate-y-1/2 group-hover:translate-x-4 duration-300 bg-fd-accent hover:bg-fd-background hover:border-black dark:hover:border-fd-primary dark:hover:shadow-fd-primary rounded-xl font-mono text-sm w-fit ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex gap-2">
            {website}
            <ExternalLink className="w-4 h-4 opacity-0 inline-block group-hover/link:opacity-100 group-hover/link:translate-0 -translate-x-1/2 translate-y-1/2 scale-50 group-hover/link:scale-100 duration-300" />
          </a>
        )}

        <div className="absolute top-3 right-3 flex gap-3">
          {playstore && (
            <a href={playstore} target="_blank" rel="noopener noreferrer" className="border p-1.5 shadow-xl dark:shadow-2xl duration-300 bg-fd-accent hover:bg-fd-background hover:border-black dark:hover:border-fd-primary dark:hover:shadow-fd-primary rounded-xl font-mono text-sm w-fit group-hover:-translate-y-8 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] delay-75 hover:delay-0 hover:scale-105 hover:rounded-xl active:duration-75 active:scale-95 active:-translate-y-7 group-hover:rotate-6 hover:text-fd-foreground dark:hover:text-fd-primary">
              <PlayStoreIcon className="w-8 h-8 fill-current" />
            </a>
          )}
          {appstore && (
            <a href={appstore} target="_blank" rel="noopener noreferrer" className="border p-1.5 shadow-xl dark:shadow-2xl duration-300 bg-fd-accent hover:bg-fd-background hover:border-black dark:hover:border-fd-primary dark:hover:shadow-fd-primary rounded-xl font-mono text-sm w-fit group-hover:-translate-y-6 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] delay-0 hover:delay-0 hover:scale-105 hover:rounded-xl active:duration-75 active:scale-95 active:-translate-y-5 group-hover:rotate-3 hover:text-fd-foreground dark:hover:text-fd-primary">
              <AppStoreIcon className="w-8 h-8 fill-current" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}


function AppStoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>App Store</title><path d="M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z"/></svg>
  );
}

function PlayStoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>
  );
}