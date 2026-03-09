import React from 'react';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const customers = [
{
  id: '1',
  name: 'Kamau Njoroge',
  phone: '+254 712 345678',
  email: 'kamau.n@email.com',
  vehicles: 2,
  visits: 12,
  lastVisit: 'Oct 20, 2023'
},
{
  id: '2',
  name: 'Sarah Wanjiku',
  phone: '+254 722 112233',
  email: 'sarah.w@email.com',
  vehicles: 1,
  visits: 5,
  lastVisit: 'Oct 15, 2023'
},
{
  id: '3',
  name: 'David Ochieng',
  phone: '+254 733 445566',
  email: 'dochieng@email.com',
  vehicles: 3,
  visits: 24,
  lastVisit: 'Oct 22, 2023'
},
{
  id: '4',
  name: 'Grace Mutuku',
  phone: '+254 700 998877',
  email: 'grace.m@email.com',
  vehicles: 1,
  visits: 2,
  lastVisit: 'Sep 30, 2023'
},
{
  id: '5',
  name: 'Peter Kiprono',
  phone: '+254 711 223344',
  email: 'pkiprono@email.com',
  vehicles: 2,
  visits: 8,
  lastVisit: 'Oct 18, 2023'
},
{
  id: '6',
  name: 'Jane Smith',
  phone: '+254 799 887766',
  email: 'jane.smith@email.com',
  vehicles: 1,
  visits: 1,
  lastVisit: 'Oct 24, 2023'
}];

export function Customers() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
            <FilterIcon className="w-4 h-4" />
          </button>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <PlusIcon className="w-4 h-4" />
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium text-center">Vehicles</th>
                <th className="px-6 py-4 font-medium text-center">
                  Total Visits
                </th>
                <th className="px-6 py-4 font-medium">Last Visit</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {customers.map((customer) =>
              <tr
                key={customer.id}
                onClick={() => navigate(`/customers/${customer.id}`)}
                className="hover:bg-slate-50 transition-colors cursor-pointer group">

                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      {customer.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-700">{customer.phone}</div>
                    <div className="text-xs text-slate-500">
                      {customer.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-medium text-xs">
                      {customer.vehicles}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-slate-700">
                    {customer.visits}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {customer.lastVisit}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/customers/${customer.id}`);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm">

                      View Profile
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