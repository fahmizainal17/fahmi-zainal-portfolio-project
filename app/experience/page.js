// app/experience/page.js
"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BriefcaseBusiness, Calendar, MapPin, Building } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { experiences } from '@/lib/data'

// REMOVE metadata export since this is a client component
// If you need metadata, consider using next-seo or a different approach for client components

export default function ExperiencePage() {
  const [selectedTab, setSelectedTab] = useState("all")
  
  // Determine which experiences to show based on tab
  const filteredExperiences = selectedTab === "all" 
    ? experiences 
    : experiences.filter(exp => 
        exp.positions.some(pos => 
          selectedTab === "technical" 
            ? ["Data Scientist", "Senior Data Scientist", "Data Analyst"].some(title => pos.position.includes(title))
            : !["Data Scientist", "Senior Data Scientist", "Data Analyst"].some(title => pos.position.includes(title))
        )
      );

  return (
    <div className="container mx-auto py-6">
      <h1 className="section-title">
        <BriefcaseBusiness className="h-8 w-8 mr-2" /> Professional Experience
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
        My career journey and professional roles in data science, analytics, and related fields.
      </p>

      {/* Experience Type Tabs */}
      <Tabs defaultValue="all" onValueChange={setSelectedTab} className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Experience</TabsTrigger>
          <TabsTrigger value="technical">Technical Roles</TabsTrigger>
          <TabsTrigger value="non-technical">Non-Technical Roles</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Timeline */}
      <div className="space-y-8">
        {filteredExperiences.map((experience, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 bg-muted/30 p-4 border-b">
              <div className="relative h-16 w-16 rounded-md overflow-hidden shrink-0">
                <Image 
                  src={experience.logo} 
                  alt={experience.company} 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{experience.company}</h2>
              </div>
            </div>

            <div className="p-4 divide-y">
              {experience.positions.map((position, posIndex) => (
                <div key={posIndex} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold">{position.position}</h3>
                    <div className="text-sm text-muted-foreground flex items-center mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {position.duration}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {position.location} • {position.type}
                  </div>

                  <div className="space-y-2 my-4">
                    <h4 className="font-medium">Responsibilities & Achievements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {position.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}