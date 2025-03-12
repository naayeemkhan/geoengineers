
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projectCategories = ["All", "Bridges", "Buildings", "Infrastructure", "Power"];

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art commercial building with sustainable design principles and energy-efficient systems.",
    category: "Buildings",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
    delay: ""
  },
  {
    id: 2,
    title: "Riverside Bridge",
    description: "An award-winning suspension bridge connecting communities with minimal environmental impact.",
    category: "Bridges",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
    delay: "animation-delay-200"
  },
  {
    id: 3,
    title: "Urban Metro Station",
    description: "Modern transit hub designed for efficiency and passenger comfort with advanced structural solutions.",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    delay: "animation-delay-400"
  },
  {
    id: 4,
    title: "Solar Power Plant",
    description: "Renewable energy facility with innovative engineering solutions for maximum efficiency.",
    category: "Power",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
    delay: "animation-delay-600"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Our Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful engineering projects across various domains
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-foreground hover:bg-primary/10"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`animate-scale-in ${project.delay}`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                </div>
                <CardContent>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
                    {project.category}
                  </span>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80">
                      View Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
