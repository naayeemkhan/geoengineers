import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Users, Coffee, Heart } from "lucide-react";
import CustomButton from "@/components/ui/button";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Structural Engineer",
      location: "Bangalore",
      type: "Full-time",
      description: "We're seeking an experienced structural engineer to lead complex projects and mentor junior team members.",
      requirements: [
        "B.Tech/M.Tech in Civil/Structural Engineering",
        "Minimum 8 years of experience in structural design",
        "Proficiency in advanced structural analysis software",
        "Experience in designing multi-story buildings and bridges"
      ]
    },
    {
      id: 2,
      title: "Geotechnical Engineer",
      location: "Mumbai",
      type: "Full-time",
      description: "Join our team to analyze soil conditions and provide foundation recommendations for various projects.",
      requirements: [
        "B.Tech/M.Tech in Civil Engineering with specialization in Geotechnical Engineering",
        "3-5 years of experience in soil investigation and foundation design",
        "Knowledge of geotechnical software and field testing methods",
        "Experience in preparing geotechnical reports"
      ]
    },
    {
      id: 3,
      title: "CAD Technician",
      location: "Delhi",
      type: "Full-time",
      description: "Support our engineering team by creating detailed technical drawings for construction projects.",
      requirements: [
        "Diploma/B.Tech in Civil Engineering",
        "2+ years of experience with AutoCAD and related software",
        "Ability to interpret engineering concepts and translate them into drawings",
        "Knowledge of construction drawing standards"
      ]
    },
    {
      id: 4,
      title: "Project Manager",
      location: "Hyderabad",
      type: "Full-time",
      description: "Oversee engineering projects from conception to completion, ensuring quality, timeline, and budget adherence.",
      requirements: [
        "B.Tech in Civil Engineering with PMP certification (preferred)",
        "Minimum 7 years of experience with 3+ years in project management",
        "Strong leadership, communication, and client management skills",
        "Experience in managing multiple engineering projects simultaneously"
      ]
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage for employees and their families",
      icon: <Heart className="w-8 h-8 text-primary" />
    },
    {
      title: "Professional Development",
      description: "Ongoing training, certification support, and career advancement opportunities",
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous paid time off",
      icon: <Coffee className="w-8 h-8 text-primary" />
    },
    {
      title: "Collaborative Environment",
      description: "Team-oriented culture with regular social events and activities",
      icon: <Users className="w-8 h-8 text-primary" />
    }
  ];

  // Active job view state
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-primary/10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/90 text-white rounded-full animate-fade-in">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-slide-up">
              Career Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Build your career with GeoEngineers and be part of a team that's shaping the future through innovative engineering.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-display font-bold mb-6">Why Join GeoEngineers?</h2>
              <p className="text-muted-foreground mb-6">
                At GeoEngineers, we believe our people are our greatest asset. We're committed to creating an environment where talented professionals can thrive, grow, and make meaningful contributions to impactful projects.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you're a seasoned expert or just starting your career, we offer opportunities to work on diverse, challenging projects that push the boundaries of engineering excellence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Challenging Projects</h4>
                    <p className="text-muted-foreground">Work on diverse engineering challenges across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Growth Opportunities</h4>
                    <p className="text-muted-foreground">Clear career paths and professional development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Collaborative Culture</h4>
                    <p className="text-muted-foreground">Supportive team environment focused on innovation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Team working together"
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </Section>

        {/* Benefits */}
        <Section title="Employee Benefits" subtitle="We value our team members and offer competitive benefits" className="bg-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`animate-scale-in animation-delay-${index * 200}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="mb-3">{benefit.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Current Openings */}
        <Section title="Current Openings" subtitle="Explore our available positions and find your next career move">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-1 space-y-4">
              {jobOpenings.map((job) => (
                <Card 
                  key={job.id} 
                  className={`hover cursor-pointer transition-all ${selectedJob && selectedJob.id === job.id ? 'border-primary' : ''}`}
                  onClick={() => setSelectedJob(job)}
                >
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {job.description}
                    </CardDescription>
                    <div className="mt-4 flex justify-end">
                      <ArrowRight className={`w-5 h-5 text-primary transition-transform ${selectedJob && selectedJob.id === job.id ? 'translate-x-1' : ''}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                <Card className="animate-fade-in">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-5 h-5 mr-2" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-5 h-5 mr-2" />
                        {selectedJob.type}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="w-5 h-5 mr-2" />
                        Engineering
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Job Description</h4>
                      <p className="text-muted-foreground">
                        {selectedJob.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">How to Apply</h4>
                      <p className="text-muted-foreground mb-4">
                        Please send your resume and a cover letter explaining your interest in this position and your qualifications to <span className="text-primary">careers@geoengineers.in</span> with the subject line "{selectedJob.title} - Application".
                      </p>
                    </div>

                    <CustomButton size="lg">
                      Apply Now
                    </CustomButton>
                  </CardContent>
                </Card>
              ) : (
                <div className="h-full flex items-center justify-center p-8 bg-secondary/50 rounded-lg border border-dashed border-muted text-center">
                  <div>
                    <Briefcase className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Select a Job</h3>
                    <p className="text-muted-foreground">
                      Click on a job from the list to view its details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
