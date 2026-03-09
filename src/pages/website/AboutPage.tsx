import React from 'react';
import { AwardIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';
export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AutoWash Pro
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Setting the standard for premium auto care in Nairobi since 2014.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Garage facility"
                className="rounded-2xl shadow-xl w-full h-auto object-cover" />

            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                AutoWash Pro started with a simple mission: to provide a level
                of car care that we couldn't find anywhere else in Nairobi. What
                began as a small two-bay wash has grown into a comprehensive
                auto care facility.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that your vehicle is an investment that deserves the
                best care. That's why we use only premium products, employ
                trained professionals, and constantly upgrade our equipment to
                ensure the highest quality results.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-3xl font-bold text-slate-900">10+</p>
                  <p className="text-slate-500 font-medium">Years Experience</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-3xl font-bold text-slate-900">15k+</p>
                  <p className="text-slate-500 font-medium">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600">
              Our core values drive everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <AwardIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Quality First
              </h3>
              <p className="text-slate-600">
                We never compromise on the quality of our products or our
                workmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Expert Team
              </h3>
              <p className="text-slate-600">
                Our staff are highly trained professionals passionate about
                cars.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Efficiency
              </h3>
              <p className="text-slate-600">
                We value your time and strive to provide prompt, reliable
                service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Trust & Honesty
              </h3>
              <p className="text-slate-600">
                Transparent pricing and honest advice about what your car
                actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}