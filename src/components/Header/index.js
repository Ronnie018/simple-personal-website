import React from 'react';
import { Header as StyledHeader, Nav as StyledNav, Ul as StyledUl } from './styled';

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
