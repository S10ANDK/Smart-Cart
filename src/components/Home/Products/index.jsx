import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants/urls";
import * as S from "./index.styled"
import ProductCard from "./ProductCard";

function ProductsDisplayed() {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        async function getProducts(url) {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                const results = await response.json();
                setProducts(results);
                // console.log(products);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts(API_URL);
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>There was an error.</div>
    }

    if (products.length <= 0) {
        return <div>No products to show.</div>
    }

    if (products.length > 0) {
        return <>
                <S.productsContainer>{products.map((product) => (
                    <ProductCard product={product} key={product.id} to={`/products/${product.id}`}/>
                    ))}
                </S.productsContainer>
            </>
    }

    return null
}

export default ProductsDisplayed;