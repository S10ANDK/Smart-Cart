import React from "react";
import * as S from "./index.styled"

const ProductCard = ({product}) => {
    return (
        <S.ProductCardContainer key={product.id} to={`/products/${product.id}`}>
                        <h2>{product.title}</h2>
                        <S.ProductImageSmall src={product.imageUrl} alt={product.title} />
                        <p>Rating: {product.rating}</p>
                        <p>{product.price}</p>
                        <p>{product.discountedPrice}</p>
        </S.ProductCardContainer>
    )
}

export default ProductCard;