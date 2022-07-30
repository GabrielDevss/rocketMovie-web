import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 4.8rem;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.background_900};
  border-radius: 1rem;

  padding: 0 3.2rem;
`;