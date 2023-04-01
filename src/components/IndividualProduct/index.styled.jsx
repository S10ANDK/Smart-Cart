import styled from 'styled-components';
import Div from '../defaultStyles/Div';
import PrimaryButton from '../defaultStyles/PrimaryButton';
import * as S from '../Home/Products/ProductCard/index.styled';

export const Heading = styled.h2`
  margin-top: 50px;
  text-align: left;
`;

export const IndividualProductContainer = styled(Div)`
  max-width: 600px;
  margin: auto;

  @media (min-width: 1000px) {
    max-width: 1000px;
    display: grid;
    column-gap: 20px;
    grid-template-columns: 1fr 0.8fr;
    grid-template-rows: 0.2fr 0.5fr;
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
    column-gap: 60px;
    grid-template-rows: 0.3fr 0.3fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export const TagsAndImageContainer = styled.div`
  display: block;
`;

export const TagContainer = styled.div`
  margin: 0px 10px 10px;
  p {
    display: inline;
    margin-right: 10px;
  }
`;

export const ProductImageContainer = styled.div`
  margin: auto;
  text-align: center;
`;

export const ProductImage = styled.img`
  margin: auto;
  width: 85vw;
  max-width: 600px;
  max-height: 600px;
  object-fit: cover;

  @media (min-width: 1000px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (min-width: 1400px) {
    max-width: 650px;
    max-height: 500px;
  }
`;

export const ProductInformationContainer = styled.div`
  margin: 20px 10px 0px;

  @media (min-width: 1000px) {
    margin-top: 30px;
  }
`;

export const PercentageAndOverAllRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const OverallRatingContainer = styled.div`
  display: inline;
  text-align: right;

  p span {
    margin-left: 8px;
  }
`;

export const ProductPercentageOffContainer = styled(S.PercentageOffContainer)`
  position: relative;
  max-width: 150px;
  transform: translateY(0px) translateX(0);
  grid-row: 1;
  text-align: right;
`;

export const ProductPercentageOff = styled(S.PercentageOff)`
  font-size: 1rem;
  border-radius: 2px;
  padding: 5px;
`;

export const PriceContainer = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const ProductPrice = styled.p`
  font-family: Cabin, sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0px;
`;

export const ProductOldPrice = styled(S.OldPrice)`
  font-size: 1rem;
  margin: auto 0px;
`;

export const DescriptionBody = styled.p`
  margin-left: 0;
`;

export const AddToCartContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: 1000px) {
    text-align: left;
  }
`;

export const AddToCartButton = styled(PrimaryButton)`
  width: 300px;
  border-radius: 5px;
  font-size: 1.2rem;

  @media (min-width: 450px) {
    width: 400px;
  }

  @media (min-width: 655px) {
    width: 600px;
  }

  @media (min-width: 1000px) {
    width: 200px;
  }
`;

export const ProductReviewsContainer = styled.div`
  margin: auto;
  width: 100%;
`;

export const ReviewContainer = styled.div`
  margin: 40px 0px;
  padding: 20px 0px;
  border-bottom: 2px solid ${(props) => props.theme.color.accentTwo};
`;

export const ReviewerNameAndRatingContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ReviewerName = styled.p`
  color: ${(props) => props.theme.color.accentTwo};
  font-weight: 500;
  text-align: left;
  margin-left: 0;
`;

export const ReviewRating = styled.p`
  margin-right: 0;

  span {
    padding-left: 10px;
  }
`;

export const ReviewBody = styled.p`
  margin-left: 0;
`;
