import RequestForm from '../../../components/request-form';
import SectionTitle from '../SectionTitle';
import FooterSection from '../FooterSection';

export const metadata = {
  title: 'Hire Us | Nativewind',
  description: 'Request custom development or hire us for your Nativewind project.',
};

export default function HireUsPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      
      <div className="bg-fd-background/50 pt-56 backdrop-blur relative">
        <HireUsTitleDecoration />
        <SectionTitle id="hire-us" title="Hire Us" className="backdrop-blur-none" />
      </div>
      
      <div className="relative min-h-[calc(100vh-16rem-6.5625rem)] flex flex-col mx-auto w-full border-t border-dashed bg-fd-background">
        <div className="max-w-fd-container mx-auto w-full px-8 lg:px-0 py-8">
          <p className="opacity-70 mb-8">
            Need help with your Nativewind project? We may be able to help.
          </p>

          <div className="space-y-8">
            <div>
              <RequestForm />
            </div>
          </div>
        </div>
        <div className="mt-auto border-b border-dashed max-w-fd-container mx-auto w-full"/>
      </div>
      
      <FooterSection />
    </main>
  );
}

function HireUsTitleDecoration() {
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