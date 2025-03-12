
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reach out to our team for inquiries, consultations, or to discuss your project requirements.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
