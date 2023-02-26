import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductState, setdescriped } from "../../../store/product/actions";
import { RootState } from "../../../store/store";
import { Product } from "../Product/Product";

export function ProductContainer({ id }: { id: string }) {
    const products = useSelector<RootState, ProductState[]>(store => store.products.products);
    const [product] = products.filter((product) => product.id === id);
    const btnName = product.descriped ? "less" : "more";
    const dispatch = useDispatch();
    const description = product.descriped ? product.description : product.description.substring(0, 15);
    return (
        <Product description={description} btnName={btnName} product={product} handleClick={() => {
            dispatch(setdescriped(!product.descriped, id));
        }} />
    )
}

