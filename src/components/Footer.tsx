import { Hexagon } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    {/* Left Side */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-400">
                                <Hexagon className="h-5 w-5 text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold text-white">RisePath</span>
                        </div>
                        <p className="text-sm text-text-secondary">
                            Your AI-Powered Career Recovery Coach.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-4 md:items-end">
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </div>
                        <div className="text-xs text-text-secondary/50">
                            © 2024 RisePath. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
