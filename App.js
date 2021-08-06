import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';
const App = () => {
  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  return (
    <WebView startInLoadingState={true} style={{ marginTop: 20, width: Dimensions.get('window').width, height: Dimensions.get('window').height }} source={{ uri: 'https://google.com/' }} />
  );
};
export default App;
