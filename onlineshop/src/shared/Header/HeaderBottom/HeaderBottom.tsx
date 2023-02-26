import React from "react";
import "./headerbottom.css";
import { HomeContainer } from "./HomeContainer/HomeContainer";

export function HeaderBottom() {
    return (
        <div className="header__bottom">
            <div className="container">
                <HomeContainer />
            </div>
        </div>
    )
}