'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Page() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 p-12">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8">
          <h1 className="text-5xl font-bold mb-4">Andrew Mos</h1>
          <p className="text-2xl mb-8">
            I&apos;m building <a href="https://cocase.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cocase</a> to speed up Law.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-lg">
              In the past, I&apos;ve enjoyed working on machine learning projects, full-stack development, and mobile app creation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Full Stack Software Engineer</h3>
                <p className="text-zinc-600 text-lg">Coplanin, Colombia (Remote) | April 2023 - Present</p>
                <p className="text-lg">Develop web & mobile applications for government projects and provide technical mentorship.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Machine Learning Ops Engineer</h3>
                <p className="text-zinc-600 text-lg">Freelance, United States (Remote) | August 2024 - October 2024</p>
                <p className="text-lg">Automated AI model deployments, reducing deployment time by 97%.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <ul className="space-y-4">
              <li>
                <a href="https://cocase.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                  Cocase
                </a>
              </li>
              <li>
                <a href="https://ana-gourmet.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                  Ana Gourmet
                </a>
              </li>
              <li>
                <a href="https://bing-ai-art-experiment.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                  Bing AI Art Experiment
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Connect with me</h2>
            <div className="flex space-x-6">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/andresmosqueraw" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/andresmosqueraw/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:andresmosquera739@gmail.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
