import React, { useState } from 'react';
import { IconWrapper, Container, LoginFab, FabButton } from './styles.js';
import { IonIcon } from '../index.js';
import { personCircleOutline } from 'ionicons/icons';

const Login = () => {

  const [visible, setVisible] = useState(false);

  const mouseProps = {
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false)
  };

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
  );
};

export default Login;
