import React from 'react';


import {
  BannerTitle,
  Btn,
  BannerContainer,
  BannerWrapper,
  DesktopPattern,
  MobilePattern,
  } from './InfoSectionElements';

   
export const BannerSection = ({sectionId}) => {
    return (

      <div id={sectionId}>
       <BannerWrapper>
      <BannerContainer>
        <BannerTitle>Find out more about how we work</BannerTitle>
        <Btn>How We Work</Btn>
        <DesktopPattern />
        <MobilePattern />
      </BannerContainer>
    </BannerWrapper>
    </div>
    
    );
};


BannerSection.propTypes = {

  };