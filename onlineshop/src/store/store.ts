import { Reducer } from "redux";
import { headerState } from "./header/actions";
import { SET_CATEGORIES, SET_CATEGORY_HOVER, SET_CATEGORY_OPENED } from "./header/categories/actions";
import { headerAction, headerReducer } from "./header/reducer";
import { SET_OPEN_SEARCH } from "./header/search/actions";
import { MainState } from "./main/actions";
import { SET_DESCRIPED } from "./product/actions";
import { productAction } from "./product/reducer";
import { IProductsState, SET_LOADING, SET_PRODUCTS } from "./products/actions";
import { productsAction, productsReducer } from "./products/reducer";

export type RootState = {
    products: IProductsState,
    header: headerState,
    main: MainState
}

const initialState: RootState = {
    products: {
        products: [],
        loading: false
    },
    header: {
        categories: {
            hovered: false,
            isOpenCategories: false,
            categories: []
        },
        search: {
            isOpen: false
        }
    },
    main: {}
}

type Actions =
    productsAction |
    headerAction |
    productAction;

export const rootReducer: Reducer<RootState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
        case SET_DESCRIPED:
        case SET_LOADING:
            return {
                ...state,
                products: productsReducer(state.products, action)
            }
        case SET_CATEGORY_HOVER:
        case SET_CATEGORY_OPENED:
        case SET_OPEN_SEARCH:
        case SET_CATEGORIES:
            return {
                ...state,
                header: headerReducer(state.header, action)
            }
        default:
            return state;
    }
}