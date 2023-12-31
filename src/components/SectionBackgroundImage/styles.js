import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  
  color: ${theme.colors.white};
  
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
  /* background: rgba(0, 0, 0, 0.3); */
  background: url(../img/img2.jpg) center center no-repeat;
  background-size: cover;
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
   
  `}
`;
