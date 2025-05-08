export default function GridLayoutVisual() {
  return (
    <div className="w-[calc(100%-2rem)] h-[calc(100%-4rem)] mx-auto mt-auto mb-4 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-2 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
      <div className="bg-black/2 dark:bg-white/2 group-hover:bg-pink-500/15 dark:group-hover:bg-pink-400/3 group-hover:border-pink-400/20 duration-300 col-span-2 row-span-1 overflow-hidden rounded-t-xl sm:col-span-1 sm:row-span-2 sm:rounded-t-md sm:rounded-tl-xl border rounded-md grid place-items-center">
        {/* <span className="sm:hidden">col-span-2 row-span-1</span>
        <span className="hidden text-xs text-fd-muted-foreground sm:block">sm:col-span-1 sm:row-span-2</span> */}
      </div>
      <div className="relative sm:rounded-tr-xl group-hover:bg-pink-500/10 dark:group-hover:bg-pink-400/2 group-hover:border-pink-400/20 duration-300 border rounded-md grid place-items-center">
        {/* <span className="sm:hidden">col-span-2 row-span-1</span>
        <span className="hidden text-xs text-fd-muted-foreground sm:block">sm:col-span-1 sm:row-span-2</span> */}
      </div>
      <div className="relativ border group-hover:bg-pink-500/5 dark:group-hover:bg-pink-400/1 group-hover:border-pink-400/20 duration-300 rounded-md" />
      <div className="relative col-span-2 overflow-hidden group-hover:bg-pink-400/00 group-hover:border-pink-400/20 duration-300 rounded-b-xl border rounded-md" />
    </div>
  );
}