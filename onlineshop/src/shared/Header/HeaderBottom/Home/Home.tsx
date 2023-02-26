import React from "react";
import "./home.css"
import { Link } from "react-router-dom";

interface IHomeProps {
    handleClick: () => void;
}

export function Home({ handleClick }: IHomeProps) {
    return (
        <Link to="/home" onClick={handleClick}>
            <span className="home__title">Celline</span>
        </Link>
    )
}