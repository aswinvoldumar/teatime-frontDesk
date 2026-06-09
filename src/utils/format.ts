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
  low: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
  normal: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  high: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400',
  urgent: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
};

export const statusColors: Record<string, string> = {
  new: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-400 dark:border-orange-900',
  preparing: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-900',
  ready: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-900',
  served: 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700',
};

export const actionButtonColors: Record<string, string> = {
  new: 'bg-primary hover:bg-primary-hover text-white',
  preparing: 'bg-amber-500 hover:bg-amber-600 text-white',
  ready: 'bg-green-600 hover:bg-green-700 text-white',
  served: 'bg-zinc-400 hover:bg-zinc-500 text-white dark:bg-zinc-600 dark:hover:bg-zinc-500',
};
