import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, FileText, MessageSquare, TrendingUp } from "lucide-react"

const features = [
    {
        icon: User,
        title: "Personalized Coaching",
        description: "Receive tailored advice and action plans based on your unique skills and career aspirations."
    },
    {
        icon: FileText,
        title: "Resume Optimization",
        description: "Craft a standout resume with AI suggestions that highlight your strengths and beat applicant tracking systems."
    },
    {
        icon: MessageSquare,
        title: "Interview Preparation",
        description: "Build confidence with mock interviews and AI-driven feedback on your communication and presentation skills."
    },
    {
        icon: TrendingUp,
        title: "Job Market Analysis",
        description: "Gain a competitive edge with real-time insights into industry trends and in-demand skills."
    }
]

export function FeaturesSection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Your Personal AI Career Strategist
                    </h2>
                    <p className="text-text-secondary">
                        Leverage cutting-edge technology to get back on track. We provide the tools and insights you need to succeed in today's competitive job market.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-white/5 bg-card transition-all hover:-translate-y-1 hover:bg-card/80">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
