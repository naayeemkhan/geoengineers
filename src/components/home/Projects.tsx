
import React, { useState } from "react";
import Section from "../ui/Section";
import { Card, CardContent, CardTitle, CardDescription, CardImage } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Explore our portfolio of successful engineering projects across various domains"
      className="bg-secondary"
    >
      {/* Category Filter */}
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {filteredProjects.map((project) => (
          <Card 
            key={project.id} 
            className={`animate-scale-in ${project.delay}`}
            hover={true}
          >
            <CardImage src={project.image} alt={project.title} />
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
      
      <div className="mt-12 text-center">
        <Link to="/projects">
          <Button size="lg">
            View All Projects
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default Projects;
