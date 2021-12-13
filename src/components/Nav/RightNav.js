import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { secondaryThemeColor } from '../../core/color';
import { globalActions } from '../../store/slices/global';
import Switch from '../Switch';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;

  li {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${secondaryThemeColor};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    align-items: flex-start;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {

  const darkThemeEnabled = useSelector((state) => state.global.darkThemeEnabled);
  const dispatch = useDispatch();

  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Create Rig</li>
      <li>Trending</li>
      <li>Dashboard</li>
      <li>Sign Up</li>
      <Switch
        id="theme-switch"
        toggled={darkThemeEnabled}
        onChange={() => dispatch(globalActions.toggleTheme())}
      />
    </Ul>
  )
}

export default RightNav