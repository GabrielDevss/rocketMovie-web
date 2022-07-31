import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.gray_100};

    margin-bottom: .8rem;
    border-radius: 1rem;

    > input {
      height: 5.6rem;
      width: 100%;

      padding: 1.2rem;

      color: ${({ theme }) => theme.colors.white};
      background: transparent;
      border: 0;

      &:placeholder {
       color: ${({ theme }) => theme.colors.gray_100};
      }

    }
    
    > svg {
      margin-left: 1.6rem;
    }
`;