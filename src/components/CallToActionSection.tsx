import { Button } from "@/components/ui/button"

export function CallToActionSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-card to-card/50 border border-white/5 px-6 py-16 text-center shadow-2xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Ready to Reignite Your Career?
                    </h2>
                    <p className="mx-auto max-w-xl text-text-secondary mb-10">
                        Talk to the RisePath AI Agent now and start your personalized journey toward your next professional milestone.
                    </p>
                    <Button size="lg" className="h-12 px-8 text-base">
                        Talk to RisePath AI Agent
                    </Button>
                </div>
            </div>
        </section>
    )
}
