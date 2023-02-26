import React from "react";
import { Home } from "../Header/HeaderBottom/Home/Home";

export function HomePage() {
    return (
        <section className="home__page">
            <div className="container">
                <Home handleClick={() => { }} />
            </div>
        </section>
    )
}