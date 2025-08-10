import Link from 'next/link';
import { getAllPosts } from '../../utils/posts';

export const metadata = {
  title: 'Blog – Douglas PC',
  description: 'Guides on digital presence, AI strategy, performance engineering, and growth enablement.',
};

const BlogIndex = () => {
  const posts = getAllPosts();
  return (
    <main className="sm:p-16 xs:p-8 px-6 py-12 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">Insights & Guides</h1>
      <p className="text-secondary-white max-w-2xl mb-10">Practical playbooks and frameworks for building resilient digital products, operational AI, and integrated growth systems.</p>
      <ul className="space-y-8">
        {posts.map((p) => (
          <li key={p.slug} className="group border border-[#2a2a2a] rounded-2xl p-6 hover:bg-[#1F2A36]/60 transition-colors">
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#6ab0ff]">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <div className="text-xs uppercase tracking-wide text-[#6ab0ff]/80 mb-2 flex gap-3">
              <span>{new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              <span>• {p.readingTime} min read</span>
            </div>
            <p className="text-sm text-secondary-white/80 leading-relaxed">{p.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.isArray(p.tags) && p.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-[#253241] text-[#c9e6ff]">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogIndex;
