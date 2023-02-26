import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryOpened } from "../../../../store/header/categories/actions";
import { setOpenSearch } from "../../../../store/header/search/actions";
import { Home } from "../Home/Home";

export function HomeContainer() {
    const dispatch = useDispatch();
    return (
        <Home handleClick={() => {
            dispatch(setCategoryOpened(false));
            dispatch(setOpenSearch(false));
        }} />

    )
}