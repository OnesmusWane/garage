import React from 'react';
import {
  SearchIcon,
  FilterIcon,
  BanknoteIcon,
  SmartphoneIcon,
  CreditCardIcon } from
'lucide-react';
import { StatusBadge } from '../components/ui/StatusBadge';
const payments = [
{
  id: 'INV-001',
  customer: 'Kamau Njoroge',
  amount: 5000,
  method: 'M-Pesa',
  status: 'paid',
  date: 'Oct 24, 2023 14:30'
},
{
  id: 'INV-002',
  customer: 'Sarah Wanjiku',
  amount: 800,
  method: 'Cash',
  status: 'paid',
  date: 'Oct 24, 2023 11:15'
},
{
  id: 'INV-003',
  customer: 'David Ochieng',
  amount: 1200,
  method: 'M-Pesa',
  status: 'paid',
  date: 'Oct 23, 2023 16:45'
},
{
  id: 'INV-004',
  customer: 'Grace Mutuku',
  amount: 1500,
  method: 'Card',
  status: 'paid',
  date: 'Oct 23, 2023 13:20'
},
{
  id: 'INV-005',
  customer: 'Corporate Fleet Ltd',
  amount: 25000,
  method: 'Bank Transfer',
  status: 'pending',
  date: 'Oct 22, 2023 09:00'
}];

export function Payments() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-500 mb-1">
            Total Collected (Today)
          </p>
          <p className="text-2xl font-bold text-slate-900">KES 45,600</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <BanknoteIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Cash</p>
            <p className="text-xl font-bold text-slate-900">KES 12,500</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="p-3 bg-[#e6f7ef] text-[#00b259] rounded-lg">
            <SmartphoneIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">M-Pesa</p>
            <p className="text-xl font-bold text-slate-900">KES 28,100</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <CreditCardIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Card</p>
            <p className="text-xl font-bold text-slate-900">KES 5,000</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
            <FilterIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-medium">Invoice #</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Method</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payments.map((payment) =>
              <tr
                key={payment.id}
                className="hover:bg-slate-50 transition-colors">

                  <td className="px-6 py-4 font-mono font-medium text-slate-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    {payment.customer}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    KES {payment.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                      {payment.method === 'M-Pesa' &&
                    <SmartphoneIcon className="w-4 h-4 text-[#00b259]" />
                    }
                      {payment.method === 'Cash' &&
                    <BanknoteIcon className="w-4 h-4 text-green-600" />
                    }
                      {payment.method === 'Card' &&
                    <CreditCardIcon className="w-4 h-4 text-blue-600" />
                    }
                      {payment.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{payment.date}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={payment.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Receipt
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}