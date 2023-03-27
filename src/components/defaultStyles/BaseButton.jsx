import styled from 'styled-components';

const BaseButton = styled.button`
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  font-weight: 600;
  font-size: 1rem;
  width: 250px;
  padding: 10px 20px;
  margin: 20px auto;
  border: 0;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  text-align: center;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.color.accentTwo};
  }
`;

export default BaseButton;
