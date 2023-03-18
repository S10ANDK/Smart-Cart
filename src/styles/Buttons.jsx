import styled from "styled-components"

const BaseButton = styled.button`
    background: ${(props) => props.theme.color.secondary},
    padding: 10px 20px
`;

export default BaseButton;