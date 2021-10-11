import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

const Product = ({Y,color,translationY}) => {
  const ContainerAnimation=useAnimatedStyle(()=>{
    return{
      marginTop:interpolate(Y.value,[0,100],[120,152],Extrapolate.CLAMP),
      backgroundColor:color,
      transform:[{
        translateY:interpolate(translationY.value,[0,100],[0,-152],Extrapolate.CLAMP)
      }]
    }
  })
  
  return (
    <Animated.View style={[styles.Container,ContainerAnimation]}>
     
    </Animated.View>
  )
}

export default Product

const styles = StyleSheet.create({
  Container:{
    height:455,
    width:"86%",
    alignSelf:'center',
    borderRadius:30,
    // backgroundColor:'gray',
    // marginTop:120,
    zIndex:-1000
    
  }
})
