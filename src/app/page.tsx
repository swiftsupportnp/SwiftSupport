import ContactForm from "@/components/ContactForm";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { client } from "@/lib/sanity";

async function getTestimonials() {
    const query = `*[_type == "testimonial"] | order(_createdAt desc) {
        name,
        role,
        content,
        rating,
        image
    }`;
    return await client.fetch(query);
}

export default async function Home() {
    const testimonials = await getTestimonials();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#F4F7FA]">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-4xl font-extrabold text-[#004A99]">
                    SwiftSupport Business Consultancy
                </h1>
            </div>

            <div className="relative flex flex-col items-center gap-8 mt-12 bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Book Your Free Consultation</h2>
                    <p className="mt-2 text-gray-600">Expert guidance for business registration, TAX/VAT, and more in Nepal.</p>
                </div>
                <ContactForm />
            </div>

            <ServicesGrid />

            <TestimonialsSlider testimonials={testimonials} />
        </main>
    );
}
