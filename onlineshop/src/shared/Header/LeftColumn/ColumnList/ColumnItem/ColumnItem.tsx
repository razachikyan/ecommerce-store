import React from "react";
import "./columnitem.css";
interface IColumnItemProps {
    name: string;
}

export function ColumnItem({ name }: IColumnItemProps) {
    return (
        <li className="leftColumn__item">
            {name[0].toUpperCase() + name.slice(1).toLowerCase()}
        </li>
    )
}