import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { shopProducts } from "../../Contants";

import { ProductState, Product, ProductCart } from "./types";

const initialState: ProductState = {
    products: shopProducts,
    selectedProduct: null,
    showProduct: false,
    cart: [],
    showCart: false,
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        select_product: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
            state.showProduct = action.payload === null ? false : true;
        },
        update_show_product: (state, action: PayloadAction<boolean>) => {
            state.showProduct = action.payload;
        },
        add_to_cart: (state, action: PayloadAction<ProductCart>) => {
            const found = state.cart.findIndex(item => item.id === action.payload.id);
            if (found !== -1) {
                state.cart[found].amount = state.cart[found].amount + action.payload.amount;
            } else {
                state.cart = [...state.cart, action.payload];
            }
            state.showCart = true;
        },
        remove_from_cart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        empty_cart: (state) => {
            state.cart = [];
        },
        show_cart: (state, action: PayloadAction<boolean>) => {
            state.showCart = action.payload;
        }
    }
});

export const {
    select_product,
    update_show_product,
    add_to_cart,
    remove_from_cart,
    empty_cart,
    show_cart
} = shopSlice.actions;
export const shopReducer = shopSlice.reducer;