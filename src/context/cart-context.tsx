"use client";

import type { CartItem } from "@/lib/types";
import type { ReactNode } from "react";
import { createContext, useReducer, useEffect, useState } from "react";

type State = {
  cart: CartItem[];
  isCartOpen: boolean;
};

type Action =
  | { type: "ADD_TO_CART"; payload: { item: CartItem; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "CLOSE_CART" }
  | { type: "SET_CART"; payload: CartItem[] };

const initialState: State = {
  cart: [],
  isCartOpen: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { item, quantity } = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      let newCart: CartItem[];
      if (existingItem) {
        newCart = state.cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + quantity } : i
        );
      } else {
        newCart = [...state.cart, { ...item, qty: quantity }];
      }
      return { ...state, cart: newCart, isCartOpen: true };
    }
    case "REMOVE_FROM_CART": {
      const newCart = state.cart.filter((i) => i.id !== action.payload.id);
      return { ...state, cart: newCart };
    }
    case "UPDATE_QUANTITY": {
        const newCart = state.cart.map((i) =>
            i.id === action.payload.id ? { ...i, qty: action.payload.quantity } : i
        ).filter(i => i.qty > 0);
        return { ...state, cart: newCart };
    }
    case "CLEAR_CART":
      return { ...state, cart: [], isCartOpen: false };
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "CLOSE_CART":
      return { ...state, isCartOpen: false };
    case "SET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const localCart = localStorage.getItem("ozniorCart");
      if (localCart) {
        dispatch({ type: "SET_CART", payload: JSON.parse(localCart) });
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("ozniorCart", JSON.stringify(state.cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage", error);
      }
    }
  }, [state.cart, isInitialized]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
