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
    padding: 11.4rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    } 
  }
`;

export const Content = styled.div`
  height: 30rem;

  grid-area: content;
  display: flex;
  flex-direction: column;

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