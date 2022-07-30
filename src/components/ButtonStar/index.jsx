import { FiStar } from "react-icons/fi";

import { Container } from './styles';

export function ButtonStar({ ...rest}) {
  return (
    <Container {...rest}>
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
  </Container>
  )
}