import styled from 'styled-components';


export const Container = styled.div` 

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  width: 100%;
  height: 100vh;

  overflow-y: hidden;

  > main {
   padding: 0 12.3rem;
  }
`;

export const HeaderContent = styled.div`
  
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 19px;

    margin-bottom: 2.4rem;

    > h1 {
      font-size: 3.6rem;
      font-weight: 600;
      margin-top: -8px;
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: start;

    gap: 8px;

    margin-bottom: 4rem;


    > img {
    width: 1.6rem;
    height: 1.6rem;
    clip-path: circle();
    }

    > svg {
      color: ${({ theme }) => theme.colors.violet};
    }
  }
`;

export const Content = styled.div`
  height: 38rem;
  max-height: 48.1rem;

  grid-area: content;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;

  margin: 5rem 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.violet};
    border-radius: 1rem;
  }
`;