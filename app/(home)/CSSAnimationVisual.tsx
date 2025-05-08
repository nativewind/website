export default function CSSAnimationVisual() {
  return (
    <div className="flex flex-col justify-center p-4 pt-8 gap-4 w-full h-full">
      <div className="gap-2">
        <span className="font-mono ml-2">linear</span>
        <div className="border bg-blue-500/2 rounded-xl @container p-2 relative flex justify-between">
          <div className="h-10 w-10 border border-dashed rounded-lg bg-blue-500/2"/>
          <div className="h-10 w-10 border border-dashed rounded-lg bg-blue-500/2"/>
          <div className="bg-blue-500 dark:bg-blue-400 rounded-lg h-10 w-10 absolute border border-dashed animate-left-right" style={{
            animationTimingFunction: 'linear',
          }} />
        </div>
      </div>
      <div className="gap-2">
        <span className="font-mono ml-2">ease-out</span>
        <div className="border bg-purple-500/2 rounded-xl @container p-2 relative flex justify-between">
          <div className="h-10 w-10 border border-dashed rounded-lg bg-purple-500/2"/>
          <div className="h-10 w-10 border border-dashed rounded-lg bg-purple-500/2"/>
          <div className="bg-purple-500 dark:bg-purple-400 rounded-lg h-10 w-10 absolute border border-dashed animate-left-right" style={{
            animationTimingFunction: 'ease-out',
          }} />
        </div>
      </div>
      <div className="gap-2">
        <span className="font-mono ml-2">ease-in-out</span>
        <div className="border bg-rose-500/2 rounded-xl @container p-2 relative flex justify-between">
          <div className="h-10 w-10 border border-dashed rounded-lg bg-rose-500/2"/>
          <div className="h-10 w-10 border border-dashed rounded-lg bg-rose-500/2"/>
          <div className="bg-rose-500 dark:bg-rose-400 rounded-lg h-10 w-10 absolute border border-dashed animate-left-right" style={{
            animationTimingFunction: 'ease-in-out',
          }} />
        </div>
      </div>
      <div className="gap-2">
        <span className="font-mono ml-2">ease-in</span>
        <div className="border bg-indigo-500/2 rounded-xl @container p-2 relative flex justify-between">
          <div className="h-10 w-10 border border-dashed rounded-lg bg-indigo-500/2"/>
          <div className="h-10 w-10 border border-dashed rounded-lg bg-indigo-500/2"/>
          <div className="bg-indigo-500 dark:bg-indigo-400 rounded-lg h-10 w-10 absolute border border-dashed animate-left-right" style={{
            animationTimingFunction: 'ease-in',
          }} />
        </div>
      </div>
    </div>
  );
}