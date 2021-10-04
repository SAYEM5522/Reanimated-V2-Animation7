import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import ProductList from './Component/ProductList';
export default function App() {

const LineAnimation=useAnimatedStyle(()=>{
  return{
    transform:[
      {
      rotateZ:-48+"deg"
    },
    {
      translateY:30
    },{
      translateX:-15
    }
  ],
  
  }
})

  return (
    <>
    <Animated.View style={[styles.Line,LineAnimation]}/>
   <ProductList />
 
    </>
  );
}

const styles = StyleSheet.create({
  Line:{
    height:5,
    width:46,
    backgroundColor:'black',
    borderRadius:3,
    zIndex:100,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  }
});
