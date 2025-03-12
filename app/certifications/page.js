// app/certifications/page.js
"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Award, ExternalLink, Search, Calendar, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { certificationCategories } from '@/lib/data'

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("newest")
  
  // Flatten certifications for easier filtering
  const allCertifications = certificationCategories.flatMap(category =>
    category.certifications.map(cert => ({
      ...cert,
      category: category.name
    }))
  )
  
  // Filter certifications based on category and search query
  const filteredCertifications = allCertifications.filter(cert => {
    const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.organization.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })
  
  // Sort certifications
  const sortedCertifications = [...filteredCertifications].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date) - new Date(a.date)
    } else {
      return new Date(a.date) - new Date(b.date)
    }
  })

  return (
    <div className="container mx-auto py-6">
      <h1 className="section-title">
        <Award className="h-8 w-8 mr-2" /> Certifications
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
        Professional certifications and credentials in data science, machine learning, and related fields.
      </p>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search certifications..."
              className="w-full bg-background h-10 rounded-md border border-input pl-8 pr-4 py-2 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Sort Order */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <select 
              className="bg-background h-10 rounded-md border border-input px-3 py-2 text-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList className="mb-4 w-full justify-start overflow-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            {certificationCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing {sortedCertifications.length} certifications
      </p>
      
      {/* Certifications Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedCertifications.map((cert, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-4">
              <div className="relative h-40 w-full rounded-md overflow-hidden mb-2">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-lg">{cert.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {cert.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm">{cert.organization}</span>
                <span className="text-xs px-2 py-1 bg-muted rounded-full">
                  {cert.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {sortedCertifications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No certifications found matching your criteria.</p>
          <Button 
            variant="ghost" 
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-2"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
