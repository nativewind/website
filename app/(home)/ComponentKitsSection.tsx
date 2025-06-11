import SectionTitle from "./SectionTitle";
import UIKitCard from "./UIKitCard";

export default function ComponentKitsSection() {
  return (
    <>
      <SectionTitle id="component-kits" title="UI Component Kits" />

      <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-y border-dashed">    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <UIKitCard url="https://nativewindui.com" title="NativewindUI" preview="https://nativewindui.com/og.png" description="30+ beautiful components and flows that strive for a native look & feel. The perfect starting point for those who need to ship fast and look good doing it." />
          <UIKitCard url="https://rnr-docs.vercel.app/" title="React Native Reusables" preview="https://rnr-docs.vercel.app/og.jpeg" description="Build your own component libraries with react-native-reusables. Copy, paste, and tailor the code to suit your specific requirements." />
          <UIKitCard url="https://gluestack.io/" title="gluestack" preview="https://gluestack.io/images/og-image.png" description="Comprehensive React and React Native component library for building modern, high-performance web and mobile apps. Copy-paste UI components library & patterns crafted with Tailwind CSS (Nativewind)." />
        </div>
      </section>
    </>
  )
}