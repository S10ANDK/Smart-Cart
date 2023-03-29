import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import Div from '../defaultStyles/Div';
import LoadingIndicator from '../defaultStyles/LoadingIndicator';
import * as S from './index.styled';
import GetStarRating from '../Stars';

function GetIndividualProduct() {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getProduct(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const results = await response.json();
        setProduct(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct(`${API_URL}/${id}`);
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  if (product.length <= 0) {
    return <div>No products to show.</div>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <S.IndividualProductContainer>
        <S.TagsAndImageContainer>
          <S.TagContainer>
            {product.tags.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </S.TagContainer>
          <S.ProductImageContainer>
            <S.ProductImage src={product.imageUrl} alt={product.title} />
          </S.ProductImageContainer>
        </S.TagsAndImageContainer>
        <S.ProductInformationContainer>
          <S.PercentageAndOverAllRatingContainer>
            <S.OverallRatingContainer>
              <p>
                {GetStarRating(product.rating)}
                {product.rating > 0 && <span>({product.rating}/5)</span>}
              </p>
            </S.OverallRatingContainer>
            <S.ProductPercentageOffContainer>
              {product.price !== product.discountedPrice && (
                <S.ProductPercentageOff>
                  {product.price !== product.discountedPrice &&
                    Math.trunc(
                      ((product.price - product.discountedPrice) /
                        product.discountedPrice) *
                        100
                    )}
                  {product.price !== product.discountedPrice && '% DISCOUNT'}
                </S.ProductPercentageOff>
              )}
            </S.ProductPercentageOffContainer>
          </S.PercentageAndOverAllRatingContainer>
          <S.PriceContainer>
            <S.ProductPrice>{product.discountedPrice} NOK</S.ProductPrice>
            {product.price !== product.discountedPrice && (
              <S.ProductOldPrice>
                Before: <span>{product.price} NOK</span>
              </S.ProductOldPrice>
            )}
          </S.PriceContainer>
          <S.Heading>Description</S.Heading>
          <S.DescriptionBody>{product.description}</S.DescriptionBody>
          <S.AddToCartContainer>
            <S.AddToCartButton>Add to Cart</S.AddToCartButton>
          </S.AddToCartContainer>
        </S.ProductInformationContainer>
        <S.ProductReviewsContainer>
          {product.reviews.length > 0 && <S.Heading>User Reviews</S.Heading>}
          {product.reviews.map((review) => (
            <S.ReviewContainer key={review.id}>
              <S.ReviewerNameAndRatingContainer>
                <S.ReviewerName>{review.username}</S.ReviewerName>
                <S.ReviewRating>
                  {GetStarRating(review.rating)}
                  {product.rating > 0 && <span>({review.rating}/5)</span>}
                </S.ReviewRating>
              </S.ReviewerNameAndRatingContainer>
              <S.ReviewBody>{review.description}</S.ReviewBody>
            </S.ReviewContainer>
          ))}
        </S.ProductReviewsContainer>
      </S.IndividualProductContainer>
    </>
  );
}

function IndividualProduct() {
  return (
    <Div>
      <GetIndividualProduct />
    </Div>
  );
}

export default IndividualProduct;
