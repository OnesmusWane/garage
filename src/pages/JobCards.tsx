import React from 'react';
import {
  ClockIcon,
  MoreVerticalIcon,
  SearchIcon,
  FilterIcon } from
'lucide-react';
import { StatusBadge } from '../components/ui/StatusBadge';
const columns = [
{
  id: 'waiting',
  title: 'Waiting',
  color: 'bg-amber-500'
},
{
  id: 'washing',
  title: 'Washing',
  color: 'bg-blue-500'
},
{
  id: 'repair',
  title: 'Repair',
  color: 'bg-purple-500'
},
{
  id: 'quality',
  title: 'Quality Check',
  color: 'bg-indigo-500'
},
{
  id: 'completed',
  title: 'Completed',
  color: 'bg-green-500'
}];

const jobs = [
{
  id: '1',
  reg: 'KCA 452B',
  make: 'Toyota Hilux 2019',
  customer: 'Kamau Njoroge',
  service: 'Full Service',
  time: '45m',
  status: 'waiting'
},
{
  id: '2',
  reg: 'KDE 128Y',
  make: 'Mazda CX-5',
  customer: 'Sarah Wanjiku',
  service: 'Basic Wash',
  time: '15m',
  status: 'waiting'
},
{
  id: '3',
  reg: 'KBB 991C',
  make: 'Subaru Forester',
  customer: 'David Ochieng',
  service: 'Engine Wash',
  time: '1h 20m',
  status: 'washing'
},
{
  id: '4',
  reg: 'KCD 555X',
  make: 'Honda CR-V',
  customer: 'Grace Mutuku',
  service: 'Interior Detail',
  time: '2h 10m',
  status: 'repair'
},
{
  id: '5',
  reg: 'KAA 111A',
  make: 'Nissan X-Trail',
  customer: 'Peter Kiprono',
  service: 'Oil Change',
  time: '30m',
  status: 'quality'
},
{
  id: '6',
  reg: 'KCC 222D',
  make: 'Toyota Prado',
  customer: 'John Doe',
  service: 'Full Wash',
  time: '1h 5m',
  status: 'completed'
},
{
  id: '7',
  reg: 'KDD 333E',
  make: 'Mercedes C200',
  customer: 'Jane Smith',
  service: 'AC Service',
  time: '3h',
  status: 'completed'
}];

export function JobCards() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
            <FilterIcon className="w-4 h-4" />
          </button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + New Job Card
        </button>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map((column) => {
            const columnJobs = jobs.filter((job) => job.status === column.id);
            return (
              <div
                key={column.id}
                className="w-80 flex flex-col bg-slate-100/50 rounded-xl border border-slate-200/60 overflow-hidden">

                {/* Column Header */}
                <div className="p-4 border-b border-slate-200 bg-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${column.color}`}>
                    </div>
                    <h3 className="font-semibold text-slate-800">
                      {column.title}
                    </h3>
                  </div>
                  <span className="bg-white text-slate-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                    {columnJobs.length}
                  </span>
                </div>

                {/* Column Content */}
                <div className="flex-1 p-3 overflow-y-auto space-y-3">
                  {columnJobs.map((job) =>
                  <div
                    key={job.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 cursor-grab hover:shadow-md hover:border-blue-300 transition-all relative overflow-hidden group">

                      {/* Left color bar */}
                      <div
                      className={`absolute left-0 top-0 bottom-0 w-1 ${column.color}`}>
                    </div>

                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-slate-900">
                          {job.reg}
                        </h4>
                        <button className="text-slate-400 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVerticalIcon className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-sm font-medium text-slate-700 mb-1">
                        {job.make}
                      </p>
                      <p className="text-xs text-slate-500 mb-3">
                        {job.customer}
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                        <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {job.service}
                        </span>
                        <div className="flex items-center text-xs text-slate-500 font-medium">
                          <ClockIcon className="w-3 h-3 mr-1" />
                          {job.time}
                        </div>
                      </div>
                    </div>
                  )}

                  {columnJobs.length === 0 &&
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                      Drop here
                    </div>
                  }
                </div>
              </div>);

          })}
        </div>
      </div>
    </div>);

}