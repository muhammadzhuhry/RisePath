import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Hexagon, Menu, X } from "lucide-react"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CallToActionSection } from "@/components/CallToActionSection"
import { Footer } from "@/components/Footer"
import VoiceflowWidget from './components/VoiceFlowWidget'

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-400">
                            <Hexagon className="h-5 w-5 text-white fill-white" />
                        </div>
                        <span className="text-xl font-bold text-white">RisePath</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Features</a>
                        <a href="#" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">How It Works</a>
                        <a href="#" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">Testimonials</a>
                    </nav>

                    {/* <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-text-secondary hover:text-white">Log In</Button>
                        <Button>Sign Up</Button>
                    </div> */}

                    <button
                        className="md:hidden text-text-secondary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-b border-white/5 bg-background px-4 py-4">
                        <nav className="flex flex-col gap-4">
                            <a href="#" className="text-sm font-medium text-text-secondary hover:text-white">Features</a>
                            <a href="#" className="text-sm font-medium text-text-secondary hover:text-white">How It Works</a>
                            <a href="#" className="text-sm font-medium text-text-secondary hover:text-white">Testimonials</a>
                            {/* <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                                <Button variant="ghost" className="justify-start text-text-secondary hover:text-white">Log In</Button>
                                <Button className="justify-start">Sign Up</Button>
                            </div> */}
                        </nav>
                    </div>
                )}
            </header>

            <main>
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <CallToActionSection />
                <VoiceflowWidget />
            </main>

            <Footer />
        </div>
    )
}

export default App
