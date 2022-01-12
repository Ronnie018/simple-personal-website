import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  StyledHeader,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledMenu,

} from './styled';

function Header() {
  const [size, setSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => setSize(window.innerWidth));
  return (
    <StyledHeader size={size}>
      <StyledMenu size={size}>
        <FaBars size={30} fill="black" />
      </StyledMenu>
      <StyledNav size={size}>
        <StyledUl size={size}>
          <StyledLi size={size}>
            <StyledLink to="/" size={size}>Home</StyledLink>
          </StyledLi>
          <StyledLi size={size}>
            <StyledLink to="/about" size={size}>About</StyledLink>
          </StyledLi>
          <StyledLi size={size}>
            <StyledLink to="/books" size={size}>Books</StyledLink>
          </StyledLi>
          <StyledLi size={size}>
            <StyledLink to="/media" size={size}>Media</StyledLink>
          </StyledLi>
          <StyledLi size={size}>
            <StyledLink to="/events" size={size}>Events</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
