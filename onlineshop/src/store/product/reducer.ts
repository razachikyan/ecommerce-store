import { Reducer } from "react";
import { AnyAction } from "redux";
import { ProductState, setdescripedAction, SET_DESCRIPED } from "./actions";

export type productAction = setdescripedAction;

export const productReducer: Reducer<ProductState, AnyAction> = (state, action) => {
    switch (action.type) {
        case SET_DESCRIPED:
            return {
                ...state,
                descriped: action.descriped
            }
        default:
            return state
    }
}