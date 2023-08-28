import React from 'react';
import { BannerSection } from '../../components/BannerSection';


import {SectionTitle,
    SectionContainer,
    Line,
    CardContainer,
    Card,
    CardTitle,
    CardBody,
    SectionWrapper,
    Titulo,
    BlueBar,
   } from './InfoSectionElements';
    import { ReactComponent as SnappyIcon } from "./images/icon-snappy.svg";
    import { ReactComponent as PricesIcon } from "./images/icon-affordable-prices.svg";
    import { ReactComponent as PeopleIcon } from "./images/icon-people-first.svg";
    
   
export const InfoSection2 = ({sectionId}) => {
    return (

      <div id={sectionId}>
        <SectionWrapper>
      <SectionContainer>
        <Line/>
          <Titulo>
          <h2>Features</h2>
          <BlueBar/>
          </Titulo>
        {/* <SectionTitle>We're different</SectionTitle> */}
        <CardContainer>
          <Card>
            <SnappyIcon />
            <CardTitle>Snappy Process</CardTitle>
            <CardBody>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </CardBody>
          </Card>
          <Card>
            <PricesIcon />
            <CardTitle>Affordable Prices</CardTitle>
            <CardBody>
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </CardBody>
          </Card>
          <Card>
            <PeopleIcon />
            <CardTitle>People First</CardTitle>
            <CardBody>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </CardBody>
          </Card>
        </CardContainer>
      </SectionContainer>
      <BannerSection />
    </SectionWrapper>
      
    
    </div>
    
    );
};


InfoSection2.propTypes = {

  };