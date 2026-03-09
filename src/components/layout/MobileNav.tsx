import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboardIcon,
  CalendarIcon,
  ShoppingCartIcon,
  ClipboardListIcon,
  MenuIcon,
  UsersIcon,
  TruckIcon,
  PackageIcon,
  CreditCardIcon,
  BarChart3Icon,
  SettingsIcon,
  XIcon } from
'lucide-react';
export function MobileNav() {
  const [showMore, setShowMore] = useState(false);
  const mainTabs = [
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
    name: 'POS',
    path: '/pos',
    icon: ShoppingCartIcon
  },
  {
    name: 'Jobs',
    path: '/job-cards',
    icon: ClipboardListIcon
  }];

  const moreTabs = [
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

  return (
    <>
      {/* More Menu Overlay */}
      {showMore &&
      <div className="fixed inset-0 z-40 md:hidden">
          <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setShowMore(false)} />

          <div className="absolute bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-xl border-t border-slate-200 p-4 animate-in slide-in-from-bottom-full duration-200">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-semibold text-slate-900">More Options</h3>
              <button
              onClick={() => setShowMore(false)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">

                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {moreTabs.map((tab) =>
            <NavLink
              key={tab.name}
              to={tab.path}
              onClick={() => setShowMore(false)}
              className={({ isActive }) => `
                    flex flex-col items-center justify-center p-3 rounded-xl gap-2 transition-colors
                    ${isActive ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}
                  `}>

                  <tab.icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{tab.name}</span>
                </NavLink>
            )}
            </div>
          </div>
        </div>
      }

      {/* Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pb-safe">
        <div className="flex items-center justify-around h-16">
          {mainTabs.map((tab) =>
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) => `
                flex flex-col items-center justify-center w-full h-full gap-1
                ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}
              `}>

              <tab.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{tab.name}</span>
            </NavLink>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 ${showMore ? 'text-blue-600' : 'text-slate-500'}`}>

            <MenuIcon className="w-5 h-5" />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </>);

}