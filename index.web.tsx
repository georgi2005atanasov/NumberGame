import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { createRoot } from 'react-dom/client';
import appConfig from './app.json';
const appName = appConfig.name;

AppRegistry.registerComponent(appName, () => App);

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(<App />);
