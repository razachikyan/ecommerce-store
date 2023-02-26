import React from "react";
import { ProductState } from "../../../store/product/actions";
import "./product.css";

interface IProductProps {
    product: ProductState;
    btnName: string;
    description: string;
    handleClick: () => void;
}

export function Product({ product, btnName, handleClick, description }: IProductProps) {

    return (
        <li className="product" style={{ backgroundImage: `url("${product.image}")` }}>
            <div className="product__text">
                <h2 className="product__title">{product.title}</h2>
                <span className="product__category">{product.category}</span>
                <div className="product__about">
                    <p className="product__description">{description}</p>
                    <button onClick={handleClick} className="descr__btn">{btnName}</button>
                </div>
                <span className="product__price">{product.price}$</span>
            </div>
        </li>
    )
}