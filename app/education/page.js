// app/education/page.js
import Image from 'next/image'
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { education } from '@/lib/data'

export const metadata = {
  title: 'Education | Portfolio',
  description: 'My academic background and educational qualifications',
}

export default function EducationPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="section-title">
        <GraduationCap className="h-8 w-8 mr-2" /> Education
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
        My academic journey and educational background that formed the foundation of my professional career.
      </p>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid md:grid-cols-[1fr_3fr] gap-6">
              <div className="p-6 border-r bg-muted/30 flex flex-col items-center justify-center">
                <div className="relative h-32 w-32 rounded-md overflow-hidden">
                  <Image 
                    src={edu.logo} 
                    alt={edu.institution} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4 text-center">{edu.institution}</h3>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {edu.duration}
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {edu.location}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{edu.degree}</h2>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium flex items-center">
                      <Trophy className="h-4 w-4 mr-2" />
                      Achievements & Activities
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}