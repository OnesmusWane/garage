import React, { useState } from 'react';
import {
  DropletsIcon,
  WrenchIcon,
  SettingsIcon,
  WindIcon,
  DiscIcon,
  ThermometerSnowflakeIcon,
  PlusIcon,
  MinusIcon,
  Trash2Icon,
  BanknoteIcon,
  SmartphoneIcon,
  CreditCardIcon,
  SearchIcon,
  ShoppingCartIcon } from
'lucide-react';
const services = [
{
  id: '1',
  name: 'Basic Wash',
  price: 500,
  icon: DropletsIcon,
  color: 'text-blue-500',
  bg: 'bg-blue-50'
},
{
  id: '2',
  name: 'Full Wash',
  price: 800,
  icon: DropletsIcon,
  color: 'text-blue-600',
  bg: 'bg-blue-100'
},
{
  id: '3',
  name: 'Engine Wash',
  price: 1200,
  icon: SettingsIcon,
  color: 'text-slate-600',
  bg: 'bg-slate-100'
},
{
  id: '4',
  name: 'Interior Detailing',
  price: 1500,
  icon: WindIcon,
  color: 'text-purple-500',
  bg: 'bg-purple-50'
},
{
  id: '5',
  name: 'Oil Change',
  price: 2500,
  icon: DropletsIcon,
  color: 'text-amber-600',
  bg: 'bg-amber-50'
},
{
  id: '6',
  name: 'Tire Service',
  price: 800,
  icon: DiscIcon,
  color: 'text-slate-700',
  bg: 'bg-slate-100'
},
{
  id: '7',
  name: 'Brake Check',
  price: 1000,
  icon: WrenchIcon,
  color: 'text-red-500',
  bg: 'bg-red-50'
},
{
  id: '8',
  name: 'AC Service',
  price: 3000,
  icon: ThermometerSnowflakeIcon,
  color: 'text-cyan-500',
  bg: 'bg-cyan-50'
},
{
  id: '9',
  name: 'Full Service',
  price: 5000,
  icon: WrenchIcon,
  color: 'text-green-600',
  bg: 'bg-green-50'
}];

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}
export function POS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerReg, setCustomerReg] = useState('');
  const addToCart = (service: (typeof services)[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
        item.id === service.id ?
        {
          ...item,
          qty: item.qty + 1
        } :
        item
        );
      }
      return [
      ...prev,
      {
        id: service.id,
        name: service.name,
        price: service.price,
        qty: 1
      }];

    });
  };
  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return {
          ...item,
          qty: newQty
        };
      }
      return item;
    })
    );
  };
  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">
      {/* Left Side - Services Grid */}
      <div className="w-full lg:w-[60%] flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-800">Services</h2>
          <div className="relative w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map((service) =>
            <button
              key={service.id}
              onClick={() => addToCart(service)}
              className="flex flex-col items-center justify-center p-4 h-32 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all bg-white group active:scale-95">

                <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>

                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-slate-800 text-center leading-tight mb-1">
                  {service.name}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  KES {service.price.toLocaleString()}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Cart */}
      <div className="w-full lg:w-[40%] flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Customer Info */}
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <div className="mb-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Vehicle Registration
            </label>
            <input
              type="text"
              value={customerReg}
              onChange={(e) => setCustomerReg(e.target.value.toUpperCase())}
              placeholder="e.g. KAA 123A"
              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium uppercase" />

          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ?
          <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <ShoppingCartIcon className="w-12 h-12 mb-2 opacity-50" />
              <p>Cart is empty</p>
            </div> :

          <div className="space-y-3">
              {cart.map((item) =>
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">

                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      KES {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white border border-slate-200 rounded-lg">
                      <button
                    onClick={() => updateQty(item.id, -1)}
                    className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-l-lg">

                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.qty}
                      </span>
                      <button
                    onClick={() => updateQty(item.id, 1)}
                    className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-r-lg">

                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="w-20 text-right font-semibold text-sm text-slate-800">
                      {(item.price * item.qty).toLocaleString()}
                    </div>
                    <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">

                      <Trash2Icon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
            )}
            </div>
          }
        </div>

        {/* Totals & Payment */}
        <div className="border-t border-slate-200 p-4 bg-white">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span>KES {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>VAT (16%)</span>
              <span>KES {tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-slate-900 pt-2 border-t border-slate-100">
              <span>Total</span>
              <span>KES {total.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              disabled={cart.length === 0}
              className="flex flex-col items-center justify-center gap-1 h-16 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors">

              <BanknoteIcon className="w-5 h-5" />
              <span className="text-xs">Cash</span>
            </button>
            <button
              disabled={cart.length === 0}
              className="flex flex-col items-center justify-center gap-1 h-16 bg-[#00b259] hover:bg-[#00994d] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors">

              <SmartphoneIcon className="w-5 h-5" />
              <span className="text-xs">M-Pesa</span>
            </button>
            <button
              disabled={cart.length === 0}
              className="flex flex-col items-center justify-center gap-1 h-16 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors">

              <CreditCardIcon className="w-5 h-5" />
              <span className="text-xs">Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>);

}