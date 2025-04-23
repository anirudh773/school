"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, ChevronRight, Camera, Users, BookOpen, Award, MapPin, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedPhoneButton from "@/components/animated-phone-button";
import ManagementTeam from "@/components/management-team";
import SchoolImage from './stmskk.jpeg';

export default function Home() {
  // Google Maps URL for St. Thomas School, Jaunpur
  const googleMapsUrl = "https://g.co/kgs/CZXv9wZ";
  
  // Mobile navigation state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  // Close mobile nav when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileNavOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Improved with better spacing, shadow and mobile menu */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="https://yt3.googleusercontent.com/uXUVfwZ70xgEVINlhH1YlrwYD1F0aNT7ve52QkJclGedfykG9HF5UJtUq6gtuXw-UWKW7pxYk9c=s160-c-k-c0x00ffffff-no-rj"
              alt="School Logo"
              width={40}
              height={40}
              className="rounded-full shadow-sm md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-bold text-primary truncate">St. Thomas School</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#management" className="text-sm font-medium transition-colors hover:text-primary">
              Management
            </Link>
            <Link href="#location" className="text-sm font-medium transition-colors hover:text-primary">
              Location
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-label="Toggle menu"
          >
            {isMobileNavOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileNavOpen && (
          <div className="md:hidden bg-background border-t py-4 px-6 shadow-lg animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-base font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileNavOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#gallery" 
                className="text-base font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="#management" 
                className="text-base font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Management
              </Link>
              <Link 
                href="#location" 
                className="text-base font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Location
              </Link>
              <Link 
                href="#contact" 
                className="text-base font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section - Enhanced with better responsiveness, gradient overlay and spacing */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background z-10" />
          <Image
            src={SchoolImage}
            alt="School Building"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
            priority
          />
          <div className="container relative z-20 -mt-24 sm:-mt-32 md:-mt-40 pb-12 md:pb-16">
            <div className="max-w-lg md:max-w-2xl space-y-4 md:space-y-6 bg-background/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-lg shadow-lg mx-4 sm:mx-auto md:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-red-600">
                Welcome to St. Thomas School
              </h1>
              <p className="text-base md:text-lg">
                Nurturing minds, building character, and shaping futures in Jaunpur.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                <Button asChild size="lg" className="font-medium w-full sm:w-auto">
                  <Link href="#contact">
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="font-medium w-full sm:w-auto">
                  <Link href="#gallery">
                    View Gallery <Camera className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Improved card design, spacing and responsiveness */}
        <section className="container py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8">
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Quality Education</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Comprehensive curriculum designed for holistic development
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8">
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 rounded-full bg-primary/10">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Experienced Faculty</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Dedicated teachers committed to student success
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8">
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Extracurricular</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Diverse activities for all-round development
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8">
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 rounded-full bg-primary/10">
                    <Camera className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Modern Facilities</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    State-of-the-art infrastructure for optimal learning
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section - Improved content layout, spacing and responsiveness */}
        <section id="about" className="bg-muted/40 py-12 md:py-16 lg:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={SchoolImage}
                    alt="School Campus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">About Our School</h2>
                <div className="prose prose-sm sm:prose max-w-none text-base md:text-lg">
                  <p>
                    St. Thomas School, Jaunpur is more than just an institution—it's a vibrant learning community where
                    curiosity is ignited, talents are nurtured, and values are instilled. Located in the heart of
                    Kushaha, Jaunpur, we are committed to delivering quality education grounded in ethics, discipline,
                    and compassion.
                  </p>
                  <p>
                    Since our inception, we have focused on creating a balanced environment where academics,
                    co-curriculars, and character development go hand in hand. With experienced faculty,
                    state-of-the-art infrastructure, and a child-first approach, we take pride in shaping tomorrow's
                    leaders—one student at a time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                  <Button variant="default" asChild className="font-medium">
                    <Link href="#management">
                      Meet Our Team <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="font-medium">
                    <Link href="#location">
                      Our Location <MapPin className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section - Better card styling and responsive layout */}
        <section id="location" className="container py-12 md:py-16 lg:py-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">Our Location</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at St. Thomas School, Kushaha, Jaunpur
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <div className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-2 md:mr-3 flex-shrink-0" />
                  Address
                </h3>
                <p className="text-base md:text-lg">
                  St. Thomas School
                  <br />
                  Kushaha, Jaunpur
                  <br />
                  Uttar Pradesh, India
                </p>
                <div className="mt-4 md:mt-6">
                  <Button asChild size="lg" className="font-medium w-full sm:w-auto">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="truncate">Get Directions</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-primary">Transportation</h3>
                <p className="text-base md:text-lg">
                  We are conveniently located and accessible by public transportation. The school also provides bus
                  services covering major areas of Jaunpur.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl border h-[300px] sm:h-[400px] md:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0!3d26.0!4d83.0!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="St. Thomas School Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Improved spacing and styling */}
        <section id="gallery" className="bg-muted/40 py-12 md:py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">Photo Gallery</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Glimpses of life at St. Thomas School
              </p>
            </div>
            {/* Gallery placeholder with responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video relative rounded-lg overflow-hidden shadow-md group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={SchoolImage}
                    alt={`Gallery image ${item}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-medium">School Event {item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Section - Improved styling */}
        <section id="management" className="container py-12 md:py-16 lg:py-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">Our Management Team</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders behind our institution
            </p>
          </div>
          <ManagementTeam />
        </section>

        {/* Contact Section - Improved card styling and form appearance */}
        <section id="contact" className="bg-muted/40 py-12 md:py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">Contact Us</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">We'd love to hear from you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-primary">School Address</h3>
                  <p className="text-base md:text-lg">
                    St. Thomas School, Kushaha
                    <br />
                    Jaunpur, Uttar Pradesh
                    <br />
                    India
                  </p>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center">
                      <Button variant="outline" className="gap-2 md:gap-3 w-full justify-start text-sm md:text-base" asChild>
                        <a href="tel:+1234567890">
                          <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                          +1234567890
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <Button variant="outline" className="gap-2 md:gap-3 w-full justify-start text-sm md:text-base" asChild>
                        <Link href="https://wa.me/1234567890" target="_blank">
                          <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                          WhatsApp Us
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <Button variant="outline" className="gap-2 md:gap-3 w-full justify-start text-sm md:text-base" asChild>
                        <Link href="mailto:info@stthomas.edu">
                          <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-500 flex-shrink-0" />
                          <span className="truncate">info@stthomas.edu</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-primary">Office Hours</h3>
                  <p className="text-base md:text-lg">
                    Monday - Friday: 8:00 AM - 4:00 PM
                    <br />
                    Saturday: 9:00 AM - 12:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-primary">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Inquiry about admission"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <Button className="w-full sm:w-auto" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Enhanced with better styling and alignment */}
      <footer className="border-t bg-primary/5">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Image
                  src={SchoolImage}
                  alt="St. Thomas School Logo"
                  width={40}
                  height={40}
                  className="rounded-full shadow-sm md:w-12 md:h-12"
                />
                <span className="text-lg md:text-xl font-bold text-primary">St. Thomas School</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                Nurturing minds, building character, and shaping futures in Jaunpur since our establishment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3 text-sm md:text-base">
                <Link href="#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
                <Link href="#management" className="hover:text-primary transition-colors">
                  Management
                </Link>
                <Link href="#location" className="hover:text-primary transition-colors">
                  Location
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Connect With Us</h3>
              <div className="flex gap-3 md:gap-4">
                <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                  <Link href="#" aria-label="Facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                  <Link href="#" aria-label="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                  <Link href="#" aria-label="Twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                  <Link href="#" aria-label="YouTube">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} St. Thomas School, Jaunpur. All rights reserved.
            </p>
            <p className="font-medium">
              Powered by <span className="font-bold text-primary">Neev Learn</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <AnimatedPhoneButton phoneNumber="+1234567890" floating={true} showText={true} />
    </div>
  )
}