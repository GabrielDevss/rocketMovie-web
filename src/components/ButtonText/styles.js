import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  color: ${({ theme }) => theme.colors.violet};
  margin-top: 4rem;
`