import { notFound } from 'next/navigation';
import { getPageContent } from '@/lib/actions';
import type { Metadata } from 'next';
import { remark } from 'remark';
import html from 'remark-html';

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug.join('/');
  const page = await getPageContent(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.title,
    description: page.content.substring(0, 150),
  };
}

export default async function DynamicPage({ params }: Props) {
  const slug = params.slug.join('/');
  const page = await getPageContent(slug);

  if (!page) {
    notFound();
  }

  const processedContent = await remark()
    .use(html)
    .process(page.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <article
        className="prose prose-invert max-w-none prose-h1:text-foreground prose-h2:text-primary prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground prose-blockquote:border-primary prose-blockquote:bg-card prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}

// Optional: If you want to pre-build some pages at build time
// export async function generateStaticParams() {
//   // You could fetch all page slugs from your CMS/database here
//   const slugs = ['about', 'terms', 'privacy'];
//   return slugs.map(slug => ({
//     slug: [slug],
//   }));
// }
