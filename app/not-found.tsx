import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="border-y border-dashed m-auto text-center flex flex-col items-center gap-4 py-8 w-screen max-w-fd-container">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <h1 className="font-mono text-8xl font-bold opacity-50">404</h1>
      <h2 className="font-mono text-2xl font-bold">Not Found</h2>
      <p className="font-mono opacity-50 text-sm">Could not find<br/> requested resource</p>
      <Link href="/" className="w-fit mx-auto bg-fd-foreground text-fd-background font-mono px-4 py-2 border-y border-dashed hover:rounded-xl duration-300">Return Home</Link>
    </div>
  )
}