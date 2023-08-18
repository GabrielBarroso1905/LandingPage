import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

const testimonialsData = [
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },

]

export const Home2 = ({title,text,srcImg,background = false,sectionId = ''}) => {
  return (
    
        <>
        <Styled.IntroSection>
          <Styled.IntroOverlay>
          <Styled.IntroTextContainer>
          <Styled.IntroHeading>
          Como criar uma rotina de cuidados com a pele do rosto
                  </Styled.IntroHeading>
                  
                <Styled.IntroParagraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."</Styled.IntroParagraph>
                <Styled.Btn colorDark={background} >
                  Learn More
          </Styled.Btn>
          </Styled.IntroTextContainer>
          </Styled.IntroOverlay>
        </Styled.IntroSection>
        
        <Styled.div>
          <Styled.IntroTextContainer2>
          
          <Styled.Titulo>
          <h2>Features</h2>
          <Styled.BlueBar/>
          </Styled.Titulo>
          <Styled.TestimonialContainer>
          {testimonialsData.map((testimonial, index) => (
            <Styled.Testimonial key={index}>
              <div className="testimonial-image">

              <Styled.ServiceCardIcon colorDark={!background}>
                <Styled.IcoInsta colorDark={background}>
                <i className= {`${testimonial.icon}`}/>
                </Styled.IcoInsta>
              </Styled.ServiceCardIcon>
              </div>
              <div className="testimonial-content">
              
              <div colorDark={background} className="testimonial-meta">{testimonial.name}</div>
                <p>"{testimonial.text}"</p>
              
              </div>
            </Styled.Testimonial>
          ))}
        </Styled.TestimonialContainer>
       
        </Styled.IntroTextContainer2>
        </Styled.div>
         

        </>
       
 
  );
};

Home2.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
