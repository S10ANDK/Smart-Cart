import styled from 'styled-components';
import Div from '../defaultStyles/Div';
import * as S from '../Home/Products/ProductCard/index.styled';

export const IndividualProductContainer = styled(Div)`
  display: grid;
  grid-template-rows: 0.3fr 0.6fr 0.5fr;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
    grid-template-rows: 0.5fr 0.3fr;
    grid-template-columns: 1fr 1fr;
    /* max-height: 500px; */
  }
`;

export const ProductImage = styled.img`
  margin: auto;
  max-width: 87vw;
  object-fit: cover;

  @media (min-width: 1000px) {
    grid-row-start: 2;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const ProductInformationContainer = styled.div`
  margin-top: 20px;

  @media (min-width: 1000px) {
    grid-row-start: 2;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
  }
`;

export const ProductReviewsContainer = styled.div`
  @media (min-width: 1000px) {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
  }
`;

export const ProductOldPrice = styled(S.OldPrice)`
  font-size: 0.9rem;
  margin: auto;

  span {
    font-size: 1rem;
  }
`;

export const PriceContainer = styled.div`
  padding-bottom: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  max-width: 600px;
  margin: auto;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  margin: 10px 10px;
`;

export const ProductPercentageOffContainer = styled(S.PercentageOffContainer)`
  position: relative;
  max-width: 160px;
  transform: translateY(0px) translateX(0);
`;

export const ProductPercentageOff = styled(S.PercentageOff)`
  font-size: 1rem;
  border-radius: 2px;
  padding: 5px;
`;
