import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants/urls";
import * as S from "./index.styled"
import ProductCard from "./ProductCard";
import LoadingIndicator from "../../defaultStyles/LoadingIndicator";
import StyledSearchForm from "../Search/index.styled";

const Search = () => {
    const [search, setSearch] = useState("");

    return <StyledSearchForm>
            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search"></input>
        </StyledSearchForm>
}

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
        return <LoadingIndicator />
    }

    if (isError) {
        return <div>There was an error.</div>
    }

    if (products.length <= 0) {
        return <div>No products to show.</div>
    }

    if (products.length > 0) {
        return <>
                <Search />
                <S.productsContainer>{products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))}
                </S.productsContainer>
            </>
    }

    return null
}

export default ProductsDisplayed;