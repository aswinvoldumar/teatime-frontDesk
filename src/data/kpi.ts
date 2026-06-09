import type { KPI } from '../types';

export const kpiData: KPI[] = [
  {
    id: 'active-orders',
    title: 'Active Orders',
    value: 32,
    description: '8 awaiting kitchen',
    trend: 12.5,
    trendLabel: 'vs yesterday',
    icon: 'ClipboardList',
  },
  {
    id: 'waiter-requests',
    title: 'Pending Requests',
    value: 5,
    description: '3 high priority',
    trend: -8.2,
    trendLabel: 'vs last hour',
    icon: 'Bell',
  },
  {
    id: 'revenue-today',
    title: 'Revenue Today',
    value: '$4,892',
    description: '142 covers served',
    trend: 18.3,
    trendLabel: 'vs yesterday',
    icon: 'DollarSign',
  },
  {
    id: 'occupied-tables',
    title: 'Occupied Tables',
    value: '18/24',
    description: '75% capacity',
    trend: 5.1,
    trendLabel: 'vs avg',
    icon: 'UtensilsCrossed',
  },
];
