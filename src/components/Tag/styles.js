import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_300};
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.2rem;
  padding: .5rem 1.6rem;
  border-radius: 1rem;
`;