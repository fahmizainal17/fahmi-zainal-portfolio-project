// components/profile-sidebar.jsx
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function ProfileSidebar() {
  const skillCategories = [
    {
      name: "Data Science & Analytics",
      icon: "📊",
      skills: ["Statistical Analysis", "Data Mining", "Data Visualization", "Python", "R", "SQL", "Machine Learning", "Deep Learning"]
    },
    {
      name: "Machine Learning & AI",
      icon: "🤖",
      skills: ["AI System Design", "Model Deployment", "Algorithm Development", "NLP", "Computer Vision", "Hyperparameter Tuning"]
    },
    {
      name: "Data Engineering",
      icon: "🛠️",
      skills: ["ETL Processes", "API Development", "Database Management", "Big Data", "Cloud Platforms", "Docker", "FastAPI"]
    },
    {
      name: "Business Intelligence",
      icon: "📈",
      skills: ["Data Interpretation", "Power BI", "Tableau", "Strategic Planning", "Survey Design", "Data Storytelling"]
    }
  ]

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            fill
            style={{objectFit: "cover"}}
            priority
          />
        </div>
        <h1 className="text-2xl font-bold">Fahmi Zainal</h1>
        <p className="text-lg text-muted-foreground">Data Scientist</p>
        <p className="text-sm text-muted-foreground mt-2 mb-4">
          Transforming Data into Insights | ML & AI Solutions Architect | Scalable ETL and API Deployment
        </p>
      </div>
      
      <div className="flex space-x-2 justify-center">
        <Link href="https://github.com/fahmizainal17" target="_blank">
          <Button variant="outline" size="icon" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/fahmizainal17" target="_blank">
          <Button variant="outline" size="icon" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="mailto:contact@example.com">
          <Button variant="outline" size="icon" aria-label="Email">
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          {skillCategories.map((category, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-sm">
                <span>{category.icon} {category.name}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}