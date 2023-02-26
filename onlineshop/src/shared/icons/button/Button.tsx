import React from "react";

interface IButtonProps {
    name: string;
    className: string;
    handleClick: () => void;
}

export function Button({ name, className, handleClick }: IButtonProps) {
    return (
        <button className={className} onClick={handleClick}>{name}</button>
    )
}