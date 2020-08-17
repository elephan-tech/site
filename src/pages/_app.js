import React, { useReducer } from 'react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { IonApp } from '../components';
import { initialState, reducer } from '../providers/AppState';
import appTheme from '../theme';
import { ThemeProvider } from 'styled-components';
import { any } from 'prop-types';

export default function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const theme = appTheme(state.dark);

  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <Component
          {...pageProps}
          dispatch={dispatch}
          state={state}
          theme={theme}
        />
      </IonApp>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: any,
  pageProps: any
};