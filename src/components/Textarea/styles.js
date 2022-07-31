import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.colors.background_800};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;

  resize: none;
  margin: 4rem 0;

  padding: 1.9rem;
`;