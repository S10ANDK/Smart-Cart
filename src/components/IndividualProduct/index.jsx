import React, { useEffect } from 'react';
import { API_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import Div from '../defaultStyles/Div';
import LoadingIndicator from '../defaultStyles/LoadingIndicator';
import * as S from './index.styled';
import GetStarRating from '../Stars';
import { useCart } from '../hooks/useCart';

function GetIndividualProduct() {
  const { products, fetchProducts, isLoading, hasErrors } = useCart();

  let { id } = useParams();

  useEffect(() => {
    fetchProducts(`${API_URL}/${id}`);
  }, []);

  const { addToCart } = useCart();
  const addToCarty = () => {
    addToCart(products);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (hasErrors) {
    return <div>There was an error.</div>;
  }

  // if (product.length <= 0) {
  //   return <div>No products to show.</div>;
  // }

  return (
    <>
      <h1>{products.title}</h1>
      <S.IndividualProductContainer>
        <S.TagsAndImageContainer>
          {products.tags && (
            <S.TagContainer>
              {products.tags.map((tag) => (
                <p key={tag}>#{tag}</p>
              ))}
            </S.TagContainer>
          )}
          {products.imageUrl && (
            <S.ProductImageContainer>
              <S.ProductImage src={products.imageUrl} alt={products.title} />
            </S.ProductImageContainer>
          )}
        </S.TagsAndImageContainer>
        <S.ProductInformationContainer>
          <S.PercentageAndOverAllRatingContainer>
            <S.OverallRatingContainer>
              <p>
                {GetStarRating(products.rating)}
                {products.rating > 0 && <span>({products.rating}/5)</span>}
              </p>
            </S.OverallRatingContainer>
            {products.price !== products.discountedPrice && (
              <S.ProductPercentageOffContainer>
                <S.ProductPercentageOff>
                  {Math.trunc(
                    ((products.price - products.discountedPrice) /
                      products.discountedPrice) *
                      100
                  )}
                  % DISCOUNT
                </S.ProductPercentageOff>
              </S.ProductPercentageOffContainer>
            )}
          </S.PercentageAndOverAllRatingContainer>
          <S.PriceContainer>
            <S.ProductPrice>{products.discountedPrice} NOK</S.ProductPrice>
            {products.price !== products.discountedPrice && (
              <S.ProductOldPrice>
                Before: <span>{products.price} NOK</span>
              </S.ProductOldPrice>
            )}
          </S.PriceContainer>
          <S.Heading>Description</S.Heading>
          <S.DescriptionBody>{products.description}</S.DescriptionBody>
          <S.AddToCartContainer>
            <S.AddToCartButton onClick={addToCarty}>
              Add to Cart
            </S.AddToCartButton>
          </S.AddToCartContainer>
        </S.ProductInformationContainer>
        {products.reviews && (
          <S.ProductReviewsContainer>
            {products.reviews.length > 0 && <S.Heading>User Reviews</S.Heading>}
            {products.reviews.map((review) => (
              <S.ReviewContainer key={review.id}>
                <S.ReviewerNameAndRatingContainer>
                  <S.ReviewerName>{review.username}</S.ReviewerName>
                  <S.ReviewRating>
                    {GetStarRating(review.rating)}
                    {review.rating > 0 && <span>({review.rating}/5)</span>}
                  </S.ReviewRating>
                </S.ReviewerNameAndRatingContainer>
                <S.ReviewBody>{review.description}</S.ReviewBody>
              </S.ReviewContainer>
            ))}
          </S.ProductReviewsContainer>
        )}
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
