import { marked } from 'marked';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '../../../utils/posts';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://example.com';
  const url = `${origin}/blog/${post.slug}`;
  return {
    title: `${post.title} – Douglas PC`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} – Douglas PC`,
      description: post.excerpt,
      url,
      type: 'article',
      siteName: 'Douglas PC',
      tags: post.tags,
    },
  };
}

const BlogPostPage = ({ params }) => {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const html = marked.parse(post.content);
  const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://example.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Douglas PC' },
    publisher: { '@type': 'Organization', name: 'Douglas PC' },
    description: post.excerpt,
    mainEntityOfPage: `${origin}/blog/${post.slug}`,
  };
  return (
    <main className="sm:p-16 xs:p-8 px-6 py-12 max-w-3xl mx-auto text-white">
      <Link href="/blog" className="text-sm text-[#6ab0ff] underline">← Back to all posts</Link>
      <article className="mt-6">
        <h1 className="text-4xl font-bold mb-3 leading-tight">{post.title}</h1>
        <div className="text-xs uppercase tracking-wide text-[#6ab0ff]/80 mb-6 flex gap-3">
          <span>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span>• {post.readingTime} min read</span>
        </div>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="mt-8 flex flex-wrap gap-2">
          {Array.isArray(post.tags) && post.tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-[#253241] text-[#c9e6ff]">{t}</span>
          ))}
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default BlogPostPage;
