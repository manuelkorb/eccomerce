import {create} from 'zustand';
import { Product } from './products';
import { persist } from 'zustand/middleware';

export type CartItem ={
    product: Product;
    quantity: number;
}

type CartStore = {
    cart:CartItem[];
    addToCart:(product:Product) => void;
    removeFromCart:(productId:string) => void;
    clearCart:()=>void;
}

export const useCartStore = create(
    persist<CartStore>(
    set => ({
        cart:[],
        addToCart:(product:Product) =>
            set((state) => ({
                cart:[...state.cart,{product,quantity:1}],
            })),
        removeFromCart: (productId) =>
            set((state)=>({
                cart:state.cart.filter((item) => item.product.id !== productId),
            })),
        clearCart: () => set({cart: []}),
        }),
        {
            name:'CartStore',
        },
    ),
);