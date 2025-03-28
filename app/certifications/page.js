'use client';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  featuredAchievements, 
  featuredProjects, 
  certificationCategories, 
  experiences, 
  education 
} from '@/lib/data'
import { motion } from 'framer-motion'

/* Header Component with Breadcrumbs */
function Header() {
  return (
    <header className="bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Fahmi Zainal</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/achievements">Achievements</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2 text-sm">
          <nav aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li>Portfolio</li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  )
}

/* HoverCard Component for overlay effect */
function HoverCard({ children }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-center p-4">Read more...</p>
      </div>
    </div>
  )
}

/* Review Section with auto-scrolling testimonials */
function ReviewSection() {
  // Define your testimonials (full review text)
  const testimonials = [
    {
      id: 1,
      quote: "I am writing to highly recommend Fahmi Zainal, a colleague and mentor who has been instrumental in my growth as a data analyst. Fahmi's guidance has been invaluable in building a solid foundation for my career. He has demonstrated exceptional technical skills, particularly in Python, SQL, Tableau, and machine learning. His work on projects like the IVR Data Cleaner and Unified Survey web applications has greatly enhanced our team’s collaboration and functionality. Fahmi’s problem-solving skills, mentorship, and professionalism are truly commendable.",
      reviewer: "Iqmal Zamri, Healthcare Data Analytics | 4+ Years Experience"
    },
    {
      id: 2,
      quote: "Knowing Fahmi as a reserved army who transitioned to data science is really interesting. He possesses the mindset of a soldier—always willing to learn and committed to completing every task. His disciplined attitude and clear vision make him a standout data scientist.",
      reviewer: "Ammar Azman, Data Scientist | Data Engineer | AI, ML"
    },
    {
      id: 3,
      quote: "Fahmi is a friend I have known since our pre-university studies. Over the years, his professionalism and strong teamwork skills have consistently impressed me. During a Kaggle competition, his dedication and eagerness to learn helped us achieve a top 28% ranking among global teams. He is truly a valuable teammate.",
      reviewer: "Hazman Naim Bin Ahsan, Data Scientist at Apecia"
    },
    {
      id: 4,
      quote: "I had the pleasure of knowing Fahmi during the Khazanah Youth Development Programme's Data Analytics Bootcamp. Not only is he a skilled data analyst, but his leadership and mentorship have also significantly impacted fellow students. His active class participation and real-world application of skills set him apart.",
      reviewer: "Pearly Toh Swee Ling, Career Success Manager"
    }
  ];

  // State to pause/resume auto-scroll on hover
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-8 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Testimonials</h2>
        <motion.div
          className="flex space-x-8"
          animate={{ x: isPaused ? 0 : '-50%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[300px] bg-gray-50 p-6 rounded shadow-lg">
              <p className="italic text-sm">{testimonial.quote}</p>
              <p className="mt-4 font-bold text-right text-xs">- {testimonial.reviewer}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Footer Component with Animated Ticker */
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Fahmi Zainal. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/achievements">Achievements</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4">Professional | Innovative | Data-Driven | World-Class</span>
            <span className="mx-4">Professional | Innovative | Data-Driven | World-Class</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const achievements = featuredAchievements;
  const projects = featuredProjects;

  return (
    <div>
      <Header />
      <main className="space-y-16 pb-20">
        {/* Hero Section */}
        <section className="pb-8 pt-8 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-20xl font-bold sm:text-5xl xl:text-8xl">Fahmi Zainal</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A visionary in data science, transforming numbers into strategies and insights into growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/projects">
                    <Button className="flex gap-1">
                      View Projects
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </Button>
                  </Link>
                  <Link href="https://github.com/fahmizainal17" target="_blank">
                    <Button variant="outline" className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                      GitHub
                    </Button>
                  </Link>
                  <Link href="/resume.pdf" target="_blank">
                    <Button variant="outline" className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" x2="12" y1="15" y2="3"/>
                      </svg>
                      Resume
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square lg:aspect-video">
                  <Image src="/images/profile-hero.jpg" alt="Hero Image" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="pt-1 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex flex-col items-start space-y-4">
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center">
                <span className="mr-2">👋</span> About Me
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
                <h2 className="text-3xl font-bold tracking-tight mb-0 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mr-2">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  Featured Achievements
                </h2>
                <Link href="/achievements">
                  <Button variant="ghost" className="flex gap-1">
                    View All 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      </div>
                      <CardDescription>{achievement.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <HoverCard>
                        <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                          <Image 
                            src={achievement.image} 
                            alt={achievement.title} 
                            fill 
                            className="object-cover cursor-pointer"
                          />
                        </div>
                      </HoverCard>
                      <p className="line-clamp-3 text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      {/* Details appear on hover; no button */}
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
                <h2 className="text-3xl font-bold tracking-tight mb-0 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase mr-2">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  Featured Projects
                </h2>
                <Link href="/projects">
                  <Button variant="ghost" className="flex gap-1">
                    View All 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                {projects.map((project) => (
                  <Card key={project.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                      <CardDescription>{project.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <HoverCard>
                        <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover cursor-pointer"
                          />
                        </div>
                      </HoverCard>
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
                      {/* Details appear on hover; no button */}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-8 bg-muted/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Certifications</h2>
            {certificationCategories.map((category) => (
              <div key={category.name} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.certifications.map((cert) => (
                    <Card key={cert.title} className="flex flex-col">
                      <CardHeader>
                        <CardTitle>{cert.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{cert.date}</p>
                        <p className="text-sm">{cert.organization}</p>
                        <div className="relative h-40 w-full mt-2">
                          <Image 
                            src={cert.image} 
                            alt={cert.title} 
                            fill 
                            className="object-cover rounded cursor-pointer"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.company} className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Image src={exp.logo} alt={exp.company} width={50} height={50} className="object-contain" />
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                </div>
                {exp.positions.map((pos, index) => (
                  <div key={index} className="mb-4 border-l-2 pl-4">
                    <h4 className="text-xl font-bold">{pos.position}</h4>
                    <p className="text-sm text-muted-foreground">{pos.duration} | {pos.location} | {pos.type}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {pos.description.map((desc, i) => (
                        <li key={i} className="text-sm">{desc}</li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pos.skills.map((skill, i) => (
                        <span key={i} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-8 bg-muted/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Education</h2>
            {education.map((edu, i) => (
              <div key={`${edu.institution}-${i}`} className="mb-8 flex items-start gap-4">
                <Image src={edu.logo} alt={edu.institution} width={60} height={60} className="object-contain" />
                <div>
                  <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                  <p className="text-lg font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.duration} | {edu.location}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="text-sm">{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
                    Get in Touch 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/fahmizainal17" target="_blank">
                  <Button variant="outline">Connect on LinkedIn</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ReviewSection />
      <Footer />
    </div>
  )
}
