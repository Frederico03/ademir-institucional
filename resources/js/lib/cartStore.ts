import { useLocalStorage } from '@vueuse/core';

export interface CartItem {
    id: number;
    name: string;
}

export const useCartStore = () => {
    // Persist cart to local storage
    const cart = useLocalStorage<CartItem[]>('ag-r-shopping-cart', []);

    const addToCart = (item: CartItem) => {
        const exists = cart.value.find(i => i.id === item.id);
        if (!exists) {
            cart.value.push(item);
        }
    };

    const removeFromCart = (id: number) => {
        cart.value = cart.value.filter(item => item.id !== id);
    };

    const clearCart = () => {
        cart.value = [];
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart
    };
};
