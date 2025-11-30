export function HowItWorksSection() {
    const steps = [
        {
            number: 1,
            title: "Register via Chatbot",
            description: "Sign up easily through our RisePath chatbot. Just enter your email, share a little about your background and goals, and your personalized career journey begins instantly."
        },
        {
            number: 2,
            title: "Receive AI Coaching & Daily Action Plan",
            description: "Interact with your dedicated AI Career Coach for personalized advice, resume optimization, and interview practice. You’ll also get daily task reminders sent directly to your email—so you stay on track and make steady progress."
        },
        {
            number: 3,
            title: "Reach Your Career Milestones",
            description: "Apply to jobs with confidence, knowing you have actionable insights, preparation routines, and real support every step of the way. Track your progress in real time and watch your career momentum grow."
        }
    ]

    return (
        <section className="py-20 lg:py-32 bg-white/5">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Get Started in 3 Simple Steps
                    </h2>
                    <p className="text-text-secondary">
                        Follow our straightforward process to unlock your career potential and land your dream job.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.number} className="relative text-center group">
                            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-card text-xl font-bold text-primary shadow-sm transition-colors group-hover:border-primary/50 group-hover:text-primary">
                                {step.number}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                            <p className="text-text-secondary leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
