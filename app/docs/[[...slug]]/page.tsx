import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const page = source.getPage(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <page.data.body />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = source.getPage(resolvedParams.slug);
  
  if (!page) {
    return { title: 'Not Found' };
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
