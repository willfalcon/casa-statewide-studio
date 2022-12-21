import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ImageComp from './ImageComp';
import theme, { media } from './theme';

const InfoBlockPreview = ({ value }) => {
  const { image, content } = value;

  return (
    <StyledInfoBlock className="info-block">
      <div className="info-block__image-wrapper">{image.asset && <ImageComp className="info-block__image" image={image} />}</div>
      <Content className="info-block__content">{content}</Content>
    </StyledInfoBlock>
  );
};

const StyledInfoBlock = styled.div`
  margin: 40px auto;
  ${media.break`
    width: ${theme.sizes.wide}px;
    max-width: 100%;
    display: flex;
    gap: 20px;
    .info-block {
      &__content {
        flex: 0 1 60%;
      }
      &__image-wrapper {
        flex: 1 0 30%;
        max-width: 30%;
        img {
          object-fit: contain;
          width: 100%;
        }
      }
    }
  `}
`;

export default InfoBlockPreview;
