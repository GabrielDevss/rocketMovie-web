import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

export function ButtonText({ ...rest }) {
  return (
    <Container {...rest}>
      <FiArrowLeft size={20} />
      <span>Voltar</span>
    </Container>
  );
}
