import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropletsIcon,
  MenuIcon,
  XIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon } from
'lucide-react';
interface WebsiteLayoutProps {
  children: React.ReactNode;
}
export function WebsiteLayout({ children }: WebsiteLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Home',
    path: '/site'
  },
  {
    name: 'Services',
    path: '/site/services'
  },
  {
    name: 'About Us',
    path: '/site/about'
  },
  {
    name: 'Contact',
    path: '/site/contact'
  }];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Top Bar (Contact Info) - Hidden on mobile */}
      <div className="hidden md:block bg-slate-900 text-slate-300 py-2 px-4 lg:px-8 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-blue-500" /> +254 700 123456
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-blue-500" /> Westlands,
              Nairobi
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-blue-500" /> Mon-Sun: 8am - 6pm
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-200'}`}>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/site" className="flex items-center gap-2 text-blue-600">
            <DropletsIcon className="w-8 h-8" />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              AutoWash <span className="text-blue-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-700'}`}>

                {link.name}
              </Link>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/site/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md">

              Book Service
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto border-t border-slate-100 animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className={`text-lg font-medium p-4 rounded-xl ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'}`}>

                {link.name}
              </Link>
          )}
            <Link
            to="/site/booking"
            className="bg-blue-600 text-white text-center text-lg font-semibold p-4 rounded-xl mt-4 shadow-sm">

              Book Service Now
            </Link>
          </div>
        </div>
      }

      {/* Main Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link
                to="/site"
                className="flex items-center gap-2 text-white mb-6">

                <DropletsIcon className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold tracking-tight">
                  AutoWash <span className="text-blue-500">Pro</span>
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-6">
                Premium carwash and auto care services in Nairobi. We treat
                every vehicle with the utmost care and professionalism.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">

                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">

                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">

                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/site"
                    className="hover:text-blue-400 transition-colors">

                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/about"
                    className="hover:text-blue-400 transition-colors">

                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/services"
                    className="hover:text-blue-400 transition-colors">

                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/booking"
                    className="hover:text-blue-400 transition-colors">

                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/contact"
                    className="hover:text-blue-400 transition-colors">

                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/site/services"
                    className="hover:text-blue-400 transition-colors">

                    Basic Car Wash
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/services"
                    className="hover:text-blue-400 transition-colors">

                    Full Detailing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/services"
                    className="hover:text-blue-400 transition-colors">

                    Engine Wash
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/services"
                    className="hover:text-blue-400 transition-colors">

                    Oil Change
                  </Link>
                </li>
                <li>
                  <Link
                    to="/site/services"
                    className="hover:text-blue-400 transition-colors">

                    Tire Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                  <span>
                    123 Auto Avenue, Westlands
                    <br />
                    Nairobi, Kenya
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>+254 700 123456</span>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Mon-Sun: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} AutoWash Pro. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Booking Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40 pb-safe">
        <Link
          to="/site/booking"
          className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform">

          Book Service Now
        </Link>
      </div>
    </div>);

}