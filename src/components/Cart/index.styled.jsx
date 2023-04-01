import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const ProductsList = styled.div`
  margin: auto auto 20px auto;
  width: 100%;
  max-width: 500px;
`;

export const Message = styled.p`
  /* background: ${(props) => props.theme.color.accentTwo}; */
  background: #636363;
  color: ${(props) => props.theme.color.white};
  width: 200px;
  font-weight: 600;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
`;

export const ClearCartButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const ClearCartButton = styled.button`
  background: ${(props) => props.theme.color.accentTwo};
  color: ${(props) => props.theme.color.white};
  font-size: 1rem;
  padding: 5px 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 20px 30px;
  border: 1px solid #7d7d7d;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const ProductHeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductHeading = styled.h2`
  font-size: 1rem;
  text-align: left;

  @media (min-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-right: 0;
  }
`;

export const RemoveButton = styled.button`
  background: #5f5f5f;
  color: ${(props) => props.theme.color.white};
  margin: 20px auto;
  margin-right: 0;
  width: 22px;
  cursor: pointer;
`;

export const Price = styled.p`
  font-weight: 600;
`;

export const TotalContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: auto;

  @media (min-width: 1000px) {
    margin: 55px auto auto;
  }
`;

export const TotalPrice = styled.p`
  text-align: center;
  border-bottom: 1px solid #333;
  max-width: 300px;
  margin-top: 40px;
  padding-bottom: 20px;

  span {
    display: block;
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const CheckoutButtonContainer = styled.div`
  margin: 50px auto;
  text-align: center;
`;

export const CheckoutButton = styled(Link)`
  background: ${(props) => props.theme.color.accentThree};
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 30px;
  transition: 0.3s ease-in-out;

  :hover {
    background: #a8c485;
  }
`;
