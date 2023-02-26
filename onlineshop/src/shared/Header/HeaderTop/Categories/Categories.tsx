import React from "react";
import "./categories.css"
import { Burger } from "../../../icons/Burger/Burger";

interface ICategoriesProps {
    handleEnter: () => void;
    handleLeav: () => void;
    handleClick: () => void;
}

export function Categories({ handleEnter, handleLeav, handleClick }: ICategoriesProps) {
    return (
        <div className="header__categories"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeav}
            onClick={handleClick}>
            <Burger />
            <span className="categories__title">Categories</span>
        </div>
    )
}