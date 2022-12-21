import React, { useState } from 'react';
import { useMeasure } from 'react-use';
import styled from 'styled-components';
import Content from './Content';
import theme from './theme';

const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const AccordionSection = ({ slug, heading, content }) => {
  if (!slug && !heading) return null;
  const [open, setOpen] = useState(false);
  const [ref, size] = useMeasure();
  const slugId = slug?.current ? slug.current : slugify(heading);
  return (
    <Section className="accordion-section" id={slugId} contentHeight={size.height} open={open}>
      <h3 className="section__heading">
        <button id={`heading-${slugId}`} aria-controls={`panel-${slugId}`} aria-expanded={open} onClick={() => setOpen(!open)}>
          {heading}
        </button>
      </h3>
      <section className="section__panel" id={`panel-${slugId}`} aria-labelledby={`heading-${slugId}`} aria-hidden={!open} inert={!open}>
        <Content className="section__content" ref={ref}>
          {content}
        </Content>
      </section>
    </Section>
  );
};

const Section = styled.div`
  .section {
    &__heading {
      font-weight: ${theme.font.medium};
      font-size: 22px;
      border-bottom: 1px solid ${theme.blue};
      padding-bottom: 1rem;
    }
    &__panel {
      overflow: hidden;
      height: ${({ open, contentHeight }) => (open ? `${contentHeight}px` : '0px')};
      transition: 0.25s;
      .block-content {
        padding-bottom: 16px;
      }
    }
  }

  button {
    background: none;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    border: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    gap: 1rem;
    text-align: left;
    font-family: 'brandon-grotesque', sans-serif;
    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      border-top: 3px solid ${theme.blue};
      border-right: 3px solid ${theme.blue};
      transform: rotate(45deg);
      transform: ${({ open }) => (open ? 'rotate(135deg)' : 'rotate(45deg)')};
      transition: 0.25s;
    }
  }
`;

export default AccordionSection;
