import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://swiftsupport.com.np";

    // Fetch all dynamic routes from Sanity
    const query = `{
    "pages": *[_type == "page"] { "slug": slug.current, _updatedAt },
    "services": *[_type == "service"] { "slug": slug.current, _updatedAt },
    "guides": *[_type == "guide"] { "slug": slug.current, _updatedAt }
  }`;

    const { pages, services, guides } = await client.fetch(query);

    const pageRoutes = pages.map((page: any) => ({
        url: `${baseUrl}/${page.slug === "home" ? "" : page.slug}`,
        lastModified: new Date(page._updatedAt),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    const serviceRoutes = services.map((service: any) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(service._updatedAt),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const guideRoutes = guides.map((guide: any) => ({
        url: `${baseUrl}/knowledge-hub/${guide.slug}`,
        lastModified: new Date(guide._updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...pageRoutes,
        ...serviceRoutes,
        ...guideRoutes,
    ];
}
