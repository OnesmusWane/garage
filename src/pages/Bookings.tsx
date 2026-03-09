import React, { useState } from 'react';
import {
  CalendarIcon,
  ListIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon } from
'lucide-react';
import { StatusBadge } from '../components/ui/StatusBadge';
const bookings = [
{
  id: '1',
  customer: 'Kamau Njoroge',
  phone: '+254 712 345678',
  vehicle: 'KCA 452B',
  service: 'Full Service',
  date: 'Oct 24, 2023',
  time: '09:00 AM',
  status: 'confirmed'
},
{
  id: '2',
  customer: 'Sarah Wanjiku',
  phone: '+254 722 112233',
  vehicle: 'KDE 128Y',
  service: 'Basic Wash',
  date: 'Oct 24, 2023',
  time: '10:30 AM',
  status: 'waiting'
},
{
  id: '3',
  customer: 'David Ochieng',
  phone: '+254 733 445566',
  vehicle: 'KBB 991C',
  service: 'Engine Wash',
  date: 'Oct 24, 2023',
  time: '11:00 AM',
  status: 'in-service'
},
{
  id: '4',
  customer: 'Grace Mutuku',
  phone: '+254 700 998877',
  vehicle: 'KCD 555X',
  service: 'Interior Detail',
  date: 'Oct 25, 2023',
  time: '01:00 PM',
  status: 'pending'
},
{
  id: '5',
  customer: 'Peter Kiprono',
  phone: '+254 711 223344',
  vehicle: 'KAA 111A',
  service: 'Oil Change',
  date: 'Oct 25, 2023',
  time: '02:30 PM',
  status: 'cancelled'
}];

export function Bookings() {
  const [view, setView] = useState<'calendar' | 'list'>('list');
  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setView('calendar')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === 'calendar' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>

            <CalendarIcon className="w-4 h-4" />
            Calendar
          </button>
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>

            <ListIcon className="w-4 h-4" />
            List
          </button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
            <PlusIcon className="w-4 h-4" />
            New Booking
          </button>
        </div>
      </div>

      {view === 'list' ?
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Vehicle</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Date & Time</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.map((booking) =>
              <tr
                key={booking.id}
                className="hover:bg-slate-50 transition-colors cursor-pointer">

                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {booking.customer}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {booking.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700">
                      {booking.vehicle}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {booking.service}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{booking.date}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {booking.time}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
            <span>Showing 1 to 5 of 24 entries</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">
                Prev
              </button>
              <button className="px-3 py-1 border border-slate-200 rounded bg-blue-50 text-blue-600 font-medium">
                1
              </button>
              <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">
                2
              </button>
              <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">
                Next
              </button>
            </div>
          </div>
        </div> :

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center justify-center h-96">
          <div className="text-center text-slate-500">
            <CalendarIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-lg font-medium text-slate-700">Calendar View</p>
            <p className="text-sm">
              Weekly calendar grid implementation goes here.
            </p>
          </div>
        </div>
      }
    </div>);

}