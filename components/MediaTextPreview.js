import React from 'react';
import styled from 'styled-components';
import ImageComp from './ImageComp';
import { media } from './theme';

const MediaTextPreview = props => {
  const { value } = props;
  const { heading, color, image, text, alignment } = value;

  return (
    <StyledMediaText className="media-text" color={color} alignment={alignment}>
      <div className="media-text__image-wrapper">{image.asset && <ImageComp className="media-text__image" image={image} />}</div>
      <div className="media-text__content">
        <h2 className="media-text__heading">{heading}</h2>
        <p className="media-text__text">{text}</p>
      </div>
    </StyledMediaText>
  );
};

const StyledMediaText = styled.div`
  background: ${({ color }) => color};
  color: white;
  max-width: 100%;

  .page-content > &.media-text {
    width: 100%;
    padding: 0;
  }

  ${media.break`
    display: flex;
  `}

  .media-text {
    &__content {
      flex: 0 0 50%;
      padding: 20px;

      order: ${({ alignment }) => (alignment === 'Image Left' ? 2 : 1)};
    }
    &__heading {
      color: white;
      text-transform: uppercase;
      margin: 0;

      font-size: 30px;
    }
    &__text {
      margin: 0;

      font-size: 20px;
    }
    &__image-wrapper {
      flex: 0 0 50%;
      position: relative;

      order: ${({ alignment }) => (alignment === 'Image Left' ? 1 : 2)};
    }
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      ${media.break`
        position: absolute;
      `}
    }
  }
`;
export default MediaTextPreview;
