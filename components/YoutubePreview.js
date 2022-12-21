import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import getYouTubeId from 'get-youtube-id';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styled from 'styled-components';

const YoutubePreview = props => {
  const { value } = props;
  if (!value.url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(value.url);
  return (
    <YoutubeWrapper>
      <LiteYouTubeEmbed id={id} />
    </YoutubeWrapper>
  );
};

const YoutubeWrapper = styled.div`
  article {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default YoutubePreview;
