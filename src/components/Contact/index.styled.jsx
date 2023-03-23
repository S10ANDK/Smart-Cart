import styled from 'styled-components';
import Div from '../defaultStyles/Div';

export const ContactDiv = styled(Div)`
    @media(min-width: 620px) {
        margin: auto;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 20px auto 0px;

    input,
    textarea {
        margin: 10px 0px;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        padding: 0px 10px;
        outline-color: ${(props) => props.theme.color.accentOne};
    }

    input {
        height: 40px;
    }

    textarea {
        padding: 10px;
    }
`; 

export const SubmitFormButton = styled.input`
    background: ${(props) => props.theme.color.accentOne};
    color: ${(props) => props.theme.color.white};
    font-weight: 600;
    margin: 10px 0px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    :hover {
        background: ${(props) => props.theme.color.secondary};
    }
`; 

export const FormErrorMessage = styled.p`
    text-align: left;
    color: #963a3a;
    margin: 0px 5px 10px;
`;