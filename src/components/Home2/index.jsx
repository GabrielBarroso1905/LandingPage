import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const Home2 = ({title,text,srcImg,background = false,sectionId = '', fundo}) => {
  return (
    <Styled.ContainerFundo>    
      <Styled.Fundo src={fundo} alt={title} />  
      <SectionBackground background={background} sectionId={sectionId} >
      <Styled.Container background={background}>

        <Styled.TextContainer>
          <Heading uppercase size ={"medium"}colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
          <Styled.Btn colorDark={background} >
                 Enviar Mensagem
          </Styled.Btn>
        </Styled.TextContainer>
       
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
       
      </Styled.Container>
    </SectionBackground >
   
    </Styled.ContainerFundo>

  );
};

Home2.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
