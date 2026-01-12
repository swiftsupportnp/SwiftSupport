import { client } from "@/lib/sanity";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { optimizeImage } from "@/lib/image";

async function getGuide(slug: string) {
    const query = `*[_type == "guide" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    mainImage,
    category,
    content
  }`;
    return await client.fetch(query, { slug });
}

export default async function GuidePage({ params }: { params: { slug: string } }) {
    const guide = await getGuide(params.slug);

    if (!guide) {
        notFound();
    }

    const crumbs = [
        { label: "Home", href: "/" },
        { label: "Knowledge Hub", href: "/knowledge-hub" },
        { label: guide.title, href: `/knowledge-hub/${guide.slug.current}` },
    ];

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs crumbs={crumbs} />

            <header className="mb-8">
                <span className="text-lg font-semibold text-blue-600 uppercase tracking-wider">
                    {guide.category}
                </span>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
                    {guide.title}
                </h1>
                {guide.excerpt && (
                    <p className="mt-4 text-xl text-gray-600 leading-relaxed italic">
                        {guide.excerpt}
                    </p>
                )}
            </header>

            {guide.mainImage && (
                <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={optimizeImage(guide.mainImage, 1200)}
                        alt={guide.title}
                        className="w-full h-auto"
                    />
                </div>
            )}

            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-8">
                <PortableText value={guide.content} />
            </div>
        </article>
    );
}
