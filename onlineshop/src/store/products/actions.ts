import axios from "axios"
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { ProductState } from "../product/actions";

export interface IProductsState {
    products: ProductState[],
}

export const SET_PRODUCTS = "SET_PRODUCTS";
export type setProductsAction = {
    type: typeof SET_PRODUCTS,
    products: IProductsState
}
export const setProducts: ActionCreator<setProductsAction> = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export const fetchProducts = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    const response = await axios.get<ProductState[]>("https://fakestoreapi.com/products").then(res => res.data);
    dispatch(setProducts({ products: response }));
}

//https://fakestoreapi.com/products/categories