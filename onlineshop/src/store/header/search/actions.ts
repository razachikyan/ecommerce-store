import { ActionCreator } from "redux";

export interface SearchState {
    isOpen: boolean
}

export const SET_OPEN_SEARCH = "SET_OPEN_SEARCH";
export type setOpenSearchAction = {
    type: typeof SET_OPEN_SEARCH,
    isOpen: boolean
}

export const setOpenSearch: ActionCreator<setOpenSearchAction> = (isOpen) => {
    return {
        type: SET_OPEN_SEARCH,
        isOpen
    }
}