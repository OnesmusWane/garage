import React, { useState } from 'react';
import {
  SearchIcon,
  BellIcon,
  PlusIcon,
  MenuIcon,
  UserIcon } from
'lucide-react';
import { useLocation } from 'react-router-dom';
interface TopNavProps {
  onMenuClick: () => void;
}
export function TopNav({ onMenuClick }: TopNavProps) {
  const location = useLocation();
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // Simple logic to get page title from path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    const parts = path.split('/').filter(Boolean);
    if (parts.length === 0) return 'Dashboard';
    // Capitalize and format
    const title = parts[0].replace('-', ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  };
  return (
    <header className="h-16 bg-white border-b border-slate-200 shadow-sm flex items-center justify-between px-4 lg:px-8 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">

          <MenuIcon className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-slate-800 hidden sm:block">
          {getPageTitle()}
        </h1>
      </div>

      <div className="flex-1 max-w-xl px-4 lg:px-8 hidden md:block">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by registration number (e.g. KAA 123A)..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm" />

        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Quick Actions */}
        <div className="relative">
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            onBlur={() => setTimeout(() => setShowQuickActions(false), 200)}
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">

            <PlusIcon className="w-4 h-4" />
            <span>Quick Action</span>
          </button>
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="sm:hidden p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg">

            <PlusIcon className="w-5 h-5" />
          </button>

          {showQuickActions &&
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                New Booking
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                New Job Card
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                New Invoice
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                Add Customer
              </button>
            </div>
          }
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            onBlur={() => setTimeout(() => setShowProfile(false), 200)}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-100 transition-colors">

            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
              JD
            </div>
          </button>

          {showProfile &&
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-sm font-medium text-slate-900">John Doe</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                Sign out
              </button>
            </div>
          }
        </div>
      </div>
    </header>);

}