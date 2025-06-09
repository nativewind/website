import SectionTitle from "../SectionTitle";
import { stateOfNativewind } from './state-of-nw';
import StateOfNativewindCard from './StateOfNativewindCard';

export default function StateOfNativewindSection() {
  return (
    <>
      <SectionTitle id="state-of-nativewind" title="State of Nativewind" />
      <div className="relative flex mx-auto overflow-x-scroll w-full border-b border-dashed max-w-fd-container [mask-image:linear-gradient(to_right,red,red_calc(100%-8rem),transparent)]">
        {stateOfNativewind.map((item) => (
          <StateOfNativewindCard key={item.url} {...item} />
        ))}
      </div>
    </>
  )
}