import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Compass, Building2, PenTool, Lightbulb, BarChart, FileText, Clock, Zap,Landmark,FlaskConical,Route,Ruler } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const servicesData = [
  {
    id: "topographical-surveys",
    title: "Topographical Surveys",
    description: "Our topographical surveying services provide accurate 3D representations of the land's surface features, essential for planning and design. Using advanced technology like GPS, LiDAR, and drone photogrammetry, we deliver precise mapping for construction projects, infrastructure development, and environmental assessments.",
    icon: <Compass className="w-12 h-12 text-primary" />,
    features: [
      { title: "Land Mapping", icon: <FileText className="w-5 h-5" /> },
      { title: "Terrain Analysis", icon: <BarChart className="w-5 h-5" /> },
      { title: "3D Modeling", icon: <Building2 className="w-5 h-5" /> },
      { title: "GIS Integration", icon: <Zap className="w-5 h-5" /> }
    ]
  },
  {
    id: "bridge-building-design",
    title: "Bridge & Building Design",
    description: "Our design team creates innovative, functional, and aesthetically pleasing bridges and buildings. We combine architectural vision with engineering precision to develop structures that meet regulatory requirements while delivering on performance and sustainability goals. From concept development to detailed construction documentation, we provide comprehensive design services.",
    icon: <Building2 className="w-12 h-12 text-primary" />,
    features: [
      { title: "Architectural Design", icon: <PenTool className="w-5 h-5" /> },
      { title: "Structural Analysis", icon: <BarChart className="w-5 h-5" /> },
      { title: "3D Visualization", icon: <Zap className="w-5 h-5" /> },
      { title: "Construction Documents", icon: <FileText className="w-5 h-5" /> }
    ]
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    description: "Our structural engineering expertise ensures that buildings, bridges, and other structures can safely resist loads and forces. We analyze, design, and certify structural systems using advanced modeling and simulation tools. Our solutions optimize material usage, enhance safety, and improve construction efficiency.",
    icon: <PenTool className="w-12 h-12 text-primary" />,
    features: [
      { title: "Load Analysis", icon: <BarChart className="w-5 h-5" /> },
      { title: "Material Optimization", icon: <Zap className="w-5 h-5" /> },
      { title: "Seismic Design", icon: <Building2 className="w-5 h-5" /> },
      { title: "Structural Inspections", icon: <FileText className="w-5 h-5" /> }
    ]
  },
  {
    id: "power-projects",
    title: "Power Projects",
    description: "Our comprehensive engineering services for power infrastructure cover generation, transmission, and distribution systems. From renewable energy installations to traditional power plants, we provide technical expertise for planning, design, and construction of reliable and efficient energy solutions.",
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    features: [
      { title: "Generation Systems", icon: <Zap className="w-5 h-5" /> },
      { title: "Transmission Networks", icon: <Building2 className="w-5 h-5" /> },
      { title: "Distribution Design", icon: <FileText className="w-5 h-5" /> },
      { title: "Renewable Integration", icon: <BarChart className="w-5 h-5" /> }
    ]
  },
  {
    id: "detailed-project-report",
    title: "Detailed Project Report (DPR)",
    description: "Our DPR services provide in-depth project documentation, covering feasibility analysis, cost estimation, risk assessment, and technical evaluations. We help stakeholders make informed decisions by delivering comprehensive reports aligned with regulatory standards.",
    icon: <FileText className="w-12 h-12 text-primary" />,
    features: [
      { title: "Feasibility Studies", icon: <BarChart className="w-5 h-5" /> },
      { title: "Cost Estimation", icon: <Zap className="w-5 h-5" /> },
      { title: "Risk Analysis", icon: <FileText className="w-5 h-5" /> },
      { title: "Regulatory Compliance", icon: <Building2 className="w-5 h-5" /> }
    ]
  },
  {
    id: "road-surveying",
    title: "Road Surveying",
    description: "We offer precise road surveying services for highway planning, pavement evaluation, and maintenance. Using cutting-edge geospatial technology, we provide accurate data to support safe and efficient road infrastructure development.",
    icon: <Route className="w-12 h-12 text-primary" />,
    features: [
      { title: "Alignment Studies", icon: <PenTool className="w-5 h-5" /> },
      { title: "Pavement Evaluation", icon: <BarChart className="w-5 h-5" /> },
      { title: "Traffic Analysis", icon: <Zap className="w-5 h-5" /> },
      { title: "GIS Mapping", icon: <FileText className="w-5 h-5" /> }
    ]
  },
  {
    id: "cad-designs",
    title: "CAD Designs",
    description: "We specialize in high-quality computer-aided design (CAD) services, producing detailed 2D and 3D models for architectural, structural, and engineering projects. Our designs ensure accuracy, efficiency, and adherence to industry standards.",
    icon: <Ruler className="w-12 h-12 text-primary" />,
    features: [
      { title: "2D Drafting", icon: <FileText className="w-5 h-5" /> },
      { title: "3D Modeling", icon: <Building2 className="w-5 h-5" /> },
      { title: "BIM Integration", icon: <Zap className="w-5 h-5" /> },
      { title: "Rendering & Visualization", icon: <BarChart className="w-5 h-5" /> }
    ]
  },
  {
    id: "soil-testing",
    title: "Soil Testing",
    description: "Our soil testing services analyze soil composition, strength, and suitability for construction and agricultural applications. We ensure foundation stability by assessing load-bearing capacity, moisture content, and other key parameters.",
    icon: <FlaskConical className="w-12 h-12 text-primary" />,
    features: [
      { title: "Soil Composition Analysis", icon: <BarChart className="w-5 h-5" /> },
      { title: "Moisture & Density Testing", icon: <Zap className="w-5 h-5" /> },
      { title: "Load-Bearing Assessment", icon: <FileText className="w-5 h-5" /> },
      { title: "Environmental Testing", icon: <Building2 className="w-5 h-5" /> }
    ]
  },
  {
    id: "architectural-design",
    title: "Architectural Design",
    description: "Our architectural design services blend creativity with functionality to craft innovative and sustainable spaces. From concept to execution, we focus on aesthetics, structural integrity, and environmental efficiency.",
    icon: <Landmark className="w-12 h-12 text-primary" />,
    features: [
      { title: "Conceptual Design", icon: <PenTool className="w-5 h-5" /> },
      { title: "Sustainable Architecture", icon: <Zap className="w-5 h-5" /> },
      { title: "3D Visualization", icon: <Building2 className="w-5 h-5" /> },
      { title: "Construction Drawings", icon: <FileText className="w-5 h-5" /> }
    ]
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-primary/10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/90 text-white rounded-full animate-fade-in">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-slide-up">
              Comprehensive Engineering Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
              We offer a range of specialized engineering services to meet the diverse needs of our clients, from planning and design to implementation and beyond.
            </p>
          </div>
        </section>

        {/* Services List */}
        <Section>
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="animate-slide-up">
                  <div className="bg-primary/5 p-8 rounded-xl relative mb-8">
                    <div className="absolute -top-6 left-8 bg-white p-3 rounded-lg shadow-md">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-display font-bold mt-8 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <Card key={idx} className="border-primary/10">
                        <CardContent className="p-4 flex items-center">
                          <div className="mr-3 text-primary">{feature.icon}</div>
                          <span className="font-medium">{feature.title}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="relative animate-fade-in">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
                  <img
                    src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=${600 + index * 50}`}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <section className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Contact us today to discuss your engineering needs and how our services can bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium transition-colors bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
