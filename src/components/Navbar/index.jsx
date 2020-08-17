import React from 'react';
import Link from 'next/link';
import { withTheme } from 'styled-components';
import { Button } from 'dope-components';
import {
  ellipsisVertical
} from 'ionicons/icons';
import { IonIcon } from '..';
import Grid from '../Grid';
import Logo from '../Logo';
import { Container, Nav } from './styles';
import { object, bool, func } from 'prop-types';

const routes = [
  { label: 'About Elephantech', url: '#About' },
  { label: 'Our Services', url: '#Services' },
];


const Header = (props) => {

  const {
    theme,
    admin,
    // dispatch,
    state,
    // setDarkMode
  } = props;
  const { screen } = state;

  // const toggleDarkMode = () => dispatch({ type: 'TOGGLE_DARK_MODE' });

  const toggleMenu = () => console.log('hello');
  const small = screen.device === 'phone' || screen.device === 'tablet';

  return (
    <Container>
      <Nav raised noMargin={small}>
        <Grid align="center" row style={{ margin: `0px ${theme.unit(small ? 0 : 3)}` }}>
          <Grid row justify="flex-start">
            <Link href="/"><a><Logo theme={theme} size="s" /></a></Link>
          </Grid>
          <Grid
            row
            justify="flex-end"
            align="center"
            noFlex
          >
            {!admin && routes.map((route) => {
              return (
                <Button
                  key={route.url}
                  variant='text'
                  href={route.url}
                  color={theme.palette.accent.main}
                >
                  {route.label}
                </Button>
              );
            })}
            {!small ? <Button
              href={admin ? 'login' : '#Contact'}
              color={theme.palette.primary.main}
              style={{ margin: 0 }}
              round
              fullWidth
            >
              {admin ? 'login' : 'Contact'}
            </Button> :
              (<Button variant="text" onClick={toggleMenu} color={theme.palette.primary.main}>
                <IonIcon slot="icon-only" icon={ellipsisVertical} />
              </Button>)
            }

          </Grid>
        </Grid>
      </Nav>
    </Container >
  );
};

Header.propTypes = {
  theme: object,
  admin: bool,
  dispatch: func,
  state: object,
  setDarkMode: func,
};

export default withTheme(Header);