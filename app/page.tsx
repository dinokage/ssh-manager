import Link from "next/link"
import { ArrowRight, Terminal, Key, Server, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TerminalDemo } from "@/components/landing/terminal-demo"
import { FeatureCard } from "@/components/landing/feature-card"
import { Testimonial } from "@/components/landing/testimonial"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">SSHManager</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-purple-600 hover:bg-purple-700">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Manage SSH Connections <br className="hidden md:inline" />
              <span className="text-purple-500">With Ease</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[42rem] mb-10">
              A modern, secure, and user-friendly SSH connection manager that lets you connect to your servers directly
              from the browser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/register">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </div>

            <div className="w-full max-w-5xl rounded-lg border bg-card p-2 shadow-xl">
              <TerminalDemo />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful <span className="text-purple-500">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Key className="h-10 w-10 text-purple-500" />}
                title="SSH Key Management"
                description="Generate, import, and manage your SSH keys securely in one place."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-purple-500" />}
                title="Connection Profiles"
                description="Save and organize your connection details for quick access."
              />
              <FeatureCard
                icon={<Terminal className="h-10 w-10 text-purple-500" />}
                title="In-Browser Terminal"
                description="Connect to your servers directly from your browser with our full-featured terminal."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-purple-500" />}
                title="Secure by Design"
                description="Your credentials never leave your device. All connections are end-to-end encrypted."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-purple-500" />}
                title="Session History"
                description="Keep track of your commands and sessions for future reference."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-purple-500" />}
                title="Team Sharing"
                description="Share connection profiles with your team securely (coming soon)."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our <span className="text-purple-500">Users Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                quote="This tool has completely changed how I manage my servers. The in-browser terminal is a game-changer!"
                author="Alex Johnson"
                role="DevOps Engineer"
                avatarUrl="/placeholder.svg?height=80&width=80"
              />
              <Testimonial
                quote="I love how I can organize my connections by project. Makes managing multiple clients so much easier."
                author="Sarah Miller"
                role="Freelance Developer"
                avatarUrl="/placeholder.svg?height=80&width=80"
              />
              <Testimonial
                quote="The key management features alone are worth it. No more hunting for keys across different machines."
                author="Michael Chen"
                role="System Administrator"
                avatarUrl="/placeholder.svg?height=80&width=80"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to simplify your SSH workflow?</h2>
            <p className="text-xl text-white/80 max-w-[42rem] mx-auto mb-10">
              Join thousands of developers who have already upgraded their SSH experience.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Create Your Free Account
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Terminal className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold">SSHManager</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SSH Connection Manager. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
