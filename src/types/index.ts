export type OrderStatus = 'new' | 'preparing' | 'ready' | 'served';
export type OrderPriority = 'low' | 'normal' | 'high' | 'urgent';
export type RequestStatus = 'active' | 'assigned' | 'completed';
export type RequestPriority = 'low' | 'normal' | 'high';
export type RequestType =
  | 'call_waiter'
  | 'bill_request'
  | 'need_water'
  | 'menu_request'
  | 'special_request';

export interface OrderItem {
  name: string;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  tableNumber: number;
  customerName: string;
  items: OrderItem[];
  status: OrderStatus;
  priority: OrderPriority;
  createdAt: Date;
  kitchenLabel?: string;
}

export interface WaiterRequest {
  id: string;
  tableNumber: number;
  type: RequestType;
  status: RequestStatus;
  priority: RequestPriority;
  createdAt: Date;
  assignedTo?: string;
}

export interface KPI {
  id: string;
  title: string;
  value: string | number;
  description: string;
  trend: number;
  trendLabel: string;
  icon: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: Date;
  read: boolean;
  type: 'order' | 'request' | 'system';
}

export interface User {
  name: string;
  role: string;
  avatar: string;
  initials: string;
}
