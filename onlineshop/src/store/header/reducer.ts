import { Reducer } from "react";
import { headerState } from "./actions";
import { SET_CATEGORIES, SET_CATEGORY_HOVER, SET_CATEGORY_OPENED } from "./categories/actions";
import { categoriesAction, categoriesReducer } from "./categories/reducer";
import { SET_OPEN_SEARCH } from "./search/actions";
import { SearchAction, searchReducer } from "./search/reducer";

export type headerAction =
    categoriesAction |
    SearchAction;

export const headerReducer: Reducer<headerState, headerAction> = (state, action) => {
    switch (action.type) {
        case SET_CATEGORY_HOVER:
        case SET_CATEGORY_OPENED:
        case SET_CATEGORIES:
            return {
                ...state,
                categories: categoriesReducer(state.categories, action)
            }
        case SET_OPEN_SEARCH:
            return {
                ...state,
                search: searchReducer(state.search, action)
            }
        default:
            return state;
    }
}