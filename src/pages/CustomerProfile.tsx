import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  UserIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  EditIcon,
  CarIcon,
  CreditCardIcon,
  FileTextIcon } from
'lucide-react';
import { StatusBadge } from '../components/ui/StatusBadge';
export function CustomerProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  // Mock data based on ID
  const customer = {
    name: 'Kamau Njoroge',
    phone: '+254 712 345678',
    email: 'kamau.n@email.com',
    memberSince: 'Jan 15, 2022',
    totalSpent: 45600,
    totalVisits: 12,
    favoriteService: 'Full Wash'
  };
  const vehicles = [
  {
    id: '1',
    reg: 'KCA 452B',
    make: 'Toyota Hilux',
    year: '2019',
    color: 'White'
  },
  {
    id: '2',
    reg: 'KBB 123C',
    make: 'Nissan Note',
    year: '2015',
    color: 'Silver'
  }];

  const history = [
  {
    id: '1',
    date: 'Oct 20, 2023',
    vehicle: 'KCA 452B',
    service: 'Full Service',
    cost: 5000,
    status: 'completed'
  },
  {
    id: '2',
    date: 'Sep 15, 2023',
    vehicle: 'KBB 123C',
    service: 'Basic Wash',
    cost: 500,
    status: 'completed'
  },
  {
    id: '3',
    date: 'Aug 02, 2023',
    vehicle: 'KCA 452B',
    service: 'Engine Wash',
    cost: 1200,
    status: 'completed'
  }];

  const tabs = [
  {
    id: 'overview',
    label: 'Overview'
  },
  {
    id: 'vehicles',
    label: 'Vehicles'
  },
  {
    id: 'history',
    label: 'Service History'
  },
  {
    id: 'invoices',
    label: 'Invoices'
  }];

  return (
    <div className="space-y-6">
      {/* Header Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
              {customer.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {customer.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <PhoneIcon className="w-4 h-4" /> {customer.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MailIcon className="w-4 h-4" /> {customer.email}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" /> Member since{' '}
                  {customer.memberSince}
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <EditIcon className="w-4 h-4" /> Edit Profile
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Total Visits
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {customer.totalVisits}
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                <CreditCardIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Total Spent
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  KES {customer.totalSpent.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                <CarIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Favorite Service
                </p>
                <p className="text-xl font-bold text-slate-900">
                  {customer.favoriteService}
                </p>
              </div>
            </div>
          </div>
        }

        {activeTab === 'vehicles' &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) =>
          <Link
            to={`/vehicles/${vehicle.id}`}
            key={vehicle.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">

                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-100 text-slate-600 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <CarIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg text-slate-900">
                    {vehicle.reg}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  {vehicle.make}
                </h3>
                <p className="text-sm text-slate-500">
                  {vehicle.year} • {vehicle.color}
                </p>
              </Link>
          )}
            <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors min-h-[160px]">
              <PlusIcon className="w-8 h-8 mb-2" />
              <span className="font-medium">Add Vehicle</span>
            </button>
          </div>
        }

        {activeTab === 'history' &&
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Vehicle</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Cost</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {history.map((record) =>
              <tr key={record.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-slate-900">{record.date}</td>
                    <td className="px-6 py-4 font-medium text-slate-700">
                      {record.vehicle}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {record.service}
                    </td>
                    <td className="px-6 py-4 font-medium">
                      KES {record.cost.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={record.status} />
                    </td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>);

}