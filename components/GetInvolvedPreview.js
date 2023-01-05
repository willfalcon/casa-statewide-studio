import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import SubNav from './SubNav';
import theme, { media } from './theme';
import { client } from './client';

const GetInvolvedPreview = ({ value }) => {
  const { heading } = value;
  const [subNav, setSubNav] = useState([]);

  useEffect(() => {
    async function getSubNav() {
      const res = await client.fetch(`*[_id == 'generalSettings'][0] {
        subNav
      }`);
      setSubNav(res.subNav);
    }
    getSubNav();
  }, []);
  return (
    <StyledGetInvolved className="get-involved">
      {heading && <h2 className="banner">{heading}</h2>}
      <SubNav subNav={subNav} />
    </StyledGetInvolved>
  );
};

const StyledGetInvolved = styled.div`
  .page-content &.get-involved {
    width: 100%;
    padding: 0;
  }
  .banner {
    background: ${theme.blue};
    color: white;
    margin: 0;
    text-align: center;
    font-size: 2.4rem;
    text-transform: uppercase;
    padding: 20px 10px 40px;
    ${media.break`
      
      font-size: 30px;
    `}
  }
`;
export default GetInvolvedPreview;
