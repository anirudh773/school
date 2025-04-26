'use client'
import React, { useState, useEffect } from 'react';
import { 
  Mail, MessageCircle, ChevronRight, Camera, 
  Users, BookOpen, Award, MapPin, Phone, Menu, 
  X, Calendar, Clock, Sparkles, Heart
} from 'lucide-react';

const SchoolWebsite = () => {
  // Mobile navigation state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Gallery images simulation
  const galleryImages = Array(6).fill("/api/placeholder/600/400");
  
  // Testimonials data
  const testimonials = [
    {
      name: "Mrs. Sharma",
      role: "Parent",
      content: "St. Thomas School has been a blessing for my child. The faculty's dedication and the school's holistic approach to education has helped my daughter grow into a confident individual.",
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Mr. Kapoor",
      role: "Parent",
      content: "The infrastructure and teaching methods at St. Thomas are exceptional. My son has improved academically and developed various extracurricular skills since joining.",
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Ananya",
      role: "Alumni",
      content: "The values and education I received at St. Thomas School have shaped my career and personal life. The teachers here go beyond academics to nurture every student.",
      avatar: "/api/placeholder/64/64"
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "National Science Olympiad",
      description: "Our students consistently rank in the top 5% nationally"
    },
    {
      title: "Sports Excellence",
      description: "Cricket and basketball"
    },
    {
      title: "Academic Performance",
      description: "100% pass rates"
    }
  ];

  // Events data
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "May 15, 2025",
      description: "Annual interschool sports competition"
    },
    {
      title: "Science Exhibition",
      date: "June 10, 2025",
      description: "Showcasing student innovation and experiments"
    },
    {
      title: "Parent-Teacher Meeting",
      date: "May 5, 2025",
      description: "End of term academic review"
    }
  ];

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile nav when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileNavOpen]);

  // Navigation items
  const navItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Academics", href: "#academics" },
    { title: "Gallery", href: "#gallery" },
    { title: "Events", href: "#events" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" }
  ];

  // Add this function at the top of the component, after the state declarations
  const handleAdmissionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'tel:9555025484';
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo and School Name */}
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 overflow-hidden border-2 border-red-700 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg md:text-xl">ST</div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  St. Thomas School
                </h1>
                <p className="text-xs md:text-sm text-gray-500">Excellence in Education</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <a 
                  key={item.title}
                  href={item.href} 
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md transition-all hover:bg-red-50 hover:text-red-600 relative group"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <button 
                className="ml-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md text-sm font-medium hover:shadow-lg transition transform hover:-translate-y-0.5"
                onClick={handleAdmissionClick}
              >
                Admissions
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle menu"
            >
              {isMobileNavOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileNavOpen && (
          <div className="md:hidden bg-white border-t py-3 px-4 shadow-lg animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a 
                  key={item.title}
                  href={item.href} 
                  className="px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <button 
                className="mt-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md font-medium"
                onClick={handleAdmissionClick}
              >
                Admissions
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="relative h-[85vh] max-h-[700px] min-h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
          {/* Carousel Items */}
          {[
            { 
              bg: "bg-gradient-to-br from-blue-900 to-indigo-900",
              title: "Welcome to St. Thomas School",
              subtitle: "Nurturing minds, building character, shaping futures",
              image: "/stmskk.jpeg"
            },
            { 
              bg: "bg-gradient-to-br from-red-900 to-purple-900",
              title: "Excellence in Education",
              subtitle: "Comprehensive curriculum designed for holistic development",
              image: "/photo1.jpeg"
            },
            { 
              bg: "bg-gradient-to-br from-green-900 to-teal-900",
              title: "Join Our Community",
              subtitle: "Where every student receives personal attention and care",
              image: "/photo5.jpeg"
            }
          ].map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 ${slide.bg} transition-opacity duration-1000 flex items-center justify-center ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-30 transform scale-110 transition-transform duration-10000"
                  loading="lazy"
                />
              </div>
              <div className="container mx-auto px-4 z-10 text-center text-white space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-6">
                  <button className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:shadow-lg transform transition hover:-translate-y-1 hover:bg-gray-100 flex items-center justify-center">
                    Explore Now <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button 
                    className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transform transition hover:-translate-y-1"
                    onClick={handleAdmissionClick}
                  >
                    Admissions Open
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {[0, 1, 2].map((index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${activeSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
              <div className="w-1 h-3 bg-white rounded-full animate-ping-slow"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">Our Strengths</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose St. Thomas School?</h2>
              <p className="text-base sm:text-lg text-gray-600">
                We provide a nurturing environment where students thrive academically and personally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8" />,
                  title: "Quality Education",
                  description: "Comprehensive curriculum aligned with modern educational standards"
                },
                {
                  icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
                  title: "Expert Faculty",
                  description: "Qualified and experienced teachers dedicated to student success"
                },
                {
                  icon: <Award className="h-6 w-6 md:h-8 md:w-8" />,
                  title: "Extracurricular Focus",
                  description: "Wide range of activities for all-round development"
                },
                {
                  icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />,
                  title: "Modern Facilities",
                  description: "State-of-the-art infrastructure for optimal learning experience"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-lg h-80 md:h-96 w-full"></div>
                  <div className="absolute -top-6 -right-6 h-80 md:h-96 w-full border-4 border-red-600 rounded-lg"></div>
                  <div className="absolute top-0 left-0 h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
                    <div className="bg-[url('/api/placeholder/800/600')] bg-cover bg-center h-full w-full transform hover:scale-105 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey of Excellence</h2>
                <div className="w-20 h-1.5 bg-red-600 rounded-full"></div>
                <p className="text-lg text-gray-700">
                Congratulations to the students and teachers of St. Thomas Mission School! 
                  Our institution is built on the foundation of academic excellence, moral values, and holistic development.
                </p>
                <p className="text-lg text-gray-700">
                  We believe in nurturing not just academic prowess but also character, creativity, and confidence 
                  in every student. Our dedicated faculty members work tirelessly to ensure that each child discovers 
                  their potential and realizes their dreams.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: "17+", label: "Experienced Faculty" },
                    { value: "5+", label: "Years of Excellence" },
                    { value: "50+", label: "Successful Alumni" },
                    { value: "25+", label: "Extracurricular Activities" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-red-600">{stat.value}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium mt-4 hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center">
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section id="academics" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">Academic Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Educational Approach</h2>
              <p className="text-lg text-gray-600">
                We follow a curriculum that balances academic rigor with practical knowledge and skill development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "Primary Education",
                  description: "Building a strong foundation through interactive learning and foundational skills development.",
                  features: ["Interactive Learning", "Basic Skills", "Creative Activities", "Value Education"]
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Middle School",
                  description: "Comprehensive curriculum with focus on critical thinking and subject specialization.",
                  features: ["Critical Thinking", "Subject Expertise", "Technology Integration", "Personal Development"]
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "High School",
                  description: "Advanced curriculum preparing students for higher education and future career paths.",
                  features: ["Advanced Subjects", "Career Counseling", "Competitive Exams", "Leadership Skills"]
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 group h-full flex flex-col"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="mt-auto">
                    <div className="border-t border-gray-200 pt-4 mt-2">
                      <ul className="space-y-2">
                        {program.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="px-6 py-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition">
                Download Curriculum Brochure
              </button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-red-600 to-red-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">Our Pride</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">School Achievements</h2>
              <p className="text-lg opacity-90">
                Our students excel in academics, sports, and cultural activities at various levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-3xl font-bold mb-2">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-white/80">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">Photo Gallery</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Glimpses of School Life</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Explore the vibrant and engaging environment at St. Thomas School.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  image: "/photo1.jpeg",
                  title: "Classroom Learning",
                  description: "Interactive sessions and modern teaching methods"
                },
                {
                  image: "/stmskk.jpeg",
                  title: "Sports Activities",
                  description: "Physical education and team sports"
                },
                {
                  image: "/photo5.jpeg",
                  title: "Cultural Events",
                  description: "Annual functions and cultural celebrations"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-bold text-base md:text-lg">{item.title}</h3>
                    <p className="text-xs md:text-sm text-white/80 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events & News Section */}
        <section id="events" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Announcements</h2>
              <p className="text-lg text-gray-600">
                Keep up with the latest happenings and upcoming events at our school.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-red-600" />
                  Upcoming Events
                </h3>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-4 rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="w-16 h-16 bg-red-50 text-red-600 flex flex-col items-center justify-center rounded-lg flex-shrink-0">
                        <span className="font-bold">{event.date.split(',')[0].split(' ')[0]}</span>
                        <span className="text-sm">{event.date.split(',')[0].split(' ')[1]}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        <div className="mt-2">
                          <button className="text-red-600 text-sm font-medium hover:underline flex items-center">
                            Learn More <ChevronRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-red-600" />
                  Latest News
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 h-full">
                  <div className="space-y-6">
                    {[
                      {
                        title: "School Ranked #1 in District",
                        date: "April 20, 2025",
                        excerpt: "St. Thomas School has been ranked as the top educational institution in the district for the third consecutive year."
                      },
                      {
                        title: "Annual Cultural Fest Announced",
                        date: "April 15, 2025",
                        excerpt: "The much-awaited cultural festival 'Expressions 2025' will be held from June 15-17. Student registrations now open."
                      },
                      {
                        title: "New STEM Lab Inaugurated",
                        date: "April 5, 2025",
                        excerpt: "A state-of-the-art STEM laboratory was inaugurated to enhance practical learning opportunities for students."
                      }
                    ].map((news, index) => (
                      <div key={index} className={index !== 0 ? "pt-4 border-t border-gray-200" : ""}>
                        <span className="text-sm text-gray-500">{news.date}</span>
                        <h4 className="font-bold text-gray-900 mt-1">{news.title}</h4>
                        <p className="text-gray-600 text-sm mt-2">{news.excerpt}</p>
                        <button className="text-red-600 text-sm font-medium mt-2 hover:underline flex items-center">
                          Read More <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">What People Say</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
              <p className="text-lg text-gray-600">
                Hear from our parents, students, and alumni about their experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative"
                >
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <div className="text-red-500 text-5xl opacity-10">"</div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <div className="h-full w-full bg-[url('/api/placeholder/64/64')] bg-cover bg-center"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-base sm:text-lg text-gray-600">
                We'd love to hear from you. Reach out to us for any inquiries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-red-600" />
                    Our Location
                  </h3>
                  <div className="h-64 md:h-72 w-full rounded-lg overflow-hidden mb-4 border border-gray-200">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0!3d26.0!4d83.0!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      title="School Location"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <p className="text-base text-gray-700 mb-4">
                    St. Thomas School<br />
                    Kushaha, Jaunpur<br />
                    Uttar Pradesh, India
                  </p>
                  <a 
                    href="https://maps.google.com/?q=St.+Thomas+School,+Kushaha,+Jaunpur,+Uttar+Pradesh,+India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg text-sm font-medium hover:shadow-lg transition"
                  >
                    <MapPin className="h-4 w-4 mr-2" /> Get Directions
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-red-600" />
                      Call Us
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">For general inquiries:</p>
                    <a href="tel:9555025484" className="text-base font-semibold text-red-600 hover:underline">+91 9555025484</a>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-red-600" />
                      Email Us
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">Send us an email:</p>
                    <a href="mailto:stthomasharakhpur@gmail.com" className="text-base font-semibold text-red-600 hover:underline">stthomasharakhpur@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="facilities">School Facilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white relative mt-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">ST</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">St. Thomas School</h3>
                  <p className="text-sm text-gray-400">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                St. Thomas School is committed to providing quality education that nurtures intellectual, 
                physical, emotional, and spiritual growth of our students.
              </p>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Academics', 'Gallery', 'Events', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">St. Thomas School, Kushaha, Jaunpur, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <a href="tel:9555025484" className="text-gray-400 hover:text-white transition">+91 9555025484</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <a href="mailto:stthomasharakhpur@gmail.com" className="text-gray-400 hover:text-white transition">stthomasharakhpur@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">Mon - Fri: 8:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter to get updates on school events and activities.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
                <button type="submit" className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} St. Thomas School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a 
        href="tel:9555025484" 
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center animate-bounce group"
        aria-label="Call us"
      >
        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
        
        {/* Button content */}
        <div className="relative z-10">
          <Phone className="h-6 w-6 animate-pulse" />
        </div>
      </a>
    </div>
  );
};

export default SchoolWebsite;