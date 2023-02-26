import React from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { setCategoryHoverAsync, setCategoryOpened } from "../../../../store/header/categories/actions";
import { Categories } from "../Categories/Categories";

export function CategoriesContainer() {
    const dispatch = useDispatch();
    return (
        <Categories
            handleEnter={() => {
                dispatch(setCategoryHoverAsync(true) as unknown as AnyAction);
            }}
            handleLeav={() => {
                dispatch(setCategoryHoverAsync(false) as unknown as AnyAction);
            }}
            handleClick={() => {
                dispatch(setCategoryOpened(true));
            }}
        />
    )
}



