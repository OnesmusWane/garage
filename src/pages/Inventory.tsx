import React from 'react';
import {
  PlusIcon,
  SearchIcon,
  FilterIcon,
  ArrowDownToLineIcon,
  ArrowUpToLineIcon } from
'lucide-react';
import { StatusBadge } from '../components/ui/StatusBadge';
const inventory = [
{
  id: '1',
  name: 'Engine Oil 5W-30 (1L)',
  sku: 'OIL-5W30-1L',
  category: 'Lubricants',
  stock: 4,
  reorder: 10,
  price: 1200,
  status: 'critical'
},
{
  id: '2',
  name: 'Microfiber Cloths (Pack of 5)',
  sku: 'CLN-MF-5',
  category: 'Cleaning',
  stock: 12,
  reorder: 20,
  price: 800,
  status: 'low stock'
},
{
  id: '3',
  name: 'Car Shampoo (5L)',
  sku: 'CLN-SHMP-5L',
  category: 'Cleaning',
  stock: 2,
  reorder: 5,
  price: 1500,
  status: 'critical'
},
{
  id: '4',
  name: 'Brake Pads (Front)',
  sku: 'PRT-BRK-F',
  category: 'Parts',
  stock: 24,
  reorder: 10,
  price: 3500,
  status: 'healthy'
},
{
  id: '5',
  name: 'Air Filter (Universal)',
  sku: 'PRT-AIR-U',
  category: 'Parts',
  stock: 18,
  reorder: 15,
  price: 1200,
  status: 'healthy'
},
{
  id: '6',
  name: 'Tire Shine Spray',
  sku: 'CLN-TRSHN',
  category: 'Cleaning',
  stock: 8,
  reorder: 10,
  price: 900,
  status: 'low stock'
},
{
  id: '7',
  name: 'Wiper Blades (22")',
  sku: 'PRT-WIP-22',
  category: 'Parts',
  stock: 30,
  reorder: 15,
  price: 850,
  status: 'healthy'
}];

export function Inventory() {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
            <FilterIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <ArrowDownToLineIcon className="w-4 h-4" />
            Stock In
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <ArrowUpToLineIcon className="w-4 h-4" />
            Stock Out
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <PlusIcon className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">SKU</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Stock Qty</th>
                <th className="px-6 py-4 font-medium">Unit Price</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {inventory.map((item) =>
              <tr
                key={item.id}
                className="hover:bg-slate-50 transition-colors">

                  <td className="px-6 py-4 font-medium text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-xs">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{item.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                      className={`font-bold ${item.stock <= item.reorder / 2 ? 'text-red-600' : item.stock <= item.reorder ? 'text-amber-600' : 'text-slate-900'}`}>

                        {item.stock}
                      </span>
                      <span className="text-xs text-slate-400">
                        / {item.reorder}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-900 font-medium">
                    KES {item.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm mr-3">
                      Edit
                    </button>
                    <button className="text-slate-400 hover:text-red-600 font-medium text-sm">
                      Delete
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