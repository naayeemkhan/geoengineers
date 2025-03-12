
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-display font-bold mb-4">
              <span className="text-primary">Geo</span>
              <span>Engineers</span>
            </h3>
            <p className="text-muted-foreground mb-6">
             Making Projects Happen
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up animation-delay-200">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/60 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up animation-delay-400">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">
                  Topographical Surveys
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">
                  Bridge & Building Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">
                  Structural Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">
                  Power Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up animation-delay-600">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground/60">
                  3rd Floor Enco Plaza KaranNagar, Srinagar,J&K.
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground/60">+91-7889395886</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground/60">geoengineers@ymail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} GeoEngineers.in. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
