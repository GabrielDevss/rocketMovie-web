import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  > header {
    grid-area: header;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_600};
    padding: 2rem 14.4rem;
  }
`;

export const Form = styled.div`
  width: 34rem;
  margin: 0 auto;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 2.4rem;
  }
`; 

export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;

  margin: -8.8rem auto 3.2rem;
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;

  > label {
    width: 4.8rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.violet};
    clip-path: circle();

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.background_900};
    }
  }

  > img {
    width: 18.6rem;
    height: 18.6rem;
    clip-path: circle();
  }
`;