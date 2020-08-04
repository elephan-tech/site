import React, { useState } from 'react'
import StyledLogin, { IconWrapper, Container, LoginFab, FabButton, Modal } from './styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Expand } from '../../animations'


const Login = () => {

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);


  const svgStyles = {
    height: 20,
    width: 15,
    flexShrink: 0,
    marginRight: 3,
    color: visible ? 'black' : 'white',
  };

  const mouseProps = {
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false)
  }

  return (
    <LoginFab>
      <Container>
        <FabButton {...mouseProps} href={'./login'} visible={visible}>
          <IconWrapper>
            <FontAwesomeIcon style={svgStyles} size="xs" icon={faUserCircle} />
          </IconWrapper>
        </FabButton>
      </Container>
    </LoginFab>
  )
}

export default Login
