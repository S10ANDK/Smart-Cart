import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: auto;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  transition: 0.2s ease-in-out;

  :hover {
    border: 1px solid #8c8c8c;
  }
`;

export const PercentageOffContainer = styled.div`
  position: absolute;
  transform: translateX(120px) translateY(-235px);
`;

export const PercentageOff = styled.p`
  text-align: center;
  font-size: 1rem;
  background: red;
  color: ${(props) => props.theme.color.white};
  padding: 10px;
  border-radius: 5px;
`;

export const ProductImageSmall = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const RatingContainer = styled.div`
  width: 250px;
  height: 20px;
  text-align: left;
  margin-top: 20px;
  padding-left: 5px;

  p {
    font-style: italic;
  }
`;

export const ProductCardInfoContainer = styled.div`
  width: 250px;
  margin-top: 20px;
  padding-left: 5px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  text-align: left;

  p {
    text-align: left;
    width: 250px;
    margin: 0px;
  }

  @media (min-width: 1000px) {
    text-align: right;
    flex-direction: row;
  }
`;

export const OldPrice = styled.p`
  text-decoration: line-through;
  text-decoration-thickness: 0.1rem;
  text-decoration-color: red;
`;

export const ButtonContainer = styled.div`
  width: 250px;
  text-align: center;
  display: flex;
  justify-content: right;
  align-items: end;
  align-content: flex-end;

  @media (min-width: 1000px) {
    text-align: right;
  }
`;
