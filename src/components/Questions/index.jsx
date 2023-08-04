import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.min.css';
import { TextComponent } from '../TextComponent';

// Objeto com os textos base
const defaultTexts = {
  title: 'How Felisity can help you!',
  title2: 'Easily Usage',
  description:
    'Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.',
};

export const Questions = ({ background, sectionId, title, title2, description }) => {
  // Define os textos utilizando os valores passados como parâmetros ou os valores padrão do objeto defaultTexts
  const serviceTitle = title || defaultTexts.title;
  const serviceDescription = description || defaultTexts.description;
  const serviceTitle2 = title2 || defaultTexts.title2;

  return (
    <SectionBackground background={background} sectionId={sectionId}>
        <Styled.Container>
          <Heading colorDark={!background} size="huge" as="h2">
              {serviceTitle}
            </Heading>
          </Styled.Container>
        
        {/* <Styled.Container2> */}
      
      <Styled.ContainerCards>
          
                      
        <Styled.ServiceCards>
            <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{serviceDescription}</Styled.Text>
            </Styled.ServiceCard>
        </Styled.ServiceCards>
       
        <Styled.ServiceCards2>
            <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>Resposta</Styled.Text>
            </Styled.ServiceCard3>
          </Styled.ServiceCards2>

          <Styled.ServiceCards>
            <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{serviceDescription}</Styled.Text>
            </Styled.ServiceCard>
        </Styled.ServiceCards>
       
        <Styled.ServiceCards2>
            <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>Resposta</Styled.Text>
            </Styled.ServiceCard3>
          </Styled.ServiceCards2>
          <Styled.ServiceCards>
            <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{serviceDescription}</Styled.Text>
            </Styled.ServiceCard>
        </Styled.ServiceCards>
       
        <Styled.ServiceCards2>
            <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>Resposta</Styled.Text>
            </Styled.ServiceCard3>
          </Styled.ServiceCards2>

          <Styled.ServiceCards>
            <Styled.ServiceCard colorDark={!background}>
            <Styled.Text colorDark={!background}>{serviceDescription}</Styled.Text>
            </Styled.ServiceCard>
        </Styled.ServiceCards>
       
        <Styled.ServiceCards2>
            <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>Resposta</Styled.Text>
            </Styled.ServiceCard3>
          </Styled.ServiceCards2>

      </Styled.ContainerCards>
{/*----------------------------------------------------------------------------------------------*/}
        {/* <Styled.ContainerCards2>
         
        <Styled.ServiceCards2>
            <Styled.ServiceCard2 colorDark={!background}>
            </Styled.ServiceCard2>
          </Styled.ServiceCards2>   
        
        <Styled.ServiceCards>
            <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>Resposta</Styled.Text>
            </Styled.ServiceCard3>
          </Styled.ServiceCards>

          <Styled.ServiceCards2>
          <Styled.ServiceCard2 colorDark={!background}>
            </Styled.ServiceCard2>
          </Styled.ServiceCards2>   
        
        <Styled.ServiceCards>
            <Styled.ServiceCard3 colorDark={!background}>
            <Styled.Text colorDark={!background}>Resposta</Styled.Text>
            </Styled.ServiceCard3>
          </Styled.ServiceCards>

         

      </Styled.ContainerCards2> */}
      {/* </Styled.Container2> */}
    </SectionBackground>
  );
};

Questions.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
  title: P.string, 
  description: P.string, 
};
