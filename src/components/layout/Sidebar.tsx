import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboardIcon,
  CalendarIcon,
  UsersIcon,
  TruckIcon,
  ClipboardListIcon,
  ShoppingCartIcon,
  PackageIcon,
  CreditCardIcon,
  BarChart3Icon,
  SettingsIcon,
  DropletsIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}
const navItems = [
{
  name: 'Dashboard',
  path: '/',
  icon: LayoutDashboardIcon
},
{
  name: 'Bookings',
  path: '/bookings',
  icon: CalendarIcon
},
{
  name: 'Customers',
  path: '/customers',
  icon: UsersIcon
},
{
  name: 'Vehicles',
  path: '/vehicles',
  icon: TruckIcon
},
{
  name: 'Job Cards',
  path: '/job-cards',
  icon: ClipboardListIcon
},
{
  name: 'POS',
  path: '/pos',
  icon: ShoppingCartIcon
},
{
  name: 'Inventory',
  path: '/inventory',
  icon: PackageIcon
},
{
  name: 'Payments',
  path: '/payments',
  icon: CreditCardIcon
},
{
  name: 'Reports',
  path: '/reports',
  icon: BarChart3Icon
},
{
  name: 'Settings',
  path: '/settings',
  icon: SettingsIcon
}];

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  return (
    <aside
      className={`hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 z-20 ${collapsed ? 'w-20' : 'w-64'}`}>

      <div className="h-16 flex items-center justify-center border-b border-slate-200 px-4">
        <div className="flex items-center gap-2 text-blue-600">
          <DropletsIcon className="w-8 h-8 flex-shrink-0" />
          {!collapsed &&
          <span className="text-xl font-bold text-slate-900 truncate">
              AutoWash Pro
            </span>
          }
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) =>
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group relative
              ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
              ${collapsed ? 'justify-center' : ''}
            `}
          title={collapsed ? item.name : undefined}>

            <item.icon
            className={`w-5 h-5 flex-shrink-0 ${collapsed ? '' : ''}`} />

            {!collapsed &&
          <span className="font-medium truncate">{item.name}</span>
          }

            {/* Tooltip for collapsed state */}
            {collapsed &&
          <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                {item.name}
              </div>
          }
          </NavLink>
        )}
      </div>

      <div className="p-4 border-t border-slate-200">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>

          {collapsed ?
          <ChevronRightIcon className="w-5 h-5" /> :

          <ChevronLeftIcon className="w-5 h-5" />
          }
        </button>
      </div>
    </aside>);

}