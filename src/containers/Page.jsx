import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IonContent, Meta, Navbar, IonPage } from '../components';
import useWidth from '../hooks/useWidth';


const Page = (props) => {
  const { title, description, children, dispatch, state } = props;

  const width = useWidth();

  useEffect(() => {
    dispatch({ type: 'SET_DIMENSION', payload: width })
  }, [width]);

  const setDarkMode = (mode) => dispatch({ type: 'THEME_MODE', payload: mode })

  const StyledPage = styled(IonPage)`
  margin: -8px !important;
  flex-direction: column;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  display: flex;
`

  return (
    <StyledPage>
      <Meta title={title} description={description} />
      <Navbar {...props} setDarkMode={setDarkMode} />
      <IonContent
        style={{ background: props.theme.palette.background }}
        scrollEvents={true}
        onIonScrollStart={() => { }}
        onIonScroll={() => { }}
        onIonScrollEnd={() => { }}
      >
        {children}
      </IonContent>
    </StyledPage >
  )
}

export default Page
