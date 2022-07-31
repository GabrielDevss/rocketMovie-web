import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  
  width: 100%;
  height: 11.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
  
  > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.violet};
    margin-right: 6.4rem;
  } 
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: 6.4rem;

  > div {
    width: 12.5rem;
    display: flex;
    flex-direction: column;
    margin-right: .9rem;

    a {
      text-align: end;
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    clip-path: circle();
  }
`;