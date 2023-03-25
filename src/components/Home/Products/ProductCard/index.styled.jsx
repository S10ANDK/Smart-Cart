import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: auto;
    border: 1px solid #bdbdbd; 
    border-radius: 10px;
    transition: 0.4s ease-in-out;
    animation: product-fade-effect ease 1.2s forwards;

    :hover {
        transform: translateX(5px) translateY(-7px);
        box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 0.03);
    }

    @keyframes product-fade-effect {
        0% { opacity: 0; }
        100% { opacity: 1; }
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
    border-radius: 100px;
`;

export const ProductImageSmall = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`;

export const RatingContainer = styled.div`
    width: 250px;
    text-align: left;
    margin-top: 20px;
    padding-left: 5px;

    span {
        font-size: 1.1rem;
        margin-left: 10px;
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