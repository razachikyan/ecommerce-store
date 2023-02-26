import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export function Burger() {
    const hovered = useSelector<RootState, boolean>(store => store.header.categories.hovered);

    const color = hovered ? "#400E04" : "#FFF";
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35px" height="35px" viewBox="0 0 24 24" version="1.1">
                <title>Bento-Menu</title>
                <g id="Bento-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="Container" x="0" y="0" width="24" height="24"></rect>
                    <rect id="shape-1" fill={color} x="16" y="4" width="4" height="4" rx="1"></rect>
                    <rect id="shape-2" fill={color} x="10" y="4" width="4" height="4" rx="1"></rect>
                    <rect id="shape-3" fill={color} x="16" y="10" width="4" height="4" rx="1"></rect>
                    <rect id="shape-4" fill={color} x="10" y="10" width="4" height="4" rx="1"></rect>
                    <rect id="shape-5" fill={color} x="16" y="16" width="4" height="4" rx="1"></rect>
                    <rect id="shape-6" fill={color} x="10" y="16" width="4" height="4" rx="1"></rect>
                    <rect id="shape-7" fill={color} x="4" y="4" width="4" height="4" rx="1"></rect>
                    <rect id="shape-8" fill={color} x="4" y="10" width="4" height="4" rx="1"></rect>
                    <rect id="shape-9" fill={color} x="4" y="16" width="4" height="4" rx="1"></rect>
                </g>
            </svg></>
    )
}