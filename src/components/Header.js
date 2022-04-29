import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import eu from '../assets/marcus.png';

const Header = () => {
  return (
    <View>
      <Image style={styles.image} source={eu} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Header;
