import React from "react";
import { Button } from "../../icons/button/Button";
import { ColumnList } from "./ColumnList/ColumnList";
import "./leftcolumn.css";

interface ILeftColumnProps {
    handleClick: () => void;
}

export function LeftColumn({ handleClick }: ILeftColumnProps) {
    return (
        <div className="leftColumn">
            <div className="leftColumn__box">
                <Button className="leftColumn__btn" name="close" handleClick={handleClick} />
                <ColumnList />
            </div>
        </div>
    )
}