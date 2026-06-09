export function formatRelativeTime(date: Date): string {
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);

  if (diffSec < 60) return 'Just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHour < 24) return `${diffHour}h ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}

export function formatClock(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
}

export const orderStatusLabels: Record<string, string> = {
  new: 'New',
  preparing: 'Preparing',
  ready: 'Ready',
  served: 'Served',
};

export const orderActionLabels: Record<string, string> = {
  new: 'Accept',
  preparing: 'Mark Ready',
  ready: 'Complete',
  served: 'Done',
};

export const requestTypeLabels: Record<string, string> = {
  call_waiter: 'Call Waiter',
  bill_request: 'Bill Request',
  need_water: 'Need Water',
  menu_request: 'Menu Request',
  special_request: 'Special Request',
};

export const requestTypeIcons: Record<string, string> = {
  call_waiter: 'Bell',
  bill_request: 'Receipt',
  need_water: 'Droplets',
  menu_request: 'BookOpen',
  special_request: 'MessageSquare',
};

export const priorityColors: Record<string, string> = {
  low: 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-zinc-800/80 dark:text-zinc-400 dark:border-zinc-700',
  normal: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30',
  high: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30',
  urgent: 'bg-red-50 text-red-700 border-red-300 dark:bg-red-500/15 dark:text-red-300 dark:border-red-500/30',
};

export const statusColors: Record<string, string> = {
  new: 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30',
  preparing: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
  ready: 'bg-green-50 text-green-700 border-green-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  served: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-zinc-800/80 dark:text-zinc-400 dark:border-zinc-700',
};

export const actionButtonColors: Record<string, string> = {
  new: '',
  preparing: '!bg-amber-500 hover:!bg-amber-600',
  ready: '!bg-green-600 hover:!bg-green-700',
  served: '!bg-slate-400 hover:!bg-slate-500 dark:!bg-zinc-600',
};
