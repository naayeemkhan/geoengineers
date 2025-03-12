import React from "react";
import Section from "../ui/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import CustomButton from "../ui/button";
import { Card } from "../ui/card";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind? Reach out to discuss how we can help bring your vision to reality"
      className="bg-secondary"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card className="p-6 h-full animate-slide-up">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Engineering Way, Tech Park, Bangalore, India 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9876543210</p>
                  <p className="text-muted-foreground">+91 8765432109</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">info@geoengineers.in</p>
                  <p className="text-muted-foreground">projects@geoengineers.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-medium mb-4">Working Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">Monday - Friday:</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday:</p>
                  <p className="text-muted-foreground">9:00 AM - 1:00 PM</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Sunday:</p>
                  <p className="text-muted-foreground">Closed</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 animate-slide-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <CustomButton 
                  type="submit" 
                  className="w-full md:w-auto" 
                  size="lg"
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Send Message
                </CustomButton>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
