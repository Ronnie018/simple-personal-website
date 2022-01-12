import React from 'react';
import {
  StyledHeader,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLink,

} from './styled';

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/about">About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/books">Books</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/media">Media</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/events">Events</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
