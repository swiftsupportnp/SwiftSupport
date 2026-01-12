"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import StarRating from "./StarRating";
import { optimizeImage } from "@/lib/image";

interface Testimonial {
    name: string;
    role?: string;
    content: string;
    rating: number;
    image?: any;
}

interface TestimonialsSliderProps {
    testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="py-20 bg-[#F4F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-[#004A99] sm:text-4xl">
                        Success Stories from Our Clients
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Trusted by businesses across Nepal for expert consultancy.
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                                        <div className="text-blue-200 mb-6">
                                            <Quote size={40} fill="currentColor" />
                                        </div>

                                        <StarRating rating={testimonial.rating} />

                                        <p className="mt-6 text-gray-700 leading-relaxed flex-grow italic">
                                            "{testimonial.content}"
                                        </p>

                                        <div className="mt-8 flex items-center">
                                            {testimonial.image ? (
                                                <img
                                                    src={optimizeImage(testimonial.image, 100, 100)}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-50"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 font-bold">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                {testimonial.role && (
                                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
