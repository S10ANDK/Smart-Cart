import React, { useEffect, useState } from "react";

const API_URL = 'https://api.noroff.dev/api/v1/online-shop';

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
        return <div>{products.map((product) => (
            <>
            <h3>{product.title}</h3>
            
            <img src={product.imageUrl} alt={product.title} />
            </>
        ))}</div>
    }

    return null
}

export default ProductsDisplayed;