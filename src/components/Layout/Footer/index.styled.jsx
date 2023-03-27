import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  bottom: 0;
  height: 200px;
  width: 100%;
  background: ${(props) => props.theme.color.secondary};

  p {
    color: ${(props) => props.theme.color.white};
    text-align: center;
  }
`;

export default StyledFooter;
