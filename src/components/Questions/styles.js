import styled, { css } from 'styled-components';
import { Heading } from '../Heading';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    text-align: center;
    /* background-color: aliceblue; */
  `}
`;
export const Container2 = styled.div`
  ${({ theme }) => css`
  display: flex;
  @media ${theme.media.lteMedium} {
      display: flex;/* Adiciona a propriedade flex-wrap para que os itens sejam distribuídos em uma única coluna quando a tela for pequena */
    }
  `}
`;


export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os itens à esquerda */

  & > *:nth-child(odd) {
    margin-left: 1; /* Remove a margem esquerda dos itens ímpares (alinhados à esquerda) */
    margin-right: auto; /* Cola o item ímpar à esquerda */
  }
  & > * {
    width: 50%; /* Define a largura dos itens para 50% */
    margin-left: auto; /* Cola o item à direita */
    margin-right: 0; /* Remove a margem direita */
  }

`;


export const ContainerCards2 = styled.div`
  ${({ theme }) => css`
    
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small}; /* Adicione espaçamento entre os elementos */
  `}
`;


export const ServiceCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0px auto;
 

    @media ${theme.media.lteMedium} {
      display: inline;/* Adiciona a propriedade flex-wrap para que os itens sejam distribuídos em uma única coluna quando a tela for pequena */
  
    }
  `}
`;

export const ServiceCards2 = styled.div`
  ${({ theme }) => css`
  
        
    padding: 10px;
    @media ${theme.media.lteMedium} {
     display: inline;/* Adiciona a propriedade flex-wrap para que os itens sejam distribuídos em uma única coluna quando a tela for pequena */
     font-style: italic;
       padding: 10px;
    }
  `}
`;
export const ServiceCard = styled.div`
  ${({ theme,colorDark }) => css`
    /* text-align: center; */
    /* padding: 28px; */
    padding: 10px 40px 10px 10px;
    
    background-color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
    /* border-radius:10px; */
    border: none;
    /* margin: 12px 1px; */
    transition: 0.1s all ease-in;
    @media ${theme.media.lteMedium} { 
       /* padding: 10px 10px;
       width:100%; */
    }

  `} > * {
    margin: 0px auto;
  }
  
`;


export const ServiceCard2 = styled.div`
  ${({ theme,colorDark }) => css`
    /* text-align: center; */
    /* padding: 28px; */
    padding: 10px 40px 10px 10px;
 
    background-color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor  };
    /* border-radius:10px; */
    border: none;
    /* margin: 12px 1px; */
    transition: 0.1s all ease-in;
    @media ${theme.media.lteMedium} { 
      display: none;
    }

  `} > * {
    margin: 0px auto;
  }
  
`;

export const ServiceCard3 = styled.div`
  ${({ theme,colorDark }) => css`
    /* text-align: center; */
    /* padding: 28px; */
    padding: 10px 40px 10px 10px;
 
    background-color: ${colorDark ?  theme.colors.secondaryColor : theme.colors.white };
    /* border-radius:10px; */
    border: none;
    /* margin: 12px 1px; */
    transition: 0.1s all ease-in;
    @media ${theme.media.lteMedium} { 
    
    }

  `} > * {
    margin: 0px auto;
  }
  
`;

export const Text = styled.div`
  ${({ theme,colorDark}) => css`
    line-height: 16px;
    font-size: 15px;
    color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor };
  `}
`;
