import React from 'react';
export interface StatusBadgeProps {
  status: string;
  className?: string;
}
export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const normalizedStatus = status.toLowerCase();
  let colorClasses = 'bg-slate-100 text-slate-700 border-slate-200';
  let dotColor = 'bg-slate-400';
  if (
  ['available', 'completed', 'paid', 'healthy'].includes(normalizedStatus))
  {
    colorClasses = 'bg-green-50 text-green-700 border-green-200';
    dotColor = 'bg-green-500';
  } else if (
  ['confirmed', 'active', 'in-progress'].includes(normalizedStatus))
  {
    colorClasses = 'bg-blue-50 text-blue-700 border-blue-200';
    dotColor = 'bg-blue-500';
  } else if (['pending', 'waiting', 'low stock'].includes(normalizedStatus)) {
    colorClasses = 'bg-amber-50 text-amber-700 border-amber-200';
    dotColor = 'bg-amber-500';
  } else if (['cancelled', 'overdue', 'critical'].includes(normalizedStatus)) {
    colorClasses = 'bg-red-50 text-red-700 border-red-200';
    dotColor = 'bg-red-500';
  } else if (
  ['in-service', 'washing', 'repair', 'quality check'].includes(
    normalizedStatus
  ))
  {
    colorClasses = 'bg-purple-50 text-purple-700 border-purple-200';
    dotColor = 'bg-purple-500';
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClasses} ${className}`}>

      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor}`}
        aria-hidden="true">
      </span>
      <span className="capitalize">{status}</span>
    </span>);

}