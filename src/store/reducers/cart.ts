// src/store/reducers/cart.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
}

const initialState: CartState = {
  isOpen: false,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    // Ação para adicionar item ao carrinho
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price, quantity, image } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity, image });
      }
    },
    // Ação para remover item do carrinho
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Outras ações podem ser adicionadas aqui, como toggleCart, etc.
  },
});

export const { openCart, closeCart, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;








