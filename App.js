import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Navigation from './Components/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import WatchlistProvider from './Components/Contexts/WatchlistContext';
import UserDataProvider from './Components/Contexts/UserDataContext';

export async function urlOpener(url, redirectUrl) {
  await InAppBrowser.isAvailable();
  const {type, url: newUrl} = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (type === 'success') {
    Linking.openURL(newUrl);
  }
}
Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <UserDataProvider>
        <WatchlistProvider>
          <StatusBar barStyle={'light-content'} backgroundColor={'#0a0a0a'} />
          <Navigation />
        </WatchlistProvider>
      </UserDataProvider>
    </NavigationContainer>
  );
};

export default App;
