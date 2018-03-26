import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import AppWeatherAsync1615051003 from './src/AppWeatherAsync1615051003';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText="Header" />
        <AppWeatherAsync1615051003 />
        <Footer footerText="Footer" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
});
