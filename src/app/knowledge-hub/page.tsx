import Link from "next/link";
import { client } from "@/lib/sanity";
import Breadcrumbs from "@/components/Breadcrumbs";
import { optimizeImage } from "@/lib/image";

async function getGuides() {
    const query = `*[_type == "guide"] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt
  }`;
    return await client.fetch(query);
}

export default async function KnowledgeHubPage() {
    const guides = await getGuides();

    const crumbs = [
        { label: "Home", href: "/" },
        { label: "Knowledge Hub", href: "/knowledge-hub" },
    ];

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs crumbs={crumbs} />

            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
                Knowledge Hub
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide: any) => (
                    <Link
                        key={guide.slug.current}
                        href={`/knowledge-hub/${guide.slug.current}`}
                        className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        {guide.mainImage && (
                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                <img
                                    src={optimizeImage(guide.mainImage, 600, 338)}
                                    alt={guide.title}
                                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                                {guide.category}
                            </span>
                            <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {guide.title}
                            </h2>
                            <p className="mt-3 text-gray-600 line-clamp-3">
                                {guide.excerpt}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
