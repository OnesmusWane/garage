import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area } from
'recharts';
import { CalendarIcon, DownloadIcon } from 'lucide-react';
const revenueData = [
{
  name: 'Week 1',
  revenue: 120000
},
{
  name: 'Week 2',
  revenue: 150000
},
{
  name: 'Week 3',
  revenue: 180000
},
{
  name: 'Week 4',
  revenue: 140000
}];

const serviceData = [
{
  name: 'Basic Wash',
  count: 145
},
{
  name: 'Full Wash',
  count: 85
},
{
  name: 'Engine Wash',
  count: 42
},
{
  name: 'Interior',
  count: 38
},
{
  name: 'Oil Change',
  count: 24
}];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">
          Analytics & Reports
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <CalendarIcon className="w-4 h-4" /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <DownloadIcon className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">
            Total Revenue
          </p>
          <p className="text-2xl font-bold text-slate-900">KES 590,000</p>
          <p className="text-xs text-green-600 font-medium mt-2">
            +15% from last month
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">
            Avg Daily Revenue
          </p>
          <p className="text-2xl font-bold text-slate-900">KES 19,666</p>
          <p className="text-xs text-green-600 font-medium mt-2">
            +5% from last month
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">
            Total Customers
          </p>
          <p className="text-2xl font-bold text-slate-900">334</p>
          <p className="text-xs text-green-600 font-medium mt-2">
            +22 new this month
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">
            Most Popular Service
          </p>
          <p className="text-2xl font-bold text-slate-900">Basic Wash</p>
          <p className="text-xs text-slate-500 font-medium mt-2">
            43% of total services
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Revenue Over Time
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 0
                }}>

                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0" />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12
                  }}
                  dy={10} />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12
                  }}
                  tickFormatter={(val) => `${val / 1000}k`} />

                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRev)" />

              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Services Performed
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={serviceData}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 10,
                  left: 20,
                  bottom: 0
                }}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e2e8f0" />

                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12
                  }} />

                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12
                  }} />

                <Tooltip
                  cursor={{
                    fill: '#f1f5f9'
                  }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />

                <Bar
                  dataKey="count"
                  fill="#10b981"
                  radius={[0, 4, 4, 0]}
                  barSize={30} />

              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>);

}