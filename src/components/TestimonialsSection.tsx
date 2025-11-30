import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
    {
        name: "Sarah L.",
        role: "Senior Product Manager",
        image: "https://i.pravatar.cc/150?img=5",
        quote: "After being laid off, I felt lost. RisePath's AI coach helped me rebuild my confidence and tailor my resume perfectly. I landed a better job in just six weeks!"
    },
    {
        name: "Michael B.",
        role: "Software Engineer",
        image: "https://i.pravatar.cc/150?img=11",
        quote: "The interview preparation was a game-changer. The AI feedback on my answers was incredibly detailed and helped me ace the technical rounds."
    },
    {
        name: "Jessica T.",
        role: "Marketing Director",
        image: "https://i.pravatar.cc/150?img=9",
        quote: "RisePath gave me the strategic edge I needed. The job market analysis helped me identify skills to highlight, leading to multiple offers."
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Success Stories from Our Users
                    </h2>
                    <p className="text-text-secondary">
                        Don't just take our word for it. Here's what professionals are saying about their experience with RisePath.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-white/5 bg-card">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-text-secondary">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-text-secondary italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
