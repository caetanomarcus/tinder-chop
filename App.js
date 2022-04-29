import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Main from './src/components/Main';



const LotsOfGreetings = () => {
  return (
    <View style={styles.container} >
      <Header />
      <Main />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});

export default LotsOfGreetings;
