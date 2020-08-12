import React, { useState } from 'react'
import StyledLogin, { IconWrapper, Container, LoginFab, FabButton, Modal } from './styles.js';
import { IonIcon } from '../index.js';
import { personCircleOutline } from 'ionicons/icons';

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
            <IonIcon slot="icon-only" icon={personCircleOutline} />
          </IconWrapper>
        </FabButton>
      </Container>
    </LoginFab>
  )
}

export default Login
