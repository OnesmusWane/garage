import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CarIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  WrenchIcon,
  HistoryIcon } from
'lucide-react';
import { StatusBadge } from '../components/ui/StatusBadge';
export function VehicleProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const vehicle = {
    reg: 'KCA 452B',
    make: 'Toyota Hilux',
    year: '2019',
    color: 'White',
    engineNo: '2GD-1234567',
    chassisNo: 'MROFX22G1234567',
    owner: {
      id: '1',
      name: 'Kamau Njoroge'
    }
  };
  const tabs = [
  {
    id: 'overview',
    label: 'Overview'
  },
  {
    id: 'inspections',
    label: 'Inspection History'
  },
  {
    id: 'services',
    label: 'Services'
  }];

  return (
    <div className="space-y-6">
      {/* Header Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="w-24 h-16 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-slate-200">
              <span className="font-bold text-xl text-slate-800 tracking-wider">
                {vehicle.reg}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {vehicle.make}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                <span>{vehicle.year}</span>
                <span>•</span>
                <span>{vehicle.color}</span>
                <span>•</span>
                <span>
                  Owner:{' '}
                  <Link
                    to={`/customers/${vehicle.owner.id}`}
                    className="text-blue-600 hover:underline font-medium">

                    {vehicle.owner.name}
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate(`/inspection/${id}`)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">

            <ClipboardCheckIcon className="w-4 h-4" /> New Inspection
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <nav className="flex gap-6">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>

              {tab.label}
            </button>
          )}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Vehicle Details
              </h3>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-500">Registration</dt>
                  <dd className="font-medium text-slate-900">{vehicle.reg}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-500">Make & Model</dt>
                  <dd className="font-medium text-slate-900">{vehicle.make}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-500">Year</dt>
                  <dd className="font-medium text-slate-900">{vehicle.year}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-500">Color</dt>
                  <dd className="font-medium text-slate-900">
                    {vehicle.color}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-500">Engine Number</dt>
                  <dd className="font-mono text-slate-900">
                    {vehicle.engineNo}
                  </dd>
                </div>
                <div className="flex justify-between pb-2">
                  <dt className="text-slate-500">Chassis Number</dt>
                  <dd className="font-mono text-slate-900">
                    {vehicle.chassisNo}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center text-slate-400 min-h-[300px]">
              <CarIcon className="w-24 h-24 mb-4 opacity-20" />
              <p>No vehicle photo uploaded</p>
              <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
                Upload Photo
              </button>
            </div>
          </div>
        }

        {activeTab === 'inspections' &&
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 text-center">
            <ClipboardCheckIcon className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-lg font-medium text-slate-900 mb-1">
              No inspections yet
            </h3>
            <p className="text-slate-500 mb-4">
              Perform a digital inspection to record vehicle condition.
            </p>
            <button
            onClick={() => navigate(`/inspection/${id}`)}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">

              Start Inspection
            </button>
          </div>
        }
      </div>
    </div>);

}