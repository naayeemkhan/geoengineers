import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users, Shield, Award } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      bio: "With over 25 years of experience in civil engineering, Rajesh leads our company with vision and expertise.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Priya Sharma",
      position: "Chief Technical Officer",
      bio: "Priya brings 18 years of structural engineering expertise and innovation to our technical operations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Anand Patel",
      position: "Lead Structural Engineer",
      bio: "Anand specializes in complex structural analysis and has led numerous award-winning projects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Meera Desai",
      position: "Head of Surveying",
      bio: "Meera is an expert in advanced surveying techniques with experience across diverse terrain types.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  // Values data
  const values = [
    {
      title: "Quality",
      description: "We maintain the highest standards in our work, ensuring precision, durability, and excellence in every project.",
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: "Safety",
      description: "Safety is paramount in our designs and operations, protecting the well-being of all stakeholders involved.",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Innovation",
      description: "We embrace innovative solutions and technologies to address complex engineering challenges.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients to achieve shared goals.",
      icon: <Users className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-primary/10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/90 text-white rounded-full animate-fade-in">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-slide-up">
              About GeoEngineers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
              A leading engineering consultancy dedicated to excellence in design, innovation, and sustainable solutions.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Company headquarters"
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>

            <div className="animate-slide-up">
              <h2 className="text-3xl font-display font-bold mb-6">Our Company</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 1998, GeoEngineers has grown from a small local consultancy to a respected engineering firm with a national presence. Over the past 25 years, we have successfully delivered hundreds of projects across India, establishing ourselves as industry leaders in structural engineering, surveying, and infrastructure development.
              </p>
              <p className="text-muted-foreground mb-8">
                Our multidisciplinary team combines technical expertise with innovative thinking to solve complex engineering challenges. We approach each project with a commitment to excellence, sustainability, and client satisfaction, resulting in long-lasting relationships with our partners and clients.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">25+ Years of Experience</h4>
                    <p className="text-muted-foreground">Delivering engineering excellence since 1998</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">500+ Successful Projects</h4>
                    <p className="text-muted-foreground">From concept to completion across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Team of 50+ Professionals</h4>
                    <p className="text-muted-foreground">Certified engineers and technical experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section className="bg-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center text-2xl mb-4">Our Mission</CardTitle>
                <p className="text-center text-muted-foreground">
                  To deliver innovative and sustainable engineering solutions that exceed client expectations while contributing positively to communities and the environment. We strive to lead the industry in technical excellence, integrity, and collaborative approach to problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in animation-delay-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <TrendingUp className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center text-2xl mb-4">Our Vision</CardTitle>
                <p className="text-center text-muted-foreground">
                  To be recognized as India's premier engineering consultancy, known for technical innovation, exceptional service, and positive impact on infrastructure development. We aspire to shape the future of built environments through engineering excellence and sustainable practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Values */}
        <Section title="Our Values" subtitle="The principles that guide our work and relationships">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {values.map((value, index) => (
              <Card key={index} className={`animate-scale-in animation-delay-${index * 200}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="mb-3">{value.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section title="Our Leadership Team" subtitle="Meet the experts behind our engineering excellence" className="bg-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`animate-scale-in animation-delay-${index * 200}`} hover>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <CardTitle className="mb-1">{member.name}</CardTitle>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground">
                    {member.bio}
                  </p>
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

export default About;
