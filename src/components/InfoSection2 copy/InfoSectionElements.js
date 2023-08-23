
import styled, { css } from 'styled-components';
export const SectionWrapper = styled.section`
  margin-top: 18rem;
`;

export const SectionContainer = styled.div`
 ${({ theme }) => css` 
 color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  padding: 0rem 10rem;

  @media ${theme.media.lteMedium} {
    padding: 0rem 2rem;
    align-items: center;
    text-align: center;
  } 
`}
`;

export const SectionTitle = styled.h2`
    font-size: 0px;
    font-weight: 600;
    font-family: "DM Serif Display", serif;
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  line-height: 2;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
  }
 `}
`;

export const Card = styled.div`
  width: 350px;
  margin-right: 1rem;
  @media ${"905px"} {
    margin: 0;
    padding-bottom: 2rem;
  }
`;

export const CardTitle = styled.h3`
    font-size: 30px;
    font-family: "DM Serif Display", serif;
    font-weight: 550;
    padding: rem 0rem;
`;

export const CardBody = styled.p`
 ${({ theme }) => css`  
color: ${theme.colors.black};
`}

`;
export const Line = styled.div`
 ${({ theme }) => css` 
  border-top: 1px solid ${theme.colors.white};
  width: 160px;
  padding-bottom: 20px;
  `}
 `;

