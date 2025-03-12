import React from "react";
import Section from "../ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "../ui/button";

const About = () => {
  const advantages = [
    "25+ years of industry experience",
    "Team of certified professional engineers",
    "Commitment to quality and sustainability",
    "Innovative solutions for complex challenges",
    "Comprehensive end-to-end project management"
  ];

  return (
    <Section
      id="about"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative animate-fade-in">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Engineering team at work"
            className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
          />
        </div>

        {/* Content */}
        <div className="animate-slide-up">
          <span className="text-sm font-medium text-primary">About Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 mt-2">
            Engineering Excellence Since 1998
          </h2>
          <p className="text-muted-foreground mb-6">
            At GeoEngineers, we combine technical expertise with innovative thinking to deliver engineering solutions that exceed expectations. Our multidisciplinary team approaches each project with a commitment to quality, safety, and sustainability.
          </p>
          <p className="text-muted-foreground mb-8">
            With a track record of successful projects across India and internationally, we have established ourselves as a trusted partner for clients seeking reliable engineering services.
          </p>

          {/* Advantages List */}
          <div className="space-y-3 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span>{advantage}</span>
              </div>
            ))}
          </div>

          <Link to="/about">
            <CustomButton icon={<ArrowRight />} iconPosition="right">
              Learn More About Us
            </CustomButton>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;
