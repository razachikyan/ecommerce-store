import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryOpened } from "../../../store/header/categories/actions";
import { LeftColumn } from "../LeftColumn/LeftColumn";

export function LeftColumnContainer() {
    const dispatch = useDispatch();
    return (
        <LeftColumn handleClick={() => {
            dispatch(setCategoryOpened(false));
        }} />
    )
}

