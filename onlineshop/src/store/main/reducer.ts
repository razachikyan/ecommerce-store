import { Reducer } from "react";
import { AnyAction } from "redux";
import { MainState } from "./actions";

export type mainAtcions = AnyAction;

export const mainReducer: Reducer<MainState, mainAtcions> = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}