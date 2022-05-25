import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppNavigator } from './navigation';
import { navigationRef } from './services/NavigationServices';
import configureStore from './store';

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootSiblingParent>
            <AppNavigator />
          </RootSiblingParent>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
