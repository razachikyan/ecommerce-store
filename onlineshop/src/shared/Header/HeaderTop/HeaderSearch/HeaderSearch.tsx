import React from "react";
import "./headersearch.css"
import { Search } from "../../../icons/Search/Search";
import { useDispatch } from "react-redux";
import { setOpenSearch } from "../../../../store/header/search/actions";
import { Close } from "../../../icons/Close/Close";

interface IHeaderSearchProps {
    isOpen: boolean;
}

export function HeaderSearch({ isOpen }: IHeaderSearchProps) {
    const dispatch = useDispatch();
    return (
        <div className="header__search">
            {isOpen ?
                <div className="search__box">
                    <input type="text" placeholder="Product name" className="search__input" />
                    <Close handleClick={() => {
                        dispatch(setOpenSearch(false))
                    }} />
                    <div className="header__btn">
                        <Search handleClick={() => {
                            dispatch(setOpenSearch(true));
                        }} />
                    </div>
                </div> :
                <div className="header__btn">
                    <Search handleClick={() => {
                        dispatch(setOpenSearch(true));
                    }} />
                </div>
            }
        </div>
    )
}