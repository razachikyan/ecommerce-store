import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { ColumnItem } from "./ColumnItem/ColumnItem";
import "./columnlist.css";

export function ColumnList() {
    const categories = useSelector<RootState, string[]>(store => store.header.categories.categories);
    return (
        <ul className="leftColumn__list">
            {
                categories.map(category => <ColumnItem name={category} />)
            }
        </ul>
    )
}