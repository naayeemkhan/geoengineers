
import React from "react";
import { Compass, Building2, Lightbulb, PenTool } from "lucide-react";
import Section from "../ui/Section";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/Card";
import { Link } from "react-router-dom";
import CustomButton from "../ui/Button";

const services = [
  {
    id: 1,
    title: "Topographical Surveys",
    description: "Precise land mapping and terrain analysis using advanced surveying technology to lay the foundation for successful projects.",
    icon: <Compass className="w-10 h-10 text-primary" />,
    delay: ""
  },
  {
    id: 2,
    title: "Bridge & Building Design",
    description: "Innovative structural solutions that balance aesthetics, functionality, and safety for infrastructure that stands the test of time.",
    icon: <Building2 className="w-10 h-10 text-primary" />,
    delay: "animation-delay-200"
  },
  {
    id: 3,
    title: "Structural Engineering",
    description: "Expert analysis and design of load-bearing systems ensuring stability, safety, and efficiency in every structure we create.",
    icon: <PenTool className="w-10 h-10 text-primary" />,
    delay: "animation-delay-400"
  },
  {
    id: 4,
    title: "Power Projects",
    description: "Comprehensive engineering services for energy infrastructure, from generation facilities to distribution networks.",
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    delay: "animation-delay-600"
  }
];

const Services = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Delivering comprehensive engineering solutions tailored to your specific project requirements"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service) => (
          <Card 
            key={service.id} 
            className={`animate-scale-in ${service.delay} hover`}
            hover
          >
            <CardContent className="pt-8">
              <div className="mb-6">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="mb-6">
                {service.description}
              </CardDescription>
              <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CustomButton variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80">
                  Learn more
                </CustomButton>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/services">
          <CustomButton size="lg">
            View All Services
          </CustomButton>
        </Link>
      </div>
    </Section>
  );
};

export default Services;
