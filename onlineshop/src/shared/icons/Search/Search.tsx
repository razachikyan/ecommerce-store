import React from "react";

interface ISearchProps {
    handleClick: () => void;
}

export function Search({ handleClick }: ISearchProps) {
    return (
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                <path d="M16.8794 16.2553L21.1488 20.5247" stroke="#400E04" strokeWidth="1.70247" strokeLinecap="round" />
                <path d="M10.7802 2.83722C15.1593 2.83722 18.7092 6.38712 18.7092 10.7661C18.7092 15.1452 15.1593 18.6951 10.7802 18.6951C6.40122 18.6951 2.85132 15.1452 2.85132 10.7661C2.85132 6.38712 6.40122 2.83722 10.7802 2.83722Z" stroke="#fff" strokeWidth="1.70247" />
            </svg>
        </button>
    )
}