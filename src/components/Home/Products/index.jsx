import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants/urls";
import { Link } from "react-router-dom";
import * as S from "./index.styled"

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
                    <Link key={product.id} to={`/products/${product.id}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '300px', margin: 'auto' }}>
                        <h2>{product.title}</h2>
                        <img style={{ width: '250px', height: '250px', objectFit: 'cover' }} src={product.imageUrl} alt={product.title} />
                        <p>Rating: {product.rating}</p>
                        <p>{product.price}</p>
                        <p>{product.discountedPrice}</p>
                    </Link>
                ))}
                </S.productsContainer>
            </>
    }

    return null
}

export default ProductsDisplayed;