import React from 'react';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "Erlangga sangat profesional dan kreatif dalam mengerjakan desain poster kami. Hasilnya melebihi ekspektasi!",
            author: "BAZMA Islamic Boarding School",
            role: "Multimedia Project"
        },
        {
            id: 2,
            text: "Social media branding yang dibuat sangat engaging dan sesuai dengan target audience kami. Highly recommended!",
            author: "Mention Brand",
            role: "Social Media Client"
        },
        {
            id: 3,
            text: "Pengerjaan cepat, komunikatif, dan hasil desainnya sangat kreatif. Pasti akan collaborate lagi!",
            author: "Puskesmas Project",
            role: "Health Campaign"
        }
    ];

    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-[1400px] mx-auto px-6">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-black text-[#831514] mb-12 text-center">
                        What People Say
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="text-4xl text-[#831514] mb-4">"</div>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {testimonial.text}
                                </p>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="font-bold text-[#831514]">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;