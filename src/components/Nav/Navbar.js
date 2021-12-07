import React from 'react';
import styled from 'styled-components';
import { primaryThemeColor } from '../../core/color';
import Burger from './Burger';

const Navigation = styled.div`
  padding: 0 3em;
  background-color: ${primaryThemeColor};
  color: white
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