import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-y: hidden;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;
  > main {
    padding: 4rem 12.3rem;
  } 
`;

export const Content = styled.form`
  width: 100%;
  height: 38rem;

  grid-area: content;
  overflow-y: scroll;

  padding-right: 1rem;


  > h1 {
    margin-top: 2.4rem;
    font-size: 3.6rem;
    font-weight: 600;
  }

  .inputs {
    display: flex;
    align-items: center;
    gap: 5.6rem;
    margin-top: 4rem;
    padding-right: 8rem;

   .star-svg > path {
    stroke-width: 1px;
    stroke: ${({theme }) => theme.colors.violet};
  }
  }

  > footer {
    width: 100%;

    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.gray_100 };
      margin-bottom: 2.4rem;
    }

    .tags {
      width: 100%;
      min-height: 8.8rem;
      flex-wrap: wrap;
      display: flex;
      gap: 1.4rem;

      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 1rem;
      padding: 1.6rem;
      margin-bottom: 4rem;
    }

    .buttons {
      display: flex;
      padding: 0 12rem;

      > button {
        font-weight: 600;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }

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