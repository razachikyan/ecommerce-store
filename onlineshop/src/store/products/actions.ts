import axios from "axios"
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { ProductState } from "../product/actions";

export interface IProductsState {
    products: ProductState[],
    loading?: boolean
}

export const SET_LOADING = "SET_LOADING";
export type setLoadingAction = {
    type: typeof SET_LOADING,
    loading: boolean
}

export const setLoading: ActionCreator<setLoadingAction> = (loading) => {
    return {
        type: SET_LOADING,
        loading
    }
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
    dispatch(setLoading(true));
    const response = await axios.get<ProductState[]>("https://fakestoreapi.com/products").then(res => res.data)
    dispatch(setLoading(false));
    dispatch(setProducts({ products: response }));
}

//https://fakestoreapi.com/products/categories