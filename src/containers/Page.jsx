import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IonContent, Meta, Navbar, IonPage } from '../components';
import useWidth from '../hooks/useWidth';
import { string, any, func, object } from 'prop-types';


const Page = (props) => {
  const { title, description, children, dispatch } = props;

  const width = useWidth();

  useEffect(() => {
    dispatch({ type: 'SET_DIMENSION', payload: width });
  }, [width]);

  const setDarkMode = (mode) => dispatch({ type: 'THEME_MODE', payload: mode });

  const StyledPage = styled(IonPage)`
  margin: -8px !important;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  display: flex;
  `;

  const StyledContent = styled(IonContent)`
    background: ${({ theme }) => theme.palette.background};
  `;

  return (
    <StyledPage>
      <Meta title={title} description={description} />
      <Navbar {...props} setDarkMode={setDarkMode} />
      <StyledContent
        scrollEvents={true}
        onIonScrollStart={() => { }}
        onIonScroll={() => { }}
        onIonScrollEnd={() => { }}
        overflowScroll={true}
      >
        {children}
      </StyledContent>
    </StyledPage >
  );
};

Page.propTypes = {
  title: string,
  description: string,
  children: any,
  dispatch: func,
  state: object
};

export default Page;
