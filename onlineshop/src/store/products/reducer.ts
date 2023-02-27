import { Reducer } from "react";
import { setdescripedAction, SET_DESCRIPED } from "../product/actions";
import { productReducer } from "../product/reducer";
import { IProductsState, setLoadingAction, setProductsAction, SET_LOADING, SET_PRODUCTS } from "./actions";

export type productsAction = setProductsAction | setdescripedAction | setLoadingAction;

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
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}