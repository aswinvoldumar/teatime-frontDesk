import type { WaiterRequest } from '../types';

const types: WaiterRequest['type'][] = [
  'call_waiter', 'bill_request', 'need_water', 'menu_request', 'special_request',
];
const statuses: WaiterRequest['status'][] = ['active', 'assigned', 'completed'];
const priorities: WaiterRequest['priority'][] = ['low', 'normal', 'high'];
const waiters = ['Sarah K.', 'Mike T.', 'Jen L.', 'Carlos R.'];

function createRequest(
  id: number,
  table: number,
  type: WaiterRequest['type'],
  status: WaiterRequest['status'],
  priority: WaiterRequest['priority'],
  minutesAgo: number,
): WaiterRequest {
  return {
    id: `req-${id}`,
    tableNumber: table,
    type,
    status,
    priority,
    createdAt: new Date(Date.now() - minutesAgo * 60 * 1000),
    assignedTo: status === 'assigned' ? waiters[id % waiters.length] : undefined,
  };
}

export const waiterRequests: WaiterRequest[] = [
  createRequest(1, 12, 'call_waiter', 'active', 'high', 1),
  createRequest(2, 8, 'bill_request', 'active', 'high', 2),
  createRequest(3, 15, 'need_water', 'active', 'normal', 3),
  createRequest(4, 3, 'menu_request', 'active', 'low', 5),
  createRequest(5, 22, 'special_request', 'active', 'high', 4),
  createRequest(6, 7, 'call_waiter', 'assigned', 'normal', 8),
  createRequest(7, 18, 'bill_request', 'assigned', 'normal', 10),
  createRequest(8, 4, 'need_water', 'assigned', 'low', 12),
  createRequest(9, 9, 'call_waiter', 'completed', 'normal', 20),
  createRequest(10, 11, 'bill_request', 'completed', 'low', 25),
  createRequest(11, 14, 'menu_request', 'active', 'normal', 6),
  createRequest(12, 6, 'special_request', 'active', 'high', 2),
  createRequest(13, 19, 'call_waiter', 'assigned', 'normal', 15),
  createRequest(14, 1, 'need_water', 'active', 'low', 7),
  createRequest(15, 16, 'bill_request', 'completed', 'normal', 30),
  createRequest(16, 20, 'call_waiter', 'active', 'high', 1),
  createRequest(17, 5, 'menu_request', 'completed', 'low', 35),
  createRequest(18, 13, 'special_request', 'active', 'normal', 9),
];

export const pendingRequests = waiterRequests.filter(
  (r) => r.status === 'active' || r.status === 'assigned',
);
