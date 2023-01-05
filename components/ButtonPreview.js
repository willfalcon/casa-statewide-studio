import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const ButtonPreview = ({ value }) => {
  const { label, color, alignment } = value || { color: null, alignment: null, label: 'Button Text' };
  const justifyContent = alignment === 'Center' ? 'center' : alignment === 'Right' ? 'flex-end' : 'flex-start';

  return (
    <ButtonWrapper style={{ justifyContent }}>
      <StyledButton color={color}>{label}</StyledButton>
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledButton = styled.div`
  background: none;
  padding: 10px 20px;
  border: 1px solid ${theme.blue};
  color: ${theme.blue};
  border-radius: 12px;
  text-transform: uppercase;
  font-weight: ${theme.font.bold};
  display: inline-block;
  text-align: center;
`;
export default ButtonPreview;
