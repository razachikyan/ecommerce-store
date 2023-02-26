import { Reducer } from "react";
import { SearchState, setOpenSearchAction, SET_OPEN_SEARCH } from "./actions";

export type SearchAction = setOpenSearchAction;

export const searchReducer: Reducer<SearchState, SearchAction> = (state, action) => {
    switch (action.type) {
        case SET_OPEN_SEARCH:
            return {
                ...state,
                isOpen: action.isOpen
            }
        default:
            return state;
    }
}