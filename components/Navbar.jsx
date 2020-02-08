import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring';


const routes = [
  { name: 'About', url: '/about' },
  { name: 'Team', url: '/team' },
  { name: 'Logo', url: '/' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Contact', url: '/contact' }
];

const shadow = (color) => {

}

const Navbar = styled(animated.nav)`
display: flex;
top: 0;
left: 0;
z-index: 1;
font-size: 1.4rem;
justify-content: space-evenly;
align-content: center;
align-items: center;
width: 100%;
min-height: 80px;
position: ${props => props.position || 'fixed'};
background: ${props => props.color || 'white'};
box-shadow: ${({ theme }) => shadow(theme.palette.black)};
.section{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow:1;
  min-height: 50px;
  min-width: 20%;
    transition: all 300ms linear 0s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main} ;
      border-bottom: ${({ theme }) => `3px solid ${theme.palette.accent.main}`};
    }
    @media (max-width: 768px) {
      display: none;
    }
}
`

const Link = styled.a`
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};
`

const Header = () => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });
  return (
    <Navbar style={barAnimation}>
      {routes.map(({ name, url }, i) => {
        return (
          <div key={i} className="section" style={linkAnimation}>
            <Link href={url}>
              {name === 'Logo' ? <Logo /> : name}
            </Link>
          </div>)
      })}
    </Navbar>
  )
}

export default Header
