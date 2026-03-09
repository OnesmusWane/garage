import React from 'react';
import {
  CarIcon,
  ClipboardListIcon,
  BanknoteIcon,
  CalendarClockIcon,
  AlertTriangleIcon } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend } from
'recharts';
import { StatCard } from '../components/ui/StatCard';
import { StatusBadge } from '../components/ui/StatusBadge';
const revenueData = [
{
  name: 'Mon',
  revenue: 25000
},
{
  name: 'Tue',
  revenue: 32000
},
{
  name: 'Wed',
  revenue: 28000
},
{
  name: 'Thu',
  revenue: 45000
},
{
  name: 'Fri',
  revenue: 52000
},
{
  name: 'Sat',
  revenue: 68000
},
{
  name: 'Sun',
  revenue: 41000
}];

const serviceData = [
{
  name: 'Basic Wash',
  value: 40
},
{
  name: 'Engine Wash',
  value: 20
},
{
  name: 'Interior Detail',
  value: 15
},
{
  name: 'Oil Change',
  value: 15
},
{
  name: 'Other',
  value: 10
}];

const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#64748b'];
const recentBookings = [
{
  id: '1',
  customer: 'Kamau Njoroge',
  vehicle: 'KCA 452B',
  service: 'Full Service',
  time: '09:00 AM',
  status: 'in-progress'
},
{
  id: '2',
  customer: 'Sarah Wanjiku',
  vehicle: 'KDE 128Y',
  service: 'Basic Wash',
  time: '10:30 AM',
  status: 'waiting'
},
{
  id: '3',
  customer: 'David Ochieng',
  vehicle: 'KBB 991C',
  service: 'Engine Wash',
  time: '11:00 AM',
  status: 'confirmed'
},
{
  id: '4',
  customer: 'Grace Mutuku',
  vehicle: 'KCD 555X',
  service: 'Interior Detail',
  time: '01:00 PM',
  status: 'pending'
},
{
  id: '5',
  customer: 'Peter Kiprono',
  vehicle: 'KAA 111A',
  service: 'Oil Change',
  time: '02:30 PM',
  status: 'completed'
}];

const inventoryAlerts = [
{
  id: '1',
  item: 'Engine Oil 5W-30',
  stock: 4,
  reorder: 10,
  status: 'critical'
},
{
  id: '2',
  item: 'Microfiber Cloths',
  stock: 12,
  reorder: 20,
  status: 'low stock'
},
{
  id: '3',
  item: 'Car Shampoo (5L)',
  stock: 2,
  reorder: 5,
  status: 'critical'
}];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Cars Serviced Today"
          value="24"
          change={12}
          changeType="positive"
          icon={CarIcon}
          iconColor="blue"
          delay={0.1} />

        <StatCard
          title="Active Jobs"
          value="8"
          icon={ClipboardListIcon}
          iconColor="purple"
          delay={0.2} />

        <StatCard
          title="Daily Revenue"
          value="KES 45,600"
          change={8}
          changeType="positive"
          icon={BanknoteIcon}
          iconColor="green"
          delay={0.3} />

        <StatCard
          title="Pending Bookings"
          value="5"
          icon={CalendarClockIcon}
          iconColor="amber"
          delay={0.4} />

        <StatCard
          title="Low Stock Items"
          value="3"
          change={2}
          changeType="negative"
          icon={AlertTriangleIcon}
          iconColor="red"
          delay={0.5} />

      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Weekly Revenue
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 0
                }}>

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
                  tickFormatter={(value) => `KSh ${value / 1000}k`} />

                <RechartsTooltip
                  cursor={{
                    fill: '#f1f5f9'
                  }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => [
                  `KES ${value.toLocaleString()}`,
                  'Revenue']
                  } />

                <Bar
                  dataKey="revenue"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40} />

              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Service Popularity
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="45%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value">

                  {serviceData.map((entry, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]} />

                  )}
                </Pie>
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Share']} />

                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-800">
              Recent Bookings
            </h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
                <tr>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Vehicle</th>
                  <th className="px-6 py-3 font-medium">Service</th>
                  <th className="px-6 py-3 font-medium">Time</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentBookings.map((booking) =>
                <tr
                  key={booking.id}
                  className="hover:bg-slate-50 transition-colors">

                    <td className="px-6 py-4 font-medium text-slate-900">
                      {booking.customer}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {booking.vehicle}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {booking.service}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{booking.time}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={booking.status} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-800">
              Inventory Alerts
            </h3>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
              {inventoryAlerts.length}
            </span>
          </div>
          <div className="p-4 flex-1">
            <div className="space-y-4">
              {inventoryAlerts.map((alert) =>
              <div
                key={alert.id}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50">

                  <div>
                    <p className="font-medium text-slate-900 text-sm">
                      {alert.item}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Stock: {alert.stock} / Reorder: {alert.reorder}
                    </p>
                  </div>
                  <StatusBadge status={alert.status} />
                </div>
              )}
            </div>
            <button className="w-full mt-6 py-2 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Manage Inventory
            </button>
          </div>
        </div>
      </div>
    </div>);

}