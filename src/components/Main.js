import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

import eu from '../assets/beer.jpg';
import info from '../assets/info2.png';
import heart from '../assets/heart.png';
import cross from '../assets/cross.png';

const Main = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={eu}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Cerveja</Text>
          <Text style={styles.years}>22</Text>
          <Image source={info} style={styles.logo} />
        </View>
        <Text style={styles.text2} >Não sei o que to fazendo aqui, mas chama no insta. Cansada do calor, eu quero frio :)</Text>
        <View style={styles.wrapper}>
          <View style={styles.textContainer2}>
            <Image source={cross} style={styles.images} />
            <Image source={heart} style={styles.images} />
            
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    paddingBottom: 7,
    paddingTop: 0,
    backgroundColor: '#E3E3E3',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',

  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 15,
    // marginBottom: 15,
  },
  years: {
    color: '#fff',
    fontSize: 25,
  },
  logo: {
    width: 15,
    height: 15,
    marginLeft: 15,

  },
  text2: {
    color: '#fff',
    fontSize: 19,
    marginLeft: 19,
    width: 330,
  },
  textContainer2: {
    backgroundColor: '#0a0a0a',
    height: 75,
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',


  },
  images: {
    width: 40,
    height: 40,
  },
  wrapper: {
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});

export default Main;
