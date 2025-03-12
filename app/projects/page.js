// app/projects/page.js
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Briefcase, ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/lib/data'

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my data science, machine learning, and analytics projects',
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="section-title">
        <Briefcase className="h-8 w-8 mr-2" /> Projects
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
        A collection of my data science, machine learning, and analytics projects showcasing skills in Python, SQL, data visualization, and predictive modeling.
      </p>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="relative aspect-video overflow-hidden rounded-md mb-2">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={project.link} target="_blank">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> View on GitHub
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 border-t pt-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}