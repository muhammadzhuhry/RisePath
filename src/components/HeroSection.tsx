import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 text-center lg:pt-40 lg:pb-32">
            {/* Background Grid Effect */}
            {/* Background Grid Effect */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background">
                <div
                    className="absolute h-full w-full [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            <div className="container px-4 md:px-6">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-text-secondary backdrop-blur-sm mb-8">
                    <Sparkles className="mr-2 h-4 w-4 text-primary" />
                    <span>Powered by <strong className="text-white">VoiceFlow</strong> & <strong className="text-white">Make</strong></span>
                </div>

                <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                    Reignite Your Career Path<br />
                    with AI-Powered Coaching
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-text-secondary mb-10">
                    RisePath provides personalized, data-driven guidance to help you navigate career transitions and achieve your professional goals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-12 px-8 text-base">
                        Start Your Journey
                    </Button>
                </div>
            </div>
        </section>
    )
}
