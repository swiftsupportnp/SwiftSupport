import Link from "next/link";
import Script from "next/script";

interface Crumb {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
    // Base site URL for LD+JSON
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://swiftsupport.com";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.label,
            "item": `${baseUrl}${crumb.href}`,
        })),
    };

    return (
        <>
            <Script
                id="breadcrumbs-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className="my-4">
                <ol className="flex list-none p-0 text-sm text-gray-600">
                    {crumbs.map((crumb, index) => (
                        <li key={crumb.href} className="flex items-center">
                            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                            {index === crumbs.length - 1 ? (
                                <span className="font-semibold text-gray-900">{crumb.label}</span>
                            ) : (
                                <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
