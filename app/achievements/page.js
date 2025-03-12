// app/achievements/page.js
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink, Trophy } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { achievements } from '@/lib/data'

export const metadata = {
  title: 'Achievements | Portfolio',
  description: 'My professional and academic achievements in data science and machine learning',
}

export default function AchievementsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="section-title">
        <Trophy className="h-8 w-8 mr-2" /> Achievements
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
        Highlighting notable accomplishments and recognition in data science, machine learning, and technology projects.
      </p>

      <div className="space-y-12">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="border-b pb-12 last:border-0">
            <div className="grid md:grid-cols-[2fr_1fr] gap-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{achievement.title}</h2>
                <p className="text-muted-foreground">{achievement.date}</p>
                <div className="space-y-4">
                  {achievement.description.split('. ').map((sentence, idx) => (
                    <p key={idx}>{sentence.trim()}.</p>
                  ))}
                </div>
                {achievement.link && (
                  <div className="pt-4">
                    <Link href={achievement.link} target="_blank">
                      <Button variant="outline" className="flex items-center gap-2">
                        View Project <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              <div className="order-first md:order-last">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image 
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}