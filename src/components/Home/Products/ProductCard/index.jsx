import React from "react";
import * as S from "./index.styled";
import BaseButton from "../../../defaultStyles/BaseButton";
import GetStarRating from "../../../Stars";

const ProductCard = ({ product }) => {
  return (
    <S.ProductCardContainer to={`/products/${product.id}`}>
      <S.PercentageOffContainer>
        {product.price !== product.discountedPrice && (
          <S.PercentageOff>
            {product.price !== product.discountedPrice &&
              Math.trunc(
                ((product.price - product.discountedPrice) /
                  product.discountedPrice) *
                  100
              )}
            {product.price !== product.discountedPrice && "%"}
          </S.PercentageOff>
        )}
      </S.PercentageOffContainer>

      <h2>{product.title}</h2>
      <S.ProductImageSmall src={product.imageUrl} alt={product.title} />
      <S.RatingContainer>
        <p>{GetStarRating(product.rating)}</p>
      </S.RatingContainer>
      <S.ProductCardInfoContainer>
        <p>{product.discountedPrice} NOK</p>
        {product.price !== product.discountedPrice && (
          <S.OldPrice>{product.price} NOK</S.OldPrice>
        )}
      </S.ProductCardInfoContainer>
      <S.ButtonContainer>
        <BaseButton>Show</BaseButton>
      </S.ButtonContainer>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
