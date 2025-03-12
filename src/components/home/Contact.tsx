
import React, { useState } from "react";
import Section from "../ui/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a webhook URL-friendly payload
      const emailTo = "geoengineers@ymail.com";
      const subject = encodeURIComponent(`Contact Form: ${formData.subject || "New Message"}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
      
      // Use mailto link for simple client-side email sending
      // This will open the user's email client with pre-filled fields
      window.open(`mailto:${emailTo}?subject=${subject}&body=${body}`);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      toast.success("Thank you for your message! Your email client has been opened to send your message.");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    3rd Floor ENCO plaza KaranNagar Srinagar,J&K
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 7889395886</p>
                 
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">geoengineers@ymail.com</p>
                  
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
                  <p className="text-muted-foreground">9:00 AM - 4:00 PM</p>
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full md:w-auto" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
