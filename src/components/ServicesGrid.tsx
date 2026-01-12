import Link from "next/link";
import { client } from "@/lib/sanity";
import LucideIcon from "./LucideIcon";

async function getServices() {
    const query = `*[_type == "service"] | order(title asc) {
    title,
    slug,
    icon,
    description
  }`;
    return await client.fetch(query);
}

export default async function ServicesGrid() {
    const services = await getServices();

    if (!services || services.length === 0) return null;

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Core Services
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Comprehensive business solutions tailored for the Nepalese market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service: any) => (
                        <div
                            key={service.slug?.current || service.title}
                            className="relative group bg-white p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <LucideIcon name={service.icon || "Briefcase"} size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-3">
                                {service.description}
                            </p>
                            <Link
                                href={`/services/${service.slug?.current || "#"}`}
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                Learn More
                                <LucideIcon name="ChevronRight" size={20} className="ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
