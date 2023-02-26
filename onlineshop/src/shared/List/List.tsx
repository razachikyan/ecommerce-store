import React from "react";

interface IListProps {
    className: string;
    children: React.ReactNode;
}

export function List({ className, children }: IListProps) {
    return (
        <li className={className}>
            {children}
        </li>
    )
}