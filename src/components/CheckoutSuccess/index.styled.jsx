import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SuccessContainer = styled.div`
  text-align: center;
  margin-top: 120px;
`;

export const SuccessMessage = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.accentTwo};

  span {
    color: ${(props) => props.theme.color.black};
    font-weight: 400;
    margin-top: 15px;
    font-size: 1.1rem;
    display: block;
  }
`;

export const ContinueShoppingLink = styled(Link)`
  display: block;
  text-align: center;
  width: 170px;
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white} !important;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 50px auto;
  transition: 0.3s ease-in-out;

  :hover {
    background: ${(props) => props.theme.color.accentTwo};
  }
`;
