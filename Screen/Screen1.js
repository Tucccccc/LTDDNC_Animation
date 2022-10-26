import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, TouchableOpacity } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default function Screen1({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: '100%', height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 18, textAlign: 'center', margin: 10}}>Welcome to Animation React Native App</Text>
      </FadeInView>
      <TouchableOpacity style={{width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, alignItems: 'center', backgroundColor: '#dcdcdc'}}
        onPress={() => navigation.navigate('Option')}>
            <Text style={{marginTop: 'auto', marginBottom: 'auto'}}>Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, alignItems: 'center', backgroundColor: '#dcdcdc'}}
        onPress={() => navigation.navigate('Option1')}>
            <Text style={{marginTop: 'auto', marginBottom: 'auto'}}>Screen 3</Text>
        </TouchableOpacity>
    </View>
  )
}