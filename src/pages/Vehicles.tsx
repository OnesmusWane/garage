import React from 'react';
import { SearchIcon, FilterIcon, CarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const vehicles = [
{
  id: '1',
  reg: 'KCA 452B',
  make: 'Toyota Hilux',
  year: '2019',
  color: 'White',
  owner: 'Kamau Njoroge',
  lastService: 'Oct 20, 2023'
},
{
  id: '2',
  reg: 'KDE 128Y',
  make: 'Mazda CX-5',
  year: '2018',
  color: 'Red',
  owner: 'Sarah Wanjiku',
  lastService: 'Oct 15, 2023'
},
{
  id: '3',
  reg: 'KBB 991C',
  make: 'Subaru Forester',
  year: '2016',
  color: 'Black',
  owner: 'David Ochieng',
  lastService: 'Oct 22, 2023'
},
{
  id: '4',
  reg: 'KCD 555X',
  make: 'Honda CR-V',
  year: '2020',
  color: 'Silver',
  owner: 'Grace Mutuku',
  lastService: 'Sep 30, 2023'
},
{
  id: '5',
  reg: 'KAA 111A',
  make: 'Nissan X-Trail',
  year: '2015',
  color: 'Blue',
  owner: 'Peter Kiprono',
  lastService: 'Oct 18, 2023'
}];

export function Vehicles() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by registration..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase" />

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
                <th className="px-6 py-4 font-medium">Registration</th>
                <th className="px-6 py-4 font-medium">Make & Model</th>
                <th className="px-6 py-4 font-medium">Details</th>
                <th className="px-6 py-4 font-medium">Owner</th>
                <th className="px-6 py-4 font-medium">Last Service</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {vehicles.map((vehicle) =>
              <tr
                key={vehicle.id}
                onClick={() => navigate(`/vehicles/${vehicle.id}`)}
                className="hover:bg-slate-50 transition-colors cursor-pointer group">

                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                      {vehicle.reg}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {vehicle.make}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {vehicle.year} • {vehicle.color}
                  </td>
                  <td
                  className="px-6 py-4 text-slate-700 hover:text-blue-600 hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/customers/1');
                  }}>

                    {vehicle.owner}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {vehicle.lastService}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/vehicles/${vehicle.id}`);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm">

                      View Details
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