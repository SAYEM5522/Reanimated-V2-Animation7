import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

const Product = ({Y}) => {
  const ContainerAnimation=useAnimatedStyle(()=>{
    return{
      marginTop:interpolate(Y.value,[0,100],[120,152])
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
    height:420,
    width:"87%",
    alignSelf:'center',
    borderRadius:40,
    backgroundColor:'gray',
    // marginTop:120,
    zIndex:-1000
    
  }
})
