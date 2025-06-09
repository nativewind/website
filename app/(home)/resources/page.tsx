import CommunityPostsSection from './CommunityPostsSection';
import StateOfNativewindSection from './StateOfNativewindSection';
import ComponentKitsSection from '@/app/(home)//ComponentKitsSection';
import SocialsSection from './SocialsSection';
import FooterSection from '@/app/(home)/FooterSection';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip max-w-screen">
      {/* left-[calc((100vw-var(--fd-layout-offset)+var(--fd-sidebar-width))/2)] -translate-x-1/2 */}
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />

      <CommunityPostsSection />
      <StateOfNativewindSection />
      <ComponentKitsSection />
      <SocialsSection />
      <FooterSection />
    </main>
  );
}
