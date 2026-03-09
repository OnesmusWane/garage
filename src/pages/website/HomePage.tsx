import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropletsIcon,
  WindIcon,
  SettingsIcon,
  WrenchIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  CalendarIcon,
  CarIcon,
  ThumbsUpIcon } from
'lucide-react';
const services = [
{
  id: '1',
  name: 'Basic Wash',
  desc: 'Exterior wash, tire shine, and quick interior vacuum.',
  price: 500,
  icon: DropletsIcon
},
{
  id: '2',
  name: 'Full Detailing',
  desc: 'Deep interior cleaning, exterior polish, and wax.',
  price: 3500,
  icon: WindIcon
},
{
  id: '3',
  name: 'Engine Wash',
  desc: 'Safe and thorough engine bay degreasing and cleaning.',
  price: 1200,
  icon: SettingsIcon
},
{
  id: '4',
  name: 'Oil Change',
  desc: 'Premium synthetic oil and filter replacement.',
  price: 2500,
  icon: DropletsIcon
},
{
  id: '5',
  name: 'Tire Services',
  desc: 'Rotation, balancing, and pressure check.',
  price: 800,
  icon: WrenchIcon
},
{
  id: '6',
  name: 'Brake Check',
  desc: 'Comprehensive inspection of brake pads and rotors.',
  price: 1000,
  icon: WrenchIcon
}];

const testimonials = [
{
  id: 1,
  name: 'David Ochieng',
  rating: 5,
  text: 'Best car wash in Nairobi. They pay attention to every detail and my car always looks brand new after a full detailing session.'
},
{
  id: 2,
  name: 'Sarah Wanjiku',
  rating: 5,
  text: 'Very professional and fast. I love that I can book online and not have to wait in line. The waiting area is also very clean.'
},
{
  id: 3,
  name: 'Kamau Njoroge',
  rating: 4,
  text: 'Great service for engine wash. They covered all sensitive parts and did a thorough job. Will definitely be coming back.'
}];

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Car being washed"
            className="w-full h-full object-cover opacity-40" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 fill-current" /> Top Rated Auto Care
              in Nairobi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Carwash &{' '}
              <span className="text-blue-500">Auto Care</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Experience premium vehicle care with our expert team. From quick
              washes to full detailing and mechanical services, we treat your
              car like our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/site/booking"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">

                Book Service <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/site/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">

                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white mb-1">10+</p>
                <p className="text-sm text-slate-400">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">5k+</p>
                <p className="text-sm text-slate-400">Cars Serviced</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">4.9</p>
                <p className="text-sm text-slate-400">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-slate-600">
              We offer a comprehensive range of auto care services to keep your
              vehicle looking and running its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) =>
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-sm text-slate-500">
                      Starting from
                    </span>
                    <p className="text-lg font-bold text-slate-900">
                      KES {service.price}
                    </p>
                  </div>
                  <Link
                  to={`/site/booking?service=${service.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">

                    Book <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/site/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 text-lg">

              View All Services <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              A simple, hassle-free process to get your car serviced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-100 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                <CalendarIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                1. Book Online
              </h3>
              <p className="text-slate-600">
                Choose your service and preferred time slot.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                <CarIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                2. Bring Your Car
              </h3>
              <p className="text-slate-600">
                Drop off your vehicle at our secure facility.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                <WrenchIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                3. We Service It
              </h3>
              <p className="text-slate-600">
                Our experts perform the requested services.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white">
                <ThumbsUpIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                4. Drive Away
              </h3>
              <p className="text-slate-600">
                Pick up your clean, fully serviced vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Quick Booking Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-700/50 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16 bg-slate-900 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for a premium wash?
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Skip the line by booking your appointment online. We'll have a
                bay ready for you when you arrive.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" /> No
                  waiting in line
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" />{' '}
                  Guaranteed time slot
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" /> Premium
                  service quality
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 p-10 lg:p-16 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Quick Booking
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="+254 700 000000" />

                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Service
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                    <option>Basic Wash</option>
                    <option>Full Detailing</option>
                    <option>Engine Wash</option>
                    <option>Oil Change</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />

                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl transition-colors mt-4 shadow-md">

                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Here's what our clients have to
              say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) =>
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />

                )}
                </div>
                <p className="text-slate-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}