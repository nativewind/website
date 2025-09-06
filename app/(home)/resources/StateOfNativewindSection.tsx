export const revalidate = 60 * 60 * 24 * 3; // ISR: 3 days

import SectionTitle from "../SectionTitle";
import StateOfNativewindCard from "./StateOfNativewindCard";
import { fetchStateOfNativewind } from "@/lib/youtube-state";

export default async function StateOfNativewindSection() {
  const items = await fetchStateOfNativewind();

  return (
    <>
      <SectionTitle id="state-of-nativewind" title="State of Nativewind" />
      <div className="relative flex mx-auto overflow-x-scroll w-full border-b border-dashed max-w-fd-container [mask-image:linear-gradient(to_right,red,red_calc(100%-8rem),transparent)]">
        {items.map((item) => (
          <StateOfNativewindCard key={item.url} {...item} />
        ))}
        {/* spacer for last item to not be covered by mask-image */}
        <div className="my-auto px-12 text-4xl">💨</div>
      </div>
    </>
  );
}
