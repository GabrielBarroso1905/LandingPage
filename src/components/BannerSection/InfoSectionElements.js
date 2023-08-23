import {styled,css} from "styled-components";
// import { Button } from "../../styles/Button";
// import { device } from "../../styles/Breakpoints";
import { ReactComponent as PatternDesktop } from "./images/pattern-banner-desktop.svg";
import { ReactComponent as PatternMobile } from "./images/pattern-banner-mobile.svg";

export const BannerWrapper = styled.section`
  margin-top: 8rem;
  @media ${"2000px"} {
    margin: 6rem 10rem;
  }
`;


export const BannerContainer = styled.div`
  background-color: #2d2640;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  margin: auto;
  max-width: 1440px;
  position: relative;
  height: 25.2rem;;
  
  @media ${"2000px"} {
    flex-direction: column;
    text-align: center;
    margin: 8rem 2rem;
    padding: 4rem 2rem;
  }
`;

export const BannerTitle = styled.h3`
  font-family: "DM Serif Display", serif;
  font-size: clamp(5rem, 4vw, 8.1rem);
  color: #fafafa;
  font-weight: 400;
  max-width: 45%;
  line-height: 1;
  margin-left: 4rem;

  @media ${"2000px"} {
    max-width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    margin: 0;
  }
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
  /* Borda e raio do botão */
  border: 2px solid #fafafa;
  font-weight: bold;
  font-size: medium;
  /* Efeito de transição suave 
  transition: background-color 0.3s ease;
  */

  /* Estilo do texto em hover */
  &:hover {
    background-color: white;
    color: black;
 
    cursor: pointer;
  }
 `}
`;

export const DesktopPattern = styled(PatternDesktop)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;

   @media ${"1000px"} {
    display: none;
  }
`;

export const MobilePattern = styled(PatternMobile)`
  display: none;

  @media ${"1000px"} {
    display: inline;
    position: absolute;
    top: 0;
    right: 0;
  }
`;


