import React from "react";
import { IProductsState } from "../../store/products/actions";
import { ProductContainer } from "./ProductContainer/ProductContainer";
import "./productsection.css";

export function ProductSection({ products }: IProductsState) {

    return (
        <section className="section">
            <div className="container">
                <ul className="section__list">
                    {
                        products.map(item => {
                            return <ProductContainer id={item.id} key={item.id} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}