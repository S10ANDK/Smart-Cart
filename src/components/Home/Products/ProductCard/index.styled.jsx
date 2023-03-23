import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: auto;
`;

export const ProductImageSmall = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`;