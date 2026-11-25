"use client";
import { makeHumanReadable } from "@/lib/currency";
import { APP_SIGN_IN_URL, APP_SIGN_UP_URL } from "@/lib/siteUrls";
import { useState, useEffect } from "react";

export const features = [
  {
    icon: "🔐",
    title: "Administration",
    description:
      "Create unlimited roles and user accounts, assing unique roles to staff and administrators. Monitor usage and activity logs. Enhance security and operational efficiency.",
    price: "$16.00/month",
    introPrice: "$9.00",
    availability: "Available",
    mandatory: false,
  },
  {
    icon: "📚",
    title: "Curriculum",
    description:
      "Organize academic years, terms, programmes, pathways, subjects, and classes in one hierarchical system. No more spreadsheet chaos.",
    price: "$12.00/month",
    introPrice: "$6.00",
    availability: "Available",
    mandatory: false,
  },
  {
    icon: "👥",
    title: "Staff Profiles & Contracts",
    description:
      "Onboard new & existing staff members with complete profiles and contracts. Assign responsilities, plan working schedules.",
    price: "$10.00/month",
    introPrice: "$5.00",
    availability: "Available",
    mandatory: false,
  },
  {
    icon: "👥",
    title: "Student Profiles & Enrollments",
    description:
      "Manage student profiles, and enrolments. Track student progress and performance across programmes and classes.",
    price: "$10.00/month",
    introPrice: "$5.00",
    availability: "Available",
    mandatory: false,
  },
  {
    icon: "📅",
    title: "Student Attendance",
    description:
      "Daily and subject-level attendance monitoring with real-time alerts for absences and patterns.",
    price: "$9.00/month",
    introPrice: "$5.00",
    availability: "Available",
    mandatory: false,
  },
  {
    icon: "📝",
    title: "Student Assessment",
    description:
      "Complete assessment management, gradebooks, report cards, and academic analytics.",
    price: "$15.00/month",
    introPrice: "$7.00",
    availability: "Launching Soon",
    mandatory: false,
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description:
      "Deep dive into performance trends, predictive analytics, and custom reporting dashboards.",
    price: "Free",
    availability: "Available",
    mandatory: false,
  },
];

export default function SuSchoolWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreFeatures = [
    {
      icon: "📚",
      title: "Comprehensive Curriculum Management",
      description:
        "Organize academic years, terms, programmes, pathways, subjects, and classes in one hierarchical system. No more spreadsheet chaos.",
      benefit: "Complete academic structure at your fingertips",
    },
    {
      icon: "👥",
      title: "Staff & Student Management",
      description:
        "Centralized profiles, contracts, enrolments, and records. Track everything from hiring to graduation in one unified platform.",
      benefit: "All your people data, beautifully organized",
    },
    {
      icon: "📅",
      title: "Attendance Management",
      description:
        "Efficiently manage attendance records, including day and subject attendances. Stay on top of student engagement and attendance patterns.",
      benefit: "Efficient attendance management",
    },

    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Organised Insights into attendance, performance, staff allocation, and institutional health. Make informed decisions with up-to-the-minute data.",
      benefit: "Data-driven insights for informed decision-making",
    },
    {
      icon: "🔐",
      title: "Role-Based Access Control",
      description:
        "Assign precise permissions to administrators, teachers, staff. Control who sees what, ensuring data security and operational clarity.",
      benefit: "Protect sensitive data & streamline workflows",
    },
    {
      icon: "👥",
      title: "Unlimited User Accounts",
      description:
        "Create unlimited users, including administrators, teachers, staff. Spread workload, complete tasks quickly, and empower your team with the tools they need.",
      benefit: "Empower your entire school team",
    },
    {
      icon: "📡",
      title: "Real time updates",
      description:
        "Instant record updates across all users and devices. Stay connected, always up-to-date, and never miss a beat.",
      benefit: "Instant visibility across your entire school",
    },
    {
      icon: "🌐",
      title: "Offline support",
      description: "Keep app running and data intact during network outages.",
      benefit:
        "Always have access to your data in cache, even when you're offline",
    },
    {
      icon: "📝",
      title: "Complete Activity Logs",
      description:
        "Track every action, change, and update across your system. Perfect for audits, compliance, and understanding what happened when.",
      benefit: "Full transparency and accountability",
    },
    {
      icon: "💳",
      title: "Pay-Per-Feature Pricing",
      description:
        "Only pay for what you actually use. Start with essential features, then add optional modules as your needs grow.",
      benefit: "Maximum value, minimum waste",
    },
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Centralize All Operations",
      description:
        "Replace fragmented systems, spreadsheets, and paper records with one unified platform. Everything in one place, accessible anytime, anywhere.",
    },
    {
      icon: "⚡",
      title: "Save Time & Reduce Errors",
      description:
        "Automated workflows, instant updates, and intelligent validation eliminate manual data entry mistakes and free up your staff for what matters.",
    },
    {
      icon: "📈",
      title: "Scale with Confidence",
      description:
        "Whether you have 50 students or 5,000, SuSchool grows with you. Add features, users, and capacity as your institution expands.",
    },
    {
      icon: "💰",
      title: "Pay Only for What You Use",
      description:
        "No bloated software packages. Choose the core features you need, then purchase optional modules when you're ready. Complete cost control.",
    },
  ];

  const faqs = [
    {
      question: "How does SuSchool help save cost?",
      answer:
        "SuSchool is a pay-per-feature model. You only pay for the features you use and the (create, read, storage operations ). If you don't use a feature, you don't pay for it. The lesser  operations your organisation perform, the less you pay.",
    },
    {
      question: "Does SuSchool have offline mode?",
      answer:
        "Yes, we have offline mode available - This means during a minor internet flunctuation, you can still see your data - However, you won't be able to perform internet required operations such as saving a record, reloading the page or receiving real time updates.",
    },
    {
      question: "How does the Freemium plan work?",
      answer:
        "The Freemium plan gives you full access to all core features completely free for the first month. This includes administration, curriculum management, and staff/student profiles. After the first month, you can choose to upgrade to a Premium plan or continue with limited functionality.",
    },
    {
      question:
        "What's the difference between Base Premium and Extended Premium?",
      answer:
        "Base Premium includes all mandatory features (administration, curriculum, staff & student management, dashboards, activity logs) with unlimited usage. Extended Premium includes everything in Base Premium PLUS optional features like attendance tracking, assessments, and events that you can activate as needed.",
    },
    {
      question: "Can I add features to my Base Premium plan later?",
      answer:
        "Absolutely! That's the beauty of our pay-per-feature model. Start with Base Premium, then visit the Feature Marketplace to add any optional modules whenever you're ready. You only pay for what you activate.",
    },
    {
      question: "Is my school data secure?",
      answer:
        "Yes. We use bank-level encryption, regular security audits, role-based access controls, and comply with international data protection standards. Your data is backed up daily and stored in secure, redundant data centers.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Most schools are up and running within 24-48 hours. Our guided setup wizard helps you configure your organization structure, import data, and create user accounts. We also provide onboarding support and training materials.",
    },
  ];

  const dollarToNairaRate = 1392;
  const dollarToPoundRate = 0.72;
  const basePremiumIntroPrice = 30;
  const basePremiumPrice = 57;
  const extendedPremiumPrice = 72;
  const extendedPremiumIntroPrice = 37;

  const handleSignUp = () => {
    window.location.assign(APP_SIGN_UP_URL);
  };

  const handleSignIn = () => {
    window.location.assign(APP_SIGN_IN_URL);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap");

        * {
          font-family:
            "Manrope",
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
        }

        .font-inter {
          font-family: "Inter", sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .teal-gradient {
          background: linear-gradient(135deg, #0097a7 0%, #00bcd4 100%);
        }

        .teal-gradient-subtle {
          background: linear-gradient(
            135deg,
            rgba(0, 151, 167, 0.05) 0%,
            rgba(0, 188, 212, 0.05) 100%
          );
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/98 backdrop-blur-lg shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center"
              aria-label="SuSchool home"
            >
              <img
                src="/suschoollogo.png"
                alt="SuSchool"
                className="h-12 w-auto cursor-pointer"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Pricing
              </a>
              <a
                href="#marketplace"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Marketplace
              </a>
              <a
                href="#faq"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Contact
              </a>
              <a
                href="/documentation"
                className="text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Documentation
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                className="px-5 py-2.5 text-slate-700 hover:text-[#0097a7] font-semibold transition"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="px-6 py-2.5 teal-gradient text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Pricing
              </a>
              <a
                href="#marketplace"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Marketplace
              </a>
              <a
                href="#faq"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Contact
              </a>
              <a
                href="/documentation"
                className="block text-slate-700 hover:text-[#0097a7] transition font-medium"
              >
                Documentation
              </a>
              <div className="pt-4 space-y-3">
                <button
                  onClick={handleSignIn}
                  className="w-full px-5 py-2.5 text-slate-700 border-2 border-slate-200 rounded-lg font-semibold hover:border-[#0097a7] transition"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="w-full px-6 py-2.5 teal-gradient text-white rounded-lg font-semibold"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 teal-gradient-subtle"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0097a7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00bcd4]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border-2 border-[#0097a7]/20 rounded-full">
              <span className="text-2xl">🎓</span>
              <span className="text-[#0097a7] font-semibold text-sm">
                Trusted by Schools Worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-bold text-slate-900 leading-tight">
              <span className="text-4xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                We know Running a School Isn't Easy
              </span>
              <span className="block text-[#0097a7] text-5xl lg:text-6xl xl:text-7xl mt-3">
                That's Why We Built
              </span>
              <span className="block text-3xl lg:text-4xl xl:text-5xl text-slate-700 mt-5">
                the complete system for you
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              From admin to curriculum, staff to students — SuSchool puts
              everything in one real-time, role-based system. Pay only for the
              features you use and finally get the school management control
              you’ve been missing
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={handleSignUp}
                className="group px-10 py-5 teal-gradient text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Start Free for 1 Month
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button
                onClick={handleSignUp}
                className="px-10 py-5 bg-white text-slate-900 rounded-lg font-bold text-lg border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Request a Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#0097a7]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold text-base">
                  Free for 1 month
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#0097a7]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold text-base">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#0097a7]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold text-base">
                  Setup in 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div
            className="mt-20 max-w-6xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/80">
              {/* <div
                style={{
                  backgroundImage: "url('/attendanceoverview.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                className="p-8 aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-slate-600 font-semibold">SuSchool Dashboard Preview</p>
                  <p className="text-slate-500 text-sm mt-2">Your complete school operations at a glance</p>
                </div>
              </div> */}

              <img
                src="/attendanceoverview.png"
                alt="SuSchool Attendance Dashboard - Real-time attendance tracking and analytics"
                className="w-full h-auto"
              />

              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white p-6 rounded-xl shadow-xl border-2 border-slate-100 animate-float">
                <div className="text-3xl font-bold text-[#0097a7]">1,250+</div>
                <div className="text-sm text-slate-600 font-medium">
                  Students Managed
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 bg-white p-6 rounded-xl shadow-xl border-2 border-slate-100 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-3xl font-bold text-[#0097a7]">99.2%</div>
                <div className="text-sm text-slate-600 font-medium">Uptime</div>
              </div>
              <div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-xl border-2 border-slate-100 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-3xl font-bold text-[#0097a7]">85%</div>
                <div className="text-sm text-slate-600 font-medium">
                  Time Saved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Everything You Need to
              <span className="block text-[#0097a7]">
                Run Your School Efficiently
              </span>
            </h2>
            <h3 className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful features designed specifically for modern educational
              institutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-accentColor/4 p-8 rounded-2xl border-2 border-slate-200 hover:border-[#0097a7] hover:shadow-xl transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[#0097a7] font-semibold text-sm">
                    ✓ {feature.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-24 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Why Schools Choose
              <span className="block text-[#0097a7]">SuSchool</span>
            </h2>
            <h3 className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform how your institution oh3erates with measurable results
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 teal-gradient rounded-xl flex items-center justify-center text-3xl shadow-md">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0097a7] mb-2">85%</div>
              <div className="text-slate-600 font-medium">Less Admin Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0097a7] mb-2">10x</div>
              <div className="text-slate-600 font-medium">Faster Reporting</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0097a7] mb-2">100%</div>
              <div className="text-slate-600 font-medium">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0097a7] mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Access Anywhere</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}

      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Simple, Transparent
              <span className="block text-[#0097a7]">Pricing That Scales</span>
            </h2>
            <h3 className="text-xl text-slate-600 max-w-3xl mx-auto">
              Only pay for what you use. Start free, scale as you grow.
            </h3>

            {/* Early Adopter Badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-full">
              <span className="text-2xl">🎉</span>
              <span className="text-amber-900 font-bold">
                Special Offer: 50% OFF Your First 3 Months After Trial!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Freemium Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-5">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                  Perfect to Start
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Freemium
                </h3>
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold text-slate-900">
                      $0
                    </span>
                    <span className="text-slate-600 text-lg">/month</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="text-sm text-slate-500">₦0 NGN</div>
                    <div className="text-sm text-slate-500">£0 GBP</div>
                  </div>
                </div>
                <p className="text-slate-600 font-medium">
                  Free for the first month, then limited access
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    Full access for 1 month
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    Basic administration tools
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    Student & staff profiles
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">Up to 50 students</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">Email support</span>
                </li>
              </ul>

              <button
                onClick={handleSignUp}
                className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-700 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                Get Started Free
              </button>
            </div>

            {/* Base Premium Plan */}
            <div className="relative bg-white rounded-2xl p-8 border-4 border-[#0097a7] shadow-2xl scale-105 z-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="px-6 py-2 teal-gradient text-white rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="mb-5">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                  Best Value
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Base Premium
                </h3>
                <div className="mb-8">
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="text-xl font-bold text-slate-500 line-through">
                      {makeHumanReadable(basePremiumPrice, "USD")}
                    </span>
                    <span className="text-4xl font-bold text-[#0097a7]">
                      {makeHumanReadable(basePremiumIntroPrice, "USD")}
                    </span>
                    <span className="text-slate-600 text-lg">/month</span>
                  </div>

                  <div className="mt-3 flex gap-5 justify-between items-center border-t pt-3">
                    <div className="text-sm font-semibold text-slate-600 flex flex-col">
                      <span className="line-through text-slate-500">
                        {makeHumanReadable(
                          dollarToNairaRate * basePremiumPrice,
                          "NGN",
                        )}
                      </span>
                      <span className="text-[#0097a7] font-bold">
                        {makeHumanReadable(
                          dollarToNairaRate * basePremiumIntroPrice,
                          "NGN",
                        )}{" "}
                        NGN
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-600 flex flex-col">
                      <span className="line-through text-slate-500">
                        {makeHumanReadable(basePremiumPrice, "GBP")}
                      </span>
                      <span className="text-[#0097a7] font-bold">
                        {makeHumanReadable(basePremiumIntroPrice, "GBP")} GBP
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end w-full mt-3">
                    <span className="text-sm font-semibold text-amber-700 animate-bounce">
                      + Usage Charges{" "}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 font-medium">
                  All core features, unlimited usage
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Complete administration</strong> & role management
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Full curriculum management</strong> system
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Unlimited</strong> staff & student profiles
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Real-time dashboards</strong> & analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Complete activity logs</strong> for audits
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Priority support</strong> (24/48hr response)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    Access to <strong>Feature Marketplace</strong>
                  </span>
                </li>
              </ul>

              <button
                onClick={handleSignUp}
                className="w-full py-4 teal-gradient text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>

            {/* Extended Premium Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-5">
                <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                  All-Inclusive
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Extended Premium
                </h3>
                <div className="mb-8">
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="text-xl font-bold text-slate-500 line-through">
                      {makeHumanReadable(extendedPremiumPrice, "USD")}
                    </span>
                    <span className="text-4xl font-bold text-[#0097a7]">
                      {makeHumanReadable(extendedPremiumIntroPrice, "USD")}
                    </span>
                    <span className="text-slate-600 text-lg">/month</span>
                  </div>
                  <div className="mt-3 flex gap-5 justify-between items-center border-t pt-3">
                    <div className="text-sm font-semibold text-slate-600 flex flex-col">
                      <span className="line-through text-slate-500">
                        {makeHumanReadable(
                          dollarToNairaRate * extendedPremiumPrice,
                          "NGN",
                        )}
                      </span>
                      <span className="text-[#0097a7] font-bold">
                        {makeHumanReadable(
                          dollarToNairaRate * extendedPremiumIntroPrice,
                          "NGN",
                        )}{" "}
                        NGN
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-600 flex flex-col">
                      <span className="line-through text-slate-500">
                        {makeHumanReadable(extendedPremiumPrice, "GBP")}
                      </span>
                      <span className="text-[#0097a7] font-bold">
                        {makeHumanReadable(extendedPremiumIntroPrice, "GBP")}{" "}
                        GBP
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end w-full mt-3">
                    <span className="text-sm font-semibold text-amber-700 animate-bounce">
                      + Usage Charges{" "}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 font-medium">
                  Core features + optional features included
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Everything in Base Premium</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Access to all future features</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Attendance tracking</strong> (day & subject level)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Assessment & grading</strong> system
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Advanced analytics</strong> & reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#0097a7] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    <strong>Dedicated support</strong> (24hr response)
                  </span>
                </li>
              </ul>

              <button
                onClick={handleSignUp}
                className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-700 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 text-lg">
              🎁 <strong>Limited Time Offer:</strong> Get 50% off for your first
              3 months after the free trial!
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Exchange rates: 1 USD ={" "}
              {makeHumanReadable(dollarToNairaRate, "NGN")}
              NGN • 1 USD = {makeHumanReadable(dollarToPoundRate, "GBP")} GBP
              (approximate). Acurate rate will apply at the time of payment.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Marketplace Section */}
      <section
        id="marketplace"
        className="py-24 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Feature Marketplace
              <span className="block text-[#0097a7]">
                Add Only What You Need
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Extend your Base Premium plan with optional features. Pay only for
              what you use, when you use it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-[#0097a7] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="text-5xl">{feature.icon}</div>
                  <span className="text-sm text-slate-600 font-medium rounded-lg px-2 py-1 bg-slate-100 border border-borderColor">
                    {feature.mandatory ? "Base Feature" : "Extended Feature"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex gap-2 items-center">
                    {feature.introPrice && (
                      <span className="text-xl font-bold text-slate-600 line-through">
                        {feature.introPrice}
                      </span>
                    )}{" "}
                    <span className="text-3xl font-bold text-[#0097a7]">
                      {feature.price}
                    </span>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl border-2 border-[#0097a7] shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 teal-gradient rounded-xl flex items-center justify-center text-3xl">
                  💡
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  How the Marketplace Works
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  With <strong>Base Premium</strong>, you get all the essential
                  features to run your school. When you're ready for more,
                  simply visit the Feature Marketplace and activate the features
                  you need. Each feature is billed monthly and can be canceled
                  anytime. No long-term commitments, no surprises.
                </p>
                <p className="text-[#0097a7] font-semibold">
                  ✓ Activate instantly • Cancel anytime • No setup fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of schools already saving time, reducing errors, and
            gaining real-time insights with SuSchool. Start your free trial
            today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={handleSignUp}
              className="px-12 py-5 bg-white text-[#0097a7] rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Free for 1 Month
            </button>
            <button
              onClick={handleSignUp}
              className="px-12 py-5 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white hover:bg-white hover:text-[#0097a7] transition-all duration-300"
            >
              Request a Demo
            </button>
          </div>
          <p className="text-white/90 text-base mt-8">
            ✓ Free for 30 days • No credit card • Setup in 24 hours
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Frequently Asked
              <span className="block text-[#0097a7]">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about SuSchool
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-[#0097a7] transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#0097a7] flex-shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="px-8 py-3 teal-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-accentColor/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Get in Touch
              <span className="block text-[#0097a7]">We're Here to Help</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Have questions about SuSchool? Our team is ready to help you find
              the perfect solution for your institution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br bg-white p-8 lg:p-10 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition"
                    placeholder="john.doe@school.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    School/Institution Name{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition"
                    placeholder="Your School Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Number of Students
                  </label>
                  <select className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition">
                    <option>Select range</option>
                    <option>1-50 students</option>
                    <option>51-200 students</option>
                    <option>201-500 students</option>
                    <option>501-1000 students</option>
                    <option>1000+ students</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    How can we help you?{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-500 bg-white border-2 border-slate-200 rounded focus:border-[#0097a7] focus:outline-none transition resize-none"
                    placeholder="Tell us about your needs, questions, or what features you're most interested in..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 teal-gradient text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Whether you have questions about features, pricing, or need
                  technical support, our team is here to help. Reach out through
                  any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border-2 border-[#0097a7]/20 hover:border-[#0097a7] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 teal-gradient rounded-xl flex items-center justify-center shadow-md">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        Email Us
                      </h4>
                      <p className="text-slate-600 text-sm mb-3">
                        We typically respond within 24-48 hours
                      </p>
                      <a
                        href="mailto:suschool.contact@gmail.com"
                        className="text-[#0097a7] font-semibold hover:underline"
                      >
                        suschool.contact@gmail.com
                      </a>
                      <br />
                      <a
                        href="mailto:suhudalyeqeenapp@gmail.com"
                        className="text-[#0097a7] font-semibold hover:underline text-sm"
                      >
                        suhudalyeqeenapp@gmail.com{" "}
                        <span className="text-slate-500">
                          (Technical Support)
                        </span>
                      </a>
                      <br />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border-2 border-[#0097a7]/20 hover:border-[#0097a7] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 teal-gradient rounded-xl flex items-center justify-center shadow-md">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        Call Us
                      </h4>
                      {/* <p className="text-slate-600 text-sm mb-3">Monday - Friday, 9:00 AM - 6:00 PM GMT</p> */}
                      <a
                        href="tel:+4478402030"
                        className="text-[#0097a7] font-semibold hover:underline block"
                      >
                        +44 7840 2030{" "}
                        <span className="text-slate-500 text-sm">(UK)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                {/* <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-2 border-[#0097a7]/20 hover:border-[#0097a7] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 teal-gradient rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Our Office</h4>
                      <p className="text-slate-600 text-sm mb-3">Come say hello at our headquarters</p>
                      <address className="text-slate-700 not-italic leading-relaxed">
                        <strong>SuSchool Ltd.</strong>
                        <br />
                        123 Education Street
                        <br />
                        London, SW1A 1AA
                        <br />
                        United Kingdom
                      </address>
                    </div>
                  </div>
                </div> */}

                {/* Live Chat */}
                {/* <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-2 border-[#0097a7]/20 hover:border-[#0097a7] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 teal-gradient rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Live Chat</h4>
                      <p className="text-slate-600 text-sm mb-4">Get instant answers from our support team</p>
                      <button className="px-5 py-2.5 teal-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                        Start Chat Now
                      </button>
                      <p className="text-xs text-slate-500 mt-2">Average response time: 2 minutes</p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-4">
                  Follow Us
                </h4>
                {/* <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-100 hover:bg-[#0097a7] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-slate-600 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-100 hover:bg-[#0097a7] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-slate-600 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-100 hover:bg-[#0097a7] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-slate-600 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-100 hover:bg-[#0097a7] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-slate-600 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-1">
              <a href="/" aria-label="SuSchool home">
                <img
                  src="/suschoollogo.png"
                  alt="SuSchool"
                  className="h-12 w-auto mb-6 brightness-0 invert cursor-pointer"
                />
              </a>
              <p className="text-slate-400 leading-relaxed">
                The complete school management platform for modern educational
                institutions.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#marketplace"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="/documentation"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#00bcd4] transition"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2026 SuSchool. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#00bcd4] transition text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#00bcd4] transition text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#00bcd4] transition text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
