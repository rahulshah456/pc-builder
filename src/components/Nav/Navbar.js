import React from 'react';
import styled from 'styled-components';
import { primaryThemeColor } from '../../core/color';
import Burger from './Burger';

const Navigation = styled.div`
  padding: 0 3rem;
  background-color: ${primaryThemeColor};
  color: white;
 
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
`

const Navbar = () => {
  return (
    <Navigation>
      <Nav>
        <h3>PC Rig Builder</h3>
        <Burger />
      </Nav>
    </Navigation>
  )
}

export default Navbar