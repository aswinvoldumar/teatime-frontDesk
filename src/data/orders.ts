import type { Order } from '../types';

const menuItems = [
  'Wagyu Burger', 'Truffle Fries', 'Caesar Salad', 'Grilled Salmon',
  'Lobster Bisque', 'Ribeye Steak', 'Margherita Pizza', 'Tiramisu',
  'Pan-Seared Duck', 'Wild Mushroom Risotto', 'Seared Scallops',
  'Chocolate Soufflé', 'Beef Tartare', 'Caprese Bruschetta',
  'Lamb Chops', 'Prawn Cocktail', 'Vegetable Curry', 'Crème Brûlée',
  'Tuna Poke Bowl', 'Chicken Parmigiana', 'Miso Glazed Cod',
  'Burrata & Prosciutto', 'Espresso Martini', 'Affogato',
];

const customers = [
  'Liam Carter', 'Emma Wilson', 'Noah Thompson', 'Olivia Chen',
  'James Rodriguez', 'Sophia Patel', 'Ethan Brooks', 'Isabella Rossi',
  'Marcus Johnson', 'Ava Nakamura', 'Daniel Kim', 'Mia Anderson',
  'Lucas Martinez', 'Charlotte Lee', 'Benjamin Wright', 'Amelia Garcia',
  'Henry Taylor', 'Harper Davis', 'Alexander Moore', 'Evelyn Clark',
  'Sebastian Hall', 'Grace Nguyen', 'Jack Sullivan', 'Lily Foster',
];

const kitchens = ['Grill', 'Sauté', 'Pastry', 'Cold Station', 'Bar'];

function randomItems(count: number) {
  const shuffled = [...menuItems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((name) => ({
    name,
    quantity: Math.floor(Math.random() * 3) + 1,
  }));
}

const statuses: Order['status'][] = ['new', 'preparing', 'ready', 'served'];
const priorities: Order['priority'][] = ['low', 'normal', 'high', 'urgent'];

function createOrder(
  id: number,
  table: number,
  status: Order['status'],
  priority: Order['priority'],
  minutesAgo: number,
): Order {
  return {
    id: `#${1040 + id}`,
    tableNumber: table,
    customerName: customers[id % customers.length],
    items: randomItems(Math.floor(Math.random() * 3) + 2),
    status,
    priority,
    createdAt: new Date(Date.now() - minutesAgo * 60 * 1000),
    kitchenLabel: kitchens[id % kitchens.length],
  };
}

export const orders: Order[] = [
  createOrder(0, 8, 'new', 'high', 1),
  createOrder(1, 12, 'new', 'normal', 3),
  createOrder(2, 3, 'preparing', 'urgent', 9),
  createOrder(3, 15, 'preparing', 'high', 12),
  createOrder(4, 7, 'preparing', 'normal', 15),
  createOrder(5, 22, 'ready', 'normal', 18),
  createOrder(6, 4, 'ready', 'high', 20),
  createOrder(7, 18, 'ready', 'low', 22),
  createOrder(8, 9, 'served', 'normal', 35),
  createOrder(9, 11, 'served', 'low', 40),
  createOrder(10, 2, 'new', 'urgent', 0),
  createOrder(11, 14, 'preparing', 'normal', 7),
  createOrder(12, 6, 'preparing', 'high', 10),
  createOrder(13, 19, 'ready', 'normal', 25),
  createOrder(14, 1, 'new', 'normal', 2),
  createOrder(15, 16, 'preparing', 'low', 14),
  createOrder(16, 20, 'ready', 'high', 28),
  createOrder(17, 5, 'served', 'normal', 45),
  createOrder(18, 13, 'new', 'high', 4),
  createOrder(19, 10, 'preparing', 'urgent', 6),
  createOrder(20, 17, 'ready', 'normal', 30),
  createOrder(21, 21, 'served', 'low', 50),
  createOrder(22, 23, 'new', 'normal', 5),
  createOrder(23, 24, 'preparing', 'normal', 11),
];

export const activeOrders = orders.filter((o) => o.status !== 'served');
