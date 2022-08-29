import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.colors.background_800};
  color: ${({ theme }) =>  theme.colors.white};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.colors.gray_300}` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) =>  theme.colors.violet};
  }

  .button-add {
    color: ${({ theme }) =>  theme.colors.violet};
  }

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.2rem;

    color: ${({ theme }) =>  theme.colors.white};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) =>  theme.colors.gray_300};

    }
  }
`;