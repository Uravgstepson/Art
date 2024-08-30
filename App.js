/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import MainNavigator from './src/navigator/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { profileReducer } from './src/store/reducers/ProfileReducer';

const rootReducer = combineReducers({
  profileReducer: profileReducer
})

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
