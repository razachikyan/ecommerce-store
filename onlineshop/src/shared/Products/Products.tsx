import { nanoid } from "nanoid";
import React from "react";
import { ProductState } from "../../store/product/actions";
import { ProductSection } from "../ProductSection/ProductSection";
import "./products.css";

interface IProductsProps {
    subProds: Array<Array<ProductState>>;
}

export function Products({ subProds }: IProductsProps) {

    return (
        <ul className="products">
            {
                subProds.map(prods => {
                    return (
                        <li className="products__row" key={nanoid()}>
                            <ProductSection products={prods} />
                        </li>
                    )
                })
            }
        </ul>
    )
}