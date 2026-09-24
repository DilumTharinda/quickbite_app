export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Classic Burger', category: 'Meals', price: 8.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60', description: 'Juicy beef patty with lettuce and tomato.' },
  { id: '2', name: 'Cheese Pizza', category: 'Meals', price: 12.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60', description: 'Classic cheese pizza with rich tomato sauce.' },
  { id: '3', name: 'French Fries', category: 'Snacks', price: 3.99, image: 'https://images.unsplash.com/photo-1576107222617-c466480b06b9?auto=format&fit=crop&w=500&q=60', description: 'Crispy golden fries.' },
  { id: '4', name: 'Iced Coffee', category: 'Beverages', price: 4.50, image: 'https://images.unsplash.com/photo-1517701550927-30cf0ba1cad5?auto=format&fit=crop&w=500&q=60', description: 'Refreshing iced coffee.' },
  { id: '5', name: 'Caesar Salad', category: 'Meals', price: 7.99, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=60', description: 'Fresh lettuce, croutons, and Caesar dressing.' },
  { id: '6', name: 'Cola', category: 'Beverages', price: 1.99, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=60', description: 'Chilled cola.' },
];
