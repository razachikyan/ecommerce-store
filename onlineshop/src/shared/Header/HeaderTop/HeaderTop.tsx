import React from "react";
import "./headertop.css";
import { CategoriesContainer } from "./Categories.container/CategoriesContainer";
import { HeaderSearchContainer } from "./HeaderSearchContainer/HeaderSearchContainer";
import { Nav } from "./Nav/Nav";

export function HeaderTop() {
    return (
        <div className="header__top container">
            <CategoriesContainer />
            <Nav />
            <HeaderSearchContainer />
        </div>
    )
}