import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.min.css';
import { TextComponent } from '../TextComponent';

const defaultTexts = {
  title: 'How Felisity can help you!',
  title2: 'Easily Usage',
  description:
    'Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.',
};

export const Questions = ({ background, sectionId, title, pergunta1, resposta1, pergunta2, resposta2, pergunta3, resposta3, pergunta4, resposta4 }) => {
  const serviceTitle = title || defaultTexts.title;

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colorDark={!background} size="huge" as="h2">
          {serviceTitle}
        </Heading>
      </Styled.Container>

      <Styled.ContainerCards>
        
        <Styled.ServiceCards>
          <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{pergunta1}</Styled.Text>
          </Styled.ServiceCard>
        </Styled.ServiceCards>

        <Styled.ServiceCards2>
          <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>{resposta1}</Styled.Text>
          </Styled.ServiceCard3>
        </Styled.ServiceCards2>

      
        <Styled.ServiceCards>
          <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{pergunta2}</Styled.Text>
          </Styled.ServiceCard>
        </Styled.ServiceCards>

        <Styled.ServiceCards2>
          <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>{resposta2}</Styled.Text>
          </Styled.ServiceCard3>
        </Styled.ServiceCards2>

              
        <Styled.ServiceCards>
          <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{pergunta3}</Styled.Text>
          </Styled.ServiceCard>
        </Styled.ServiceCards>

        <Styled.ServiceCards2>
          <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>{resposta3}</Styled.Text>
          </Styled.ServiceCard3>
        </Styled.ServiceCards2>

              
        <Styled.ServiceCards>
          <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{pergunta4}</Styled.Text>
          </Styled.ServiceCard>
        </Styled.ServiceCards>

        <Styled.ServiceCards2>
          <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>{resposta4}</Styled.Text>
          </Styled.ServiceCard3>
        </Styled.ServiceCards2>
      
        
      </Styled.ContainerCards>
    </SectionBackground>
  );
};

Questions.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
  title: P.string,
  pergunta1: P.string,
  resposta1: P.string,
  pergunta2: P.string,
  resposta2: P.string,
  pergunta3: P.string,
  resposta3: P.string,
  pergunta4: P.string,
  resposta4: P.string,
};
