import styled from 'styled-components';

const StyledSearchForm = styled.form`
    display: flex;
    justify-content: center;

    @media (min-width: 940px) {
        justify-content: right;
    }

    input {
        width: 100%;
        max-width: 245px;
        height: 40px;
        margin: auto 50px;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        padding: 0px 10px;
        outline-color: ${(props) => props.theme.color.accentOne};
    }
`;

export default StyledSearchForm;