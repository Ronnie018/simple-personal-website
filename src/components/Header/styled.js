import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  min-height: 50px;
  max-width: 700px;
  outline: 1px solid #2e5e5e;
  ${({ size }) => {
    if (size > 420) {
      return `
      margin: 0 auto;
    `;
    }
    return `
  `;
  }}
`;

export const StyledNav = styled.nav`
  min-height: inherit;
  width: 100%;
  ${({ size }) => {
    if (size > 420) {
      return `
    `;
    }
    return `
  `;
  }}
`;

export const StyledUl = styled.ul`
 min-height: inherit;
 height: 100%;
 width: 100%;
 display: flex;
 ${({ size }) => {
    if (size > 420) {
      return `
      justify-content: space-evenly;
     `;
    }
    return `
    `;
  }}
`;

export const StyledLi = styled.li`
  height: 100%;
  display: flex;
  width: 100%;
  ${({ size }) => {
    if (size > 420) {
      return `
    `;
    }
    return `
  `;
  }}
`;

export const StyledLink = styled(Link)`
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  ${({ size }) => {
    if (size > 420) {
      return `
    `;
    }
    return `
  `;
  }}
`;

export const StyledMenu = styled.button`
  width: 50px;
  height: 50px;
  ${({ size }) => {
    if (size > 420) {
      return `
      display: none;
   `;
    }
    return `
      display: block;
  `;
  }}
`;
