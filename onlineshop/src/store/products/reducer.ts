import { Reducer } from "react";
import { setdescripedAction, SET_DESCRIPED } from "../product/actions";
import { productReducer } from "../product/reducer";
import { IProductsState, setProductsAction, SET_PRODUCTS } from "./actions";

type productsAction = setProductsAction | setdescripedAction;

export const productsReducer: Reducer<IProductsState, productsAction> = (state, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products.products
            }
        case SET_DESCRIPED:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.id) return productReducer(product, action);
                    return product
                })
            }
        default:
            return state;
    }
}