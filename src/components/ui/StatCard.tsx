import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ArrowDownRightIcon, MinusIcon } from 'lucide-react';
export interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  iconColor?: 'blue' | 'green' | 'amber' | 'red' | 'purple';
  delay?: number;
}
export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'blue',
  delay = 0
}: StatCardProps) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    amber: 'bg-amber-100 text-amber-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600'
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay
      }}
      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col">

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <div className={`p-2 rounded-lg ${colorMap[iconColor]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline gap-2 mt-auto">
        <span className="text-2xl font-bold text-slate-900">{value}</span>

        {change !== undefined &&
        <span
          className={`flex items-center text-xs font-medium ${changeType === 'positive' ? 'text-green-600' : changeType === 'negative' ? 'text-red-600' : 'text-slate-500'}`}>

            {changeType === 'positive' &&
          <ArrowUpRightIcon className="w-3 h-3 mr-0.5" />
          }
            {changeType === 'negative' &&
          <ArrowDownRightIcon className="w-3 h-3 mr-0.5" />
          }
            {changeType === 'neutral' &&
          <MinusIcon className="w-3 h-3 mr-0.5" />
          }
            {Math.abs(change)}%
          </span>
        }
      </div>
    </motion.div>);

}