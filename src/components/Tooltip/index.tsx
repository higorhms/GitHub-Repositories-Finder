import React, { useCallback } from 'react';
import Switch from 'react-switch';

import { Link } from 'react-router-dom';
import { Container, MenuToolTip, ThemeSwitcher } from './styles';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';

interface TooltipProps {
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ visible }) => {
  const { handleChangeTheme, theme } = useTheme();
  const { signOut } = useAuth();

  const handleLogOut = useCallback((): void => {
    signOut();
  }, [signOut]);

  return (
    <Container isVisible={!!visible}>
      <MenuToolTip>
        <Link to="/profile">My Profile</Link>
        <Link to="/" onClick={handleLogOut}>
          Logout
        </Link>
        <ThemeSwitcher>
          <p>Change theme</p>
          <Switch
            onChange={handleChangeTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={theme.colors.text}
            onColor={theme.colors.text}
          />
        </ThemeSwitcher>
      </MenuToolTip>
    </Container>
  );
};

export default Tooltip;
