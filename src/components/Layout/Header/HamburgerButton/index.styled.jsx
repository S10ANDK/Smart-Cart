import styled from "styled-components";

const HamburgerIcon = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 15px;
    left: 20px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    div {
        background-color: #333;
        border-radius: 10px;
        width: 2rem;
        height: 0.24rem;
        transform-origin: 1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ active }) => active ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${({ active }) => active ? 0 : 1 }
        }

        &:nth-child(3) {
            transform: ${({ active }) => active ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 1000px) {
        display: none;
    }
`;

export default HamburgerIcon;