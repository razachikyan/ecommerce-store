import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";

export type categoriesState = {
    hovered: boolean;
    isOpenCategories: boolean;
    categories: string[];
}
export const SET_CATEGORIES = "SET_CATEGORIES";
export type setCategoriesAction = {
    type: typeof SET_CATEGORIES,
    categories: string[];
}
export const setCategories: ActionCreator<setCategoriesAction> = (categories) => ({
    type: SET_CATEGORIES,
    categories
})


//
export const SET_CATEGORY_HOVER = "SET_CATEGORY_HOVER";
export type setCategoryHoverAction = {
    type: typeof SET_CATEGORY_HOVER,
    hovered: boolean,
}

export const setCategoryHover: ActionCreator<setCategoryHoverAction> = (hovered) => {
    return {
        type: SET_CATEGORY_HOVER,
        hovered
    }
}

export const setCategoryHoverAsync = (hovered: boolean): ThunkAction<void, categoriesState, unknown, Action<string>> => async (dispatch) => {
    setTimeout(() => (dispatch(setCategoryHover(hovered))), 50);
}
export const SET_CATEGORY_OPENED = "SET_CATEGORY_OPENED";
export type setCategoryOpenedAction = {
    type: typeof SET_CATEGORY_OPENED,
    isOpenCategories: boolean,
}
export const setCategoryOpened: ActionCreator<setCategoryOpenedAction> = (isOpenCategories) => {
    return {
        type: SET_CATEGORY_OPENED,
        isOpenCategories
    }
}

export const setCategoriesAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products/categories").then(res => res.data);
    dispatch(setCategories(response));
}