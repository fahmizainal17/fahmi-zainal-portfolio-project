// app/page.js
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Download, Award, Briefcase, Layers } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { achievements, projects } from '@/lib/data'

export default function Home() {
  // Take only the first 3 achievements and projects for the home page
  const featuredAchievements = achievements.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pb-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Meet Fahmi Zainal
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  A visionary in the world of data science, transforming numbers into strategies and insights into growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="flex gap-1">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/fahmizainal17" target="_blank">
                  <Button variant="outline" className="flex gap-1">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </Link>
                <Link href="/resume.pdf" target="_blank">
                  <Button variant="outline" className="flex gap-1">
                    <Download className="h-4 w-4" /> Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square lg:aspect-video">
                <Image 
                  src="/images/profile-hero.jpg" 
                  alt="Hero Image" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex flex-col items-start space-y-4">
            <h2 className="section-title">
              <span className="section-title-icon">👋</span> About Me
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg">
                  As a Senior Data Scientist, I bring nearly two years of specialized experience in turning raw data into game-changing business outcomes, with a unique blend of skills in Python, SQL, machine learning, and PowerBI.
                </p>
                <p>
                  My passion lies in crafting intelligent solutions that make data not just powerful, but irresistible. I have led high-impact projects that revolutionized data efficiency, driving revenue leaps from thousands to six-figure success stories through predictive analytics, digital marketing, and market research.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  At INVOKE Solutions, I don't just build tools; I redefine possibilities. My work in survey automation slashes manual efforts to a fraction, architecting sophisticated data ecosystems that fuel faster, smarter decisions.
                </p>
                <p>
                  My approach is simple: leverage data as the ultimate catalyst for business growth. I marry deep technical prowess with strategic thinking, driving forward outcomes that matter. Constantly on the frontier of new technologies, I am always learning, always evolving, and always ready to take on the next challenge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Achievements Section */}
      <section className="py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="section-title mb-0">
                <Award className="h-6 w-6 mr-2" /> Featured Achievements
              </h2>
              <Link href="/achievements">
                <Button variant="ghost" className="flex gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {featuredAchievements.map((achievement) => (
                <Card key={achievement.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </div>
                    <CardDescription>{achievement.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                      <Image 
                        src={achievement.image} 
                        alt={achievement.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={achievement.link} target="_blank">
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="section-title mb-0">
                <Briefcase className="h-6 w-6 mr-2" /> Featured Projects
              </h2>
              <Link href="/projects">
                <Button variant="ghost" className="flex gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription>{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {project.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="skill-badge">+{project.skills.length - 3}</span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={project.link} target="_blank">
                      <Button variant="outline" size="sm">View Project</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="section-title">
              <Layers className="h-6 w-6 mr-2" /> Skills Overview
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
              <Card>
                <CardHeader>
                  <CardTitle>Data Science & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {["Python", "SQL", "R", "Machine Learning", "Deep Learning", "Statistical Analysis", "Data Mining", "Data Visualization"].map((skill, index) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Machine Learning & AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Model Deployment", "Hyperparameter Tuning", "Algorithm Development"].map((skill, index) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {["ETL Processes", "API Development", "Database Management", "Big Data", "Cloud Platforms", "Docker", "AWS", "Azure"].map((skill, index) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {["PowerBI", "Tableau", "Data Interpretation", "Strategic Planning", "Survey Design", "Market Research", "Data Storytelling"].map((skill, index) => (
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              Ready to collaborate?
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
              Let's turn insights into incredible results—together.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="flex gap-1">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/fahmizainal17" target="_blank">
                <Button variant="outline">Connect on LinkedIn</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}