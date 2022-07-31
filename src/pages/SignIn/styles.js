import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.violet};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > h2 {
    margin: 4.8rem 0;
  }

  > button {
    width: 100%;
    margin-top: 1.6rem;
  }
    
    > a {
      margin: 4.2rem auto;
      color: ${({ theme }) => theme.colors.violet};
    }
  
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  `;

 