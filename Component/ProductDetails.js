import React from 'react';
import { Image, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const ProductDetails = () => {
  const Y = useSharedValue(0);
  const config={
    mass:0.8,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:1,
    restSpeedThreshold:0.1
  }
  const config2={
    mass:0.3,
    damping:10,
    overshootClamping:false,
    restDisplacementThreshold:1,
    restSpeedThreshold:0.1
  }
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctY) => {
      ctY.startX = Y.value;
    },
    onActive: (event, ctY) => {
      Y.value = ctY.startX + event.translationY;
    
    },
    onEnd: (_) => {
      Y.value = withSpring(0);
      if(Y.value>20){
        Y.value=90
      }
     
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:clamp( Y.value,0,90)
        },
      ],
    };
  });

  const ImageAnimation =useAnimatedStyle(()=>{
    return{
      
      transform:[
        {
        scale:interpolate(Y.value,[0,60],[1,2.5],Extrapolate.CLAMP)
      },
    {
      translateY:interpolate(Y.value,[0,20,40,60],[0,6,10,0],Extrapolate.CLAMP)
    },
    {
      translateX:interpolate(Y.value,[0,20,40,60],[0,20,30,30],Extrapolate.CLAMP)
    }
  ],
      height:(Y.value>60)?withSpring(252,config):withSpring(170,config2)
    }
  })
  const ImageTransForm=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withSpring( interpolate(Y.value,[0,70],[0,80],Extrapolate.CLAMP),config)
      }]
    }
  })
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.container,animatedStyle]}>
      <Animated.View style={[styles.ImageContainer,ImageAnimation]}>
      <Animated.Image
      source={{uri:'https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png'}}
      style={[styles.Image,ImageTransForm]}
      />
       </Animated.View>
      <StatusBar/>
    </Animated.View>
    </PanGestureHandler>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:450,
  },
  ImageContainer:{
    height:170,
    width:170,
    borderRadius:15,
    backgroundColor:"#8cdbca",
    zIndex:1,
    position:'relative',
    left:50,
    top:50
  },
  Image:{
    height:120,
    width:120,
    top:10,
    left:10,
    bottom:50,
    borderRadius:15,
    position:'absolute',
    resizeMode:'contain'
  },
})
