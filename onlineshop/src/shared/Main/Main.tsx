import React from "react";
import "./main.css"

interface IMainProps {
    children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
    return (
        <main className="main">
            {children}
        </main>
    )
}