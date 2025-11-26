import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogBySlug, getBlogs } from '@/lib/actions';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { remark } from 'remark';
import html from 'remark-html';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
      images: post.imageUrl ? [post.imageUrl] : [],
      siteName: 'OZNIOR',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <article>
        <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <p className="text-muted-foreground">By {post.author} on {format(new Date(post.createdAt), 'MMMM dd, yyyy')}</p>
        </header>
        
        {post.imageUrl && (
            <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-lg border border-border">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        )}

        <div 
            className="prose prose-invert max-w-none prose-h2:text-primary prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map(post => ({
    slug: post.slug,
  }));
}
