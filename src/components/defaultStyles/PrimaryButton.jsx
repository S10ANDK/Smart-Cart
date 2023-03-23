import styled from "styled-components";
import BaseButton from "./Buttons";

const PrimaryButton = styled(BaseButton)`
    background: ${(props) => props.theme.color.accentOne};
`;

export default PrimaryButton