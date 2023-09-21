import {styled,css} from "styled-components";
// import { Button } from "../../styles/Button";
// import { device } from "../../styles/Breakpoints";
import { ReactComponent as PatternDesktop } from "./images/pattern-banner-desktop.svg";
import { ReactComponent as PatternMobile } from "./images/pattern-banner-mobile.svg";



export const BannerWrapper = styled.section`
  ${({ theme }) => css`
  margin-top: 8rem;
    @media ${theme.media.lteMedium} {
    margin-top: 1rem;
    }

  `}
`;

export const BannerContainer = styled.div`
  ${({ theme }) => css`
  background-color: #2d2640;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  margin: auto;
  /* max-width: 1440px; */
  position: relative;
  height: 25.2rem;;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
    text-align: center;
    /* margin: 8rem 2rem; */
    padding: 4rem 2rem;
    height: 60%;
    width: 100%;

  }
  `}
`;

export const BannerTitle = styled.h3`
  ${({ theme }) => css`
  font-family: "DM Serif Display", serif;
  font-size: clamp(5rem, 4vw, 8.1rem);
  color: #fafafa;
  font-weight: 400;
  max-width: 45%;
  line-height: 1;
  margin-left: 4rem;

  @media ${theme.media.lteMedium} {
    max-width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    margin: 0;
  }
  `}
`;

export const Btn = styled.button`
 ${({ theme,colorDark }) => css`
 
  /* Estilos de fundo e cor do texto */
  background-color: #2d2640;
  color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
  z-index: 8;
  /* Margem e padding */
  
  margin: 10px 0;
  padding: 18px 28px;
  margin-right: 5rem;
  border: 2px solid #fafafa;
  font-weight: bold;
  font-size: medium;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
   
  }
  @media ${theme.media.lteMedium} {
      margin-right: 0rem;
  }
 `}
`;

export const DesktopPattern = styled(PatternDesktop)`
${({ theme }) => css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;

  @media ${theme.media.lteMedium} {
    display: none;
  }
`}
`;

export const MobilePattern = styled(PatternMobile)`
${({ theme }) => css`
  display: none;
  @media ${theme.media.lteMedium} {
    display: inline;
    position: absolute;
    top: 0;
    right: 0;
  }
`}
`;
