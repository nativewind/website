import { posts } from './community-posts';
import CommunityPost from './CommunityPost';
import SectionTitle from '@/app/(home)/SectionTitle';
import ResourcesTitleDecoration from './Decoration';

export default function CommunityPostsSection() {
  return (
    <>
      <div className="bg-fd-background/50 pt-56 backdrop-blur relative overflow-clip">
        <ResourcesTitleDecoration />
        <SectionTitle id="community" title="Community Resources" className="backdrop-blur-none" />
      </div>
      <div className="relative flex mx-auto overflow-x-scroll w-full border-b border-dashed max-w-fd-container [mask-image:linear-gradient(to_right,red,red_calc(100%-8rem),transparent)]">
        {posts.map((p) => (
          <CommunityPost key={p.url} {...p}/>
        ))}
        {/* spacer for last item to not be covered by mask-image */}
        <div className="my-auto px-12 text-4xl">
          🎉
        </div>
      </div>
    </>
  );
}