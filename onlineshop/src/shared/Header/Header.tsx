import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./header.css"
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import { LeftColumnContainer } from "./LeftClumnContainer/LeftColumnContainer";

export function Header() {
    const isOpenCategories = useSelector<RootState, boolean>(store => store.header.categories.isOpenCategories);
    return (
        <header className="header">
            {isOpenCategories && <LeftColumnContainer />}
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
}