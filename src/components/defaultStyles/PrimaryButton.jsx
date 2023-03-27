import styled from "styled-components";
import BaseButton from "./BaseButton";

const PrimaryButton = styled(BaseButton)`
  background: ${(props) => props.theme.color.accentOne};
`;

export default PrimaryButton;
