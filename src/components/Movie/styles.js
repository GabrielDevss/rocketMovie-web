import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 222.85px;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background_600};
  padding: 3.2rem;
  border-radius: 1.6rem;

  margin-bottom: 2.4rem;
  
  > h1 {
    width: 100%;
    font-size: 2.4rem;
    text-align: start;
    margin-bottom: .8rem;
  }

  > p {
    text-align: justify;
    margin-top: 1.5rem;
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 2rem;
  }
`;