import styled from "styled-components";

const BaseButton = styled.button`
    background: ${(props) => props.theme.color.secondary};
    color: white;
    width: 200px;
    padding: 10px 20px;
    border: 0;
    border-radius: 20px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    :hover {
        background: orange;
    };
    
    @media (min-width: 768px) {
        width: 100px;
    };

`;

export default BaseButton;