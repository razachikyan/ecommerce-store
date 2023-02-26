import { Reducer } from "react";
import { categoriesState, setCategoriesAction, setCategoryHoverAction, setCategoryOpenedAction, SET_CATEGORIES, SET_CATEGORY_HOVER, SET_CATEGORY_OPENED } from "./actions";

export type categoriesAction =
    setCategoryHoverAction |
    setCategoryOpenedAction |
    setCategoriesAction;

export const categoriesReducer: Reducer<categoriesState, categoriesAction> = (state, action) => {
    switch (action.type) {
        case SET_CATEGORY_HOVER:
            return {
                ...state,
                hovered: action.hovered
            }
        case SET_CATEGORY_OPENED:
            return {
                ...state,
                isOpenCategories: action.isOpenCategories
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state;
    }
}