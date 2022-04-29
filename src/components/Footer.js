import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import tinder from '../assets/tinder.png';
import discovery from '../assets/discovery.png';
import star from '../assets/star.png';
import chat from '../assets/chat.png';

const Footer = () => {
    const [likes, setLikes] = useState(9);
  return (
    <View style={styles.container}>
      <Image source={tinder} style={styles.image} />
      <Image source={discovery} style={styles.image} />
      <Image source={star} style={styles.image} />
      <Image source={chat} style={styles.image} />
      <View style={styles.positioned}>
        <Text style={styles.text}>{likes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    padding: 35,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 25,
    height: 25,
  },
  positioned: {
    backgroundColor: '#d1b00a',
    width: 17,
    height: 17,
    borderRadius: 50,
    position: 'absolute',
    right: 125,
    top: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000'
  }
});

export default Footer;
