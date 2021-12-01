/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { useColorScheme } from 'react-native';
import Main from './src/components/Main';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <Main />
  );
};

export default App;
