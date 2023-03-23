import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import Div from "../defaultStyles/Div";
import PrimaryButton from "../styles/PrimaryButton";

function IndividualProduct() {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    let { id } = useParams();

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

        getProducts(`${API_URL}/${id}`);
    }, [id])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>There was an error.</div>
    }

    if (products.length <= 0) {
        return <div>No products to show.</div>
    }

    return  <Div>
                <h1>{products.title}</h1>
                <img src={products.imageUrl} alt={products.title} />
                <p>{products.description}</p>
                <p>Before: {products.price}</p>
                <p>Now: {products.discountedPrice}</p>
                <p>Rating: {products.rating}</p>
                <div>
                    <h3>Tags:</h3>
                    {products.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                    ))}
                </div>
                {products.reviews.map((review) => (
                <div key={review.id}>
                    <p>{review.username} - {review.rating} stars</p>
                    <p>{review.description}</p>
                </div>
                ))}
                <PrimaryButton>Add to Cart</PrimaryButton>
            </Div>

    // return null
}

export default IndividualProduct;