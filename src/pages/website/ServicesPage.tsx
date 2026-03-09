import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropletsIcon,
  WindIcon,
  SettingsIcon,
  WrenchIcon,
  DiscIcon,
  ClockIcon,
  ArrowRightIcon } from
'lucide-react';
const categories = [
{
  name: 'Car Wash & Detailing',
  services: [
  {
    id: '1',
    name: 'Basic Wash',
    desc: 'Exterior wash, tire shine, and quick interior vacuum.',
    price: 500,
    time: '30 mins',
    icon: DropletsIcon
  },
  {
    id: '2',
    name: 'Full Wash',
    desc: 'Exterior wash, thorough interior vacuum, dashboard wipe, and tire shine.',
    price: 800,
    time: '45 mins',
    icon: DropletsIcon
  },
  {
    id: '3',
    name: 'Engine Wash',
    desc: 'Safe and thorough engine bay degreasing and cleaning.',
    price: 1200,
    time: '45 mins',
    icon: SettingsIcon
  },
  {
    id: '4',
    name: 'Interior Detailing',
    desc: 'Deep cleaning of seats, carpets, roof lining, and dashboard conditioning.',
    price: 1500,
    time: '2 hours',
    icon: WindIcon
  },
  {
    id: '5',
    name: 'Full Detailing',
    desc: 'Complete interior and exterior deep clean, polish, and wax protection.',
    price: 3500,
    time: '4 hours',
    icon: WindIcon
  }]

},
{
  name: 'Mechanical & Maintenance',
  services: [
  {
    id: '6',
    name: 'Oil Change',
    desc: 'Premium synthetic oil and filter replacement. Includes basic inspection.',
    price: 2500,
    time: '1 hour',
    icon: DropletsIcon
  },
  {
    id: '7',
    name: 'Brake Check & Service',
    desc: 'Comprehensive inspection of brake pads, rotors, and fluid levels.',
    price: 1000,
    time: '1 hour',
    icon: WrenchIcon
  },
  {
    id: '8',
    name: 'AC Service',
    desc: 'AC gas refill, leak check, and cabin filter replacement.',
    price: 3000,
    time: '1.5 hours',
    icon: WindIcon
  },
  {
    id: '9',
    name: 'Full Service',
    desc: 'Comprehensive vehicle service including oil, all filters, plugs, and full inspection.',
    price: 5000,
    time: '3 hours',
    icon: WrenchIcon
  }]

},
{
  name: 'Tire Services',
  services: [
  {
    id: '10',
    name: 'Tire Rotation',
    desc: 'Rotate tires to ensure even wear and extend tire life.',
    price: 500,
    time: '30 mins',
    icon: DiscIcon
  },
  {
    id: '11',
    name: 'Wheel Balancing',
    desc: 'Computerized wheel balancing for a smooth ride.',
    price: 800,
    time: '45 mins',
    icon: DiscIcon
  },
  {
    id: '12',
    name: 'Puncture Repair',
    desc: 'Professional plug or patch repair for tubeless tires.',
    price: 300,
    time: '20 mins',
    icon: DiscIcon
  }]

}];

export function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive auto care solutions tailored to your vehicle's needs.
            Quality service guaranteed.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-20">
          {categories.map((category, idx) =>
          <div key={idx}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-slate-200 inline-block">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) =>
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">

                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className="block text-sm text-slate-500">
                          From
                        </span>
                        <span className="text-xl font-bold text-slate-900">
                          KES {service.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-1">{service.desc}</p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <div className="flex items-center text-sm text-slate-500 gap-1.5">
                        <ClockIcon className="w-4 h-4" /> {service.time}
                      </div>
                      <Link
                    to={`/site/booking?service=${service.id}`}
                    className="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-1">

                        Book Now <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not sure what your car needs?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Bring it in for a free basic inspection. Our experts will advise you
            on the best services for your vehicle.
          </p>
          <Link
            to="/site/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">

            Contact Us Today
          </Link>
        </div>
      </div>
    </div>);

}