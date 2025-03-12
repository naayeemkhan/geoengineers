
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const slideImages = [
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2000&h=1000",
  "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=2000&h=1000",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=2000&h=1000"
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slideImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={img}
              alt={`Engineering project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-3 py-1 mb-6 text-4xl font-medium bg-primary/90 text-white rounded-full animate-slide-up">
           Making Projects Happen
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-slide-up">
           GEOENGINEERS
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-slide-up animation-delay-200">
            From concept to completion, we deliver exceptional engineering services that transform visions into reality.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
            <Link to="/services">
              <Button size="lg" className="bg-primary/90 hover:bg-primary" icon={<ArrowRight />} iconPosition="right">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
