import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product) => {
    const { items } = get();
    const existingItem = items.find(item => item.id === product.id);

    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        ),
      });
    } else {
      set({
        items: [...items, { ...product, quantity: product.quantity || 1 }],
      });
    }
  },

  removeItem: (productId) => {
    set({
      items: get().items.filter(item => item.id !== productId),
    });
  },

  updateQuantity: (productId, quantity) => {
    set({
      items: get().items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ),
    });
  },

  clearCart: () => {
    set({ items: [] });
  },

  total: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));
