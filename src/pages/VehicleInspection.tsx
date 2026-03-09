import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckIcon, CameraIcon, SaveIcon, ArrowLeftIcon } from 'lucide-react';
export function VehicleInspection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sections = [
  {
    id: 'exterior',
    title: 'Exterior Inspection',
    items: [
    'Body Condition',
    'Paint',
    'Windshield',
    'Lights & Indicators',
    'Tires',
    'Mirrors']

  },
  {
    id: 'interior',
    title: 'Interior Inspection',
    items: [
    'Seats & Upholstery',
    'Dashboard',
    'AC & Heating',
    'Audio System',
    'Floor Mats',
    'Seatbelts']

  },
  {
    id: 'engine',
    title: 'Engine Compartment',
    items: [
    'Oil Level & Condition',
    'Coolant Level',
    'Battery & Cables',
    'Belts & Hoses',
    'Air Filter',
    'Exhaust System']

  }];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">

            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Digital Inspection
            </h1>
            <p className="text-sm text-slate-500">KCA 452B • Toyota Hilux</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-500">
            Progress: 0%
          </span>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <SaveIcon className="w-4 h-4" /> Save Report
          </button>
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-6">
        {sections.map((section) =>
        <div
          key={section.id}
          className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">

            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800">
                {section.title}
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              {section.items.map((item) =>
            <div
              key={item}
              className="p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-slate-50/50 transition-colors">

                  <div className="w-1/3 font-medium text-slate-700">{item}</div>

                  <div className="flex gap-2">
                    <label className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors has-[:checked]:bg-green-50 has-[:checked]:border-green-500 has-[:checked]:text-green-700">
                      <input
                    type="radio"
                    name={`${section.id}-${item}`}
                    value="good"
                    className="sr-only" />

                      <span className="text-sm font-medium">Good</span>
                    </label>
                    <label className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-colors has-[:checked]:bg-amber-50 has-[:checked]:border-amber-500 has-[:checked]:text-amber-700">
                      <input
                    type="radio"
                    name={`${section.id}-${item}`}
                    value="fair"
                    className="sr-only" />

                      <span className="text-sm font-medium">Fair</span>
                    </label>
                    <label className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-colors has-[:checked]:bg-red-50 has-[:checked]:border-red-500 has-[:checked]:text-red-700">
                      <input
                    type="radio"
                    name={`${section.id}-${item}`}
                    value="poor"
                    className="sr-only" />

                      <span className="text-sm font-medium">Poor</span>
                    </label>
                  </div>

                  <div className="flex-1 flex gap-2">
                    <input
                  type="text"
                  placeholder="Add notes..."
                  className="flex-1 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <button
                  className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 rounded-lg transition-colors"
                  title="Add Photo">

                      <CameraIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
            )}
            </div>
          </div>
        )}
      </div>
    </div>);

}