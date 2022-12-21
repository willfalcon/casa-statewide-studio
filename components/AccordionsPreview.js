import React from 'react';
import styled from 'styled-components';
import AccordionSection from './AccordionSection';

const AccordionsPreview = ({ value }) => {
  const { heading, sections } = value;
  return (
    <AccordionWrapper className="accordion-wrapper">
      <h2 className="accordion-wrapper__heading text-center">{heading}</h2>
      {sections &&
        sections.map(section => {
          return <AccordionSection key={section._key} {...section} />;
        })}
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  margin-top: 3rem;
`;

export default AccordionsPreview;
