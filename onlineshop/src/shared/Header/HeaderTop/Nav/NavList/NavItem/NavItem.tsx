import React from "react";
import { Link } from "react-router-dom";
import "./navitem.css";

interface INavItemProps {
    name: string;
}

export function NavItem({ name }: INavItemProps) {
    return (
        <Link to="/products" className="nav__item">{name}</Link >
    )
}