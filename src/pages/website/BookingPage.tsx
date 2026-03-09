import React, { useState } from 'react';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  CalendarIcon,
  ClockIcon,
  CarIcon,
  UserIcon } from
'lucide-react';
export function BookingPage() {
  const [step, setStep] = useState(1);
  // Mock form state
  const [formData, setFormData] = useState({
    service: '',
    regNumber: '',
    make: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));
  const timeSlots = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM'];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Book an Appointment
          </h1>
          <p className="text-slate-600">
            Schedule your service in just a few simple steps.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 z-0"></div>
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 z-0 transition-all duration-300"
              style={{
                width: `${(step - 1) / 4 * 100}%`
              }}>
            </div>

            {[1, 2, 3, 4, 5].map((num) =>
            <div
              key={num}
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= num ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>

                {step > num ? <CheckCircleIcon className="w-6 h-6" /> : num}
              </div>
            )}
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-slate-500 px-1">
            <span>Service</span>
            <span>Vehicle</span>
            <span>Time</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10">
          {/* Step 1: Service */}
          {step === 1 &&
          <div className="animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <WrenchIcon className="w-6 h-6 text-blue-600" /> Select Service
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
              'Basic Wash',
              'Full Wash',
              'Engine Wash',
              'Interior Detailing',
              'Full Detailing',
              'Oil Change',
              'AC Service',
              'Full Service'].
              map((srv) =>
              <label
                key={srv}
                className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${formData.service === srv ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>

                    <input
                  type="radio"
                  name="service"
                  className="sr-only"
                  checked={formData.service === srv}
                  onChange={() =>
                  setFormData({
                    ...formData,
                    service: srv
                  })
                  } />

                    <span className="font-semibold text-slate-900 block">
                      {srv}
                    </span>
                  </label>
              )}
              </div>
            </div>
          }

          {/* Step 2: Vehicle */}
          {step === 2 &&
          <div className="animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CarIcon className="w-6 h-6 text-blue-600" /> Vehicle Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Registration Number
                  </label>
                  <input
                  type="text"
                  placeholder="e.g. KAA 123A"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none uppercase"
                  value={formData.regNumber}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    regNumber: e.target.value
                  })
                  } />

                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Make & Model (Optional)
                  </label>
                  <input
                  type="text"
                  placeholder="e.g. Toyota Hilux"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.make}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    make: e.target.value
                  })
                  } />

                </div>
              </div>
            </div>
          }

          {/* Step 3: Date & Time */}
          {step === 3 &&
          <div className="animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-blue-600" /> Date & Time
              </h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Date
                  </label>
                  <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.date}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value
                  })
                  } />

                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) =>
                  <label
                    key={time}
                    className={`border rounded-lg py-2 px-3 text-center text-sm cursor-pointer transition-all ${formData.time === time ? 'border-blue-600 bg-blue-600 text-white font-medium' : 'border-slate-200 hover:border-blue-300 text-slate-700'}`}>

                        <input
                      type="radio"
                      name="time"
                      className="sr-only"
                      checked={formData.time === time}
                      onChange={() =>
                      setFormData({
                        ...formData,
                        time: time
                      })
                      } />

                        {time}
                      </label>
                  )}
                  </div>
                </div>
              </div>
            </div>
          }

          {/* Step 4: Contact Details */}
          {step === 4 &&
          <div className="animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <UserIcon className="w-6 h-6 text-blue-600" /> Contact Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                  } />

                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                  type="tel"
                  placeholder="+254 700 000000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.phone}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                  } />

                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.email}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                  } />

                </div>
              </div>
            </div>
          }

          {/* Step 5: Confirmation */}
          {step === 5 &&
          <div className="animate-in fade-in slide-in-from-right-4">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Confirm Your Booking
                </h2>
                <p className="text-slate-600 mt-2">
                  Please review your details before confirming.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 space-y-4 mb-8">
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500">Service</span>
                  <span className="font-semibold text-slate-900">
                    {formData.service || 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500">Vehicle</span>
                  <span className="font-semibold text-slate-900">
                    {formData.regNumber || 'Not provided'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500">Date & Time</span>
                  <span className="font-semibold text-slate-900">
                    {formData.date} at {formData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact</span>
                  <span className="font-semibold text-slate-900 text-right">
                    {formData.name}
                    <br />
                    {formData.phone}
                  </span>
                </div>
              </div>
            </div>
          }

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
            {step > 1 ?
            <button
              onClick={handlePrev}
              className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors">

                Back
              </button> :

            <div></div>
            }

            {step < 5 ?
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-sm">

                Next Step <ChevronRightIcon className="w-5 h-5" />
              </button> :

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center">
                <CheckCircleIcon className="w-5 h-5" /> Confirm Booking
              </button>
            }
          </div>
        </div>
      </div>
    </div>);

}
// Need WrenchIcon import
import { WrenchIcon } from 'lucide-react';