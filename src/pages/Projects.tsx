
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

const projectCategories = ["All", "Bridges", "Buildings", "Infrastructure", "Power"];

const projectsData = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art commercial building with sustainable design principles and energy-efficient systems.",
    category: "Buildings",
    location: "Bangalore, India",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    title: "Riverside Bridge",
    description: "An award-winning suspension bridge connecting communities with minimal environmental impact.",
    category: "Bridges",
    location: "Mumbai, India",
    year: "2021",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    title: "Urban Metro Station",
    description: "Modern transit hub designed for efficiency and passenger comfort with advanced structural solutions.",
    category: "Infrastructure",
    location: "Delhi, India",
    year: "2020",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 4,
    title: "Solar Power Plant",
    description: "Renewable energy facility with innovative engineering solutions for maximum efficiency.",
    category: "Power",
    location: "Gujarat, India",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 5,
    title: "Corporate Headquarters",
    description: "Flagship office building featuring cutting-edge design and smart building technology.",
    category: "Buildings",
    location: "Hyderabad, India",
    year: "2022",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 6,
    title: "Highway Overpass",
    description: "Complex traffic interchange with multiple levels and careful integration with existing infrastructure.",
    category: "Bridges",
    location: "Chennai, India",
    year: "2021",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 7,
    title: "Water Treatment Facility",
    description: "Modern facility designed to process urban wastewater with environmental sustainability principles.",
    category: "Infrastructure",
    location: "Pune, India",
    year: "2020",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 8,
    title: "Wind Farm Project",
    description: "Large-scale renewable energy installation with optimized turbine placement for maximum generation.",
    category: "Power",
    location: "Rajasthan, India",
    year: "2023",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    setFilteredProjects(
      activeCategory === "All" 
        ? projectsData 
        : projectsData.filter(project => project.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-primary/10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/90 text-white rounded-full animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-slide-up">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Explore our diverse portfolio of successful engineering projects that demonstrate our expertise and innovation.
            </p>
          </div>
        </section>

        <Section>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover" hover>
                <div className="relative overflow-hidden">
                  <CardImage src={project.image} alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <a href={`/projects/${project.id}`} className="text-white font-medium flex items-center justify-between group">
                        <span>View Project</span>
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-3">
                    {project.location}
                  </div>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
