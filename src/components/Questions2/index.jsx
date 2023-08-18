import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.min.css';
import { TextComponent } from '../TextComponent';
import messages from './what-is-practicum';
const defaultTexts = {
  title: 'How Felisity can help you!',
};

export const Questions2 = ({ background, sectionId, title}) => {
  const serviceTitle = title || defaultTexts.title;

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colorDark={!background} size="huge" as="h2">
          {serviceTitle}
        </Heading>
      </Styled.Container>
      {messages.map((item) => (
          <Styled.Item key={item.id} data-aos={item.fade} data-aos-duration="750">
            <Styled.Inner direction={item.direction}>
              <Styled.Image displayLogo={item.displayLogo} alt="Practicum" src={item.backgroundImage} />
              <Styled.Bubble borderRadius={item.borderRadius} backgroundColor={item.backgroundColor}>
                <Styled.Reply text={item.text}>{item.message}</Styled.Reply>
              </Styled.Bubble>
            </Styled.Inner>
          </Styled.Item>
        ))}
    </SectionBackground>
  );
};

Questions2.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
  title: P.string,
};
