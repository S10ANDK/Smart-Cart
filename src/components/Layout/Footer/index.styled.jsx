import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 120px;
  display: flex;
  bottom: 0;
  height: 200px;
  width: 100%;
  background: ${(props) => props.theme.color.secondary};

  p {
    font-family: Montserrat, sans-serif;
    color: ${(props) => props.theme.color.white};
    text-align: center;
  }

  p span {
    display: block;
    margin-top: 10px;
  }
`;

export default StyledFooter;
