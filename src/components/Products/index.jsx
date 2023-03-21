import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";



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
                console.log(products);
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
        return <div style={{ margin: 'auto', width: '400px' }}>{products.map((product) => (
            <>
            <div key={product.id}>
                <h3>{product.title}</h3>
                <div>id: {product.id}</div>
                <img style={{ width: '400px', height: '400px', objectFit: 'cover' }} src={product.imageUrl} alt={product.title} />
                <p>Price: {product.price}</p>
            </div>

            </>
        ))}</div>
    }

    return null
}

export default ProductsDisplayed;