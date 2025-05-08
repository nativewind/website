import SectionLink from "./SectionLink";

export default function SectionTitle({ id, title } : { id: string; title: string }) {
  return (
    <h1 id={id} className="text-2xl md:text-4xl font-medium py-4 md:pt-8 border-t border-dashed backdrop-blur w-full dark:opacity-90 text-center md:text-left">
      <SectionLink className="z-30 max-lg:px-4 lg:hidden" href={`#${id}`} name="text-4xl px-4 pb-4 pt-8 " />
      <SectionLink className="z-30 max-lg:px-4 hidden lg:block" href={`#${id}`} name="text-4xl pb-4 pt-8 " />
      <div className="w-full max-w-fd-container max-lg:px-4 mx-auto">
        {title}
      </div>
    </h1>
  )
}