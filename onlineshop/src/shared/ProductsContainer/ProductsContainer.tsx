import React from "react";
import { useSelector } from "react-redux";
import { ProductState } from "../../store/product/actions";
import { IProductsState } from "../../store/products/actions";
import { RootState } from "../../store/store";
import { Products } from "../Products/Products";


export function ProductsContainer() {
    const { products } = useSelector<RootState, IProductsState>(store => store.products);
    const subProds: Array<Array<ProductState>> = [];
    for (let index = 0; index < products.length; ++index) {
        if (4 * subProds.length <= index) {
            subProds.push([]);
        }
        subProds[subProds.length - 1].push(products[index]);
    }
    return (
        <Products subProds={subProds} />
    )
}
