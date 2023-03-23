import styled from 'styled-components';

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
        padding-left: 8px;
        outline-color: ${(props) => props.theme.color.accentOne};
    }

    input {
        height: 40px;
    }

    textarea {
        padding: 8px;
    }
`; 

export const SubmitFormButton = styled.input`
    background: ${(props) => props.theme.color.accentOne};
    color: ${(props) => props.theme.color.white};
    margin: 10px 0px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    :hover {
        background: ${(props) => props.theme.color.secondary};
    }
`; 