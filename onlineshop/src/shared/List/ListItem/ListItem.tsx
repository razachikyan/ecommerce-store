import React from "react";

interface IListItemProps {
    className: string;
    children: React.ReactNode | string;
}

export function ListItem({ className, children }: IListItemProps) {
    return (
        <li className={className}>
            {children}
        </li>
    )
}