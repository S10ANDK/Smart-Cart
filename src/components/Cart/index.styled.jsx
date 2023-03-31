import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CheckoutButton = styled(Link)`
  background: ${(props) => props.theme.color.accentThree};
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
`;
