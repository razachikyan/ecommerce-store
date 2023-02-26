import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { HeaderSearch } from "../HeaderSearch/HeaderSearch";

export function HeaderSearchContainer() {
    const isOpen = useSelector<RootState, boolean>(store => store.header.search.isOpen)
    return (
        <HeaderSearch isOpen={isOpen} />
    )
}