import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../Utils/images';

const SplashScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  useEffect(() => {
    const fadeInAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    });

    const timer = setTimeout(() => {
      navigation.navigate('MainStack', {screen: 'HomeScreen'});
    }, 3000);

    fadeInAnimation.start();

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />

      <View style={styles.firstviewcontainer}>
        <Animated.Image
          source={images.logo}
          style={{
            height: 250,
            width: 300,
            opacity: fadeAnim,
          }}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  firstviewcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
});
export default SplashScreen;
