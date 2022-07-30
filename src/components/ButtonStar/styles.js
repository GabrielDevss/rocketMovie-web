import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 5px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.violet};
`;