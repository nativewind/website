export default function BlogTitleDecoration() {
  return (
    <>
      {/* outside */}
      <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute h-full pointer-events-none">
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
      </div>
      {/* inside */}
      <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute overflow-clip h-full pointer-events-none">
        <div className="bg-grid-dots rounded-full w-[50rem] h-[50rem] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)] opacity-50"/>
        <div className="absolute bottom-0 right-0 translate-x-1/2 h-[64rem] w-screen bg-grid-lines-y-lg translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
      </div>
      </>
  );
}