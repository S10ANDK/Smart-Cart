import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import Div from '../defaultStyles/Div';
import PrimaryButton from '../defaultStyles/PrimaryButton';
import LoadingIndicator from '../defaultStyles/LoadingIndicator';
import * as S from './index.styled';

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
        // console.log(products);
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
        <S.ProductImage src={product.imageUrl} alt={product.title} />
        <S.ProductInformationContainer>
          {product.price !== product.discountedPrice && (
            <S.ProductOldPrice>
              Before: <span>{product.price}</span> NOK
            </S.ProductOldPrice>
          )}
          <S.PriceContainer>
            <S.ProductPrice>{product.discountedPrice} NOK</S.ProductPrice>
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
          </S.PriceContainer>
          <p>Rating: {product.rating}</p>
          <p>{product.description}</p>
          <div>
            <h3>Tags:</h3>
            {product.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <p>
                {review.username} - {review.rating} stars
              </p>
              <p>{review.description}</p>
            </div>
          ))}
          <PrimaryButton>Add to Cart</PrimaryButton>
        </S.ProductInformationContainer>
        <S.ProductReviewsContainer>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <p>
                {review.username} - {review.rating} stars
              </p>
              <p>{review.description}</p>
            </div>
          ))}
        </S.ProductReviewsContainer>
      </S.IndividualProductContainer>
    </>
  );

  // return null
}

function IndividualProduct() {
  return (
    <Div>
      <GetIndividualProduct />
    </Div>
  );
}

export default IndividualProduct;
