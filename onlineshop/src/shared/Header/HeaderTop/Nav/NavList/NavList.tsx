import React from "react";
import { NavItem } from "./NavItem/NavItem";
import "./navlist.css";

export function NavList() {
    return (
        <ul className="nav__list">
            <NavItem name="Products" />
            <span className="vertical__line"></span>
            <NavItem name="Sign Up" />
            <span className="vertical__line"></span>
            <NavItem name="Filter" />
            <span className="vertical__line"></span>
            <NavItem name="Carts" />
        </ul>
    )
}