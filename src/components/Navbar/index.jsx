import React from 'react'
import { Button } from 'dope-components';
import Logo from '../Logo'
import Router from 'next/router'
import NProgress from 'nprogress';
import { Link } from './styles'
import { useSpring, config } from 'react-spring';
import Grid from '../Grid';
import Surface from '../Surface';
import { styled } from '@storybook/theming';
import { withTheme } from 'styled-components'


Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const routes = [
  // { name: 'Logo', url: '/' },
  { label: 'About', url: '#About' },
  { label: 'Team', url: '#Team' },
  { label: 'Portfolio', url: '#Portfolio' },
];

const Nav = styled(Surface)`
  display: flex;
  padding: 0;
  margin: 24px auto 0px auto;
  border-radius: 30px;
  min-height: 60px;
  width: 90%;
  z-index: 1;
  background: white;
`

const Container = styled.div`
    z-index: 200;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 80px;
    /* background: white; */
    width: 100%;
    margin: auto;
    display: flex;
`

const Header = ({ theme }) => {

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0, margin: 8 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1, margin: 3 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <Container>
      <Nav round theme={theme} style={barAnimation}>
        <Grid align="center" row style={{ margin: `0px ${theme.unit(4)}` }}>
          <Grid noFlex><Logo /></Grid>
          <Grid row justify="flex-start">
            {routes.map((route) => {
              return (
                <Link key={route.label}>
                  <Button
                    variant='text'
                    href={route.url}
                    color={theme.palette.black}
                    style={linkAnimation}
                  >
                    {route.label}
                  </Button>
                </Link>
              )
            })}

          </Grid>
          <Grid
            row
            justify="flex-end"
            noFlex
          >
            <Button
              href="#Contact"
              color={theme.palette.primary.main}
              style={{ ...linkAnimation, margin: 0 }}
              round
              fullWidth
            >
              Contact
              </Button>
          </Grid>
        </Grid>

      </Nav>
    </Container>
  )
}

export default withTheme(Header)
