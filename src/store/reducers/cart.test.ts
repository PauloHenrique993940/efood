// Testes unitários do reducer do carrinho (Jest + Redux Toolkit)

import cartReducer, {
  addItem,
  removeItem,
  openCart,
  closeCart,
} from './cart';

const itemMock = {
  id: 1,
  name: 'Pizza Margherita',
  price: 60,
  quantity: 1,
  image: 'pizza.png',
};

describe('cart reducer', () => {
  it('deve retornar o estado inicial', () => {
    const state = cartReducer(undefined, { type: 'unknown' });

    expect(state).toEqual({ isOpen: false, items: [] });
  });

  it('deve abrir e fechar o carrinho', () => {
    let state = cartReducer(undefined, openCart());
    expect(state.isOpen).toBe(true);

    state = cartReducer(state, closeCart());
    expect(state.isOpen).toBe(false);
  });

  it('deve adicionar um novo item ao carrinho', () => {
    const state = cartReducer(undefined, addItem(itemMock));

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(itemMock);
  });

  it('deve somar a quantidade ao adicionar item já existente', () => {
    let state = cartReducer(undefined, addItem(itemMock));
    state = cartReducer(state, addItem({ ...itemMock, quantity: 2 }));

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(3);
  });

  it('deve remover um item do carrinho', () => {
    let state = cartReducer(undefined, addItem(itemMock));
    state = cartReducer(state, removeItem(1));

    expect(state.items).toHaveLength(0);
  });
});
