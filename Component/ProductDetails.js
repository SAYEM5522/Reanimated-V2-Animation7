import React from 'react';
import { Image, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated';

const ProductDetails = ({translationY}) => {
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
    onEnd: (_evt) => {
      Y.value = withSpring(0,config);
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
  const BottomContainerAnimation=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:withSpring(interpolate(Y.value,[0,60],[0,150],Extrapolate.CLAMP),config)
      }],
      height:withSpring(interpolate(Y.value,[0,60],[130,110],Extrapolate.CLAMP),config),
      width:interpolate(Y.value,[0,60],[360,410],Extrapolate.CLAMP),
      top:interpolate(Y.value,[0,60],[-70,-120],Extrapolate.CLAMP),
    }
  })
  const ConTainerAnimation=useAnimatedStyle(()=>{
    return{
      // width:interpolate(translationY.value,[0,100],[360,120],Extrapolate.CLAMP),
      // height:interpolate(translationY.value,[0,100],[130,45],Extrapolate.CLAMP),
      // transform:[{
      //   translateY:interpolate(translationY.value,[0,100],[0,-680],Extrapolate.CLAMP),
      // }],
      zIndex:100
    }
  })
  const BottomListTransForm=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:interpolate(Y.value,[0,60],[0,110],Extrapolate.CLAMP),
      }],
      backgroundColor:interpolateColor(Y.value,[0,70],["rgb(211,211,211)","(0°,0%,100%)"]),
   
    }
  })
  return (
    <>
    <PanGestureHandler onGestureEvent={gestureHandler}>
    
    <Animated.View style={[styles.container,animatedStyle]}>
      <Animated.View style={[styles.ImageContainer,ImageAnimation]}>
      <Animated.Image
      source={{uri:'https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png'}}
      style={[styles.Image,ImageTransForm]}
      />
   
      <StatusBar/>
       </Animated.View>
       <Text style={styles.Title}>FREE METCON 3</Text>
    </Animated.View>
    </PanGestureHandler>
    <Animated.View style={[styles.BottomList,BottomListTransForm]}>
      <Text style={styles.BottomListText1}>Last One</Text>
      <Text style={styles.BottomListText2}>CJ6314-146</Text>
    </Animated.View>
    <Animated.View style={[styles.BottomContainer,BottomContainerAnimation,ConTainerAnimation]}>
      <Text style={styles.BottomContainerText1}>210</Text>
      <Text style={styles.BottomContainerText2}>U160</Text>
      <Image
      source={{uri:'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png'}}
      style={styles.BottomContainerImage}
      />
    </Animated.View>
    </>
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
    zIndex:100,
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
  BottomContainer:{
    width:"84%",
    alignSelf:'center',
    height:130,
    backgroundColor:'black',
    borderRadius:36,
    marginBottom:-55,
    // position: 'absolute', 
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0, 
   
  },
  BottomContainerText1:{
    color:'white',
    left:25,
    top:20,
    
  },
  BottomContainerText2:{
    color:'white',
    fontSize:28,
    fontWeight:'900',
    top:20,
    left:20
  },
  BottomList:{
    height:110,
    width:'84%',
    backgroundColor:'lightgray',
    alignSelf:'center',
    top:-40,
    borderTopLeftRadius:36,
    borderTopRightRadius:36,
   
    
  },
  BottomListText1:{
    color:'gray',
    fontSize:16,
    fontWeight:'bold',
    left:20,
    top:20,
  
  },
  BottomListText2:{
    left:200,
    color:'gray',
    fontSize:15,
    fontWeight:'bold'
  },
  Title:{
    fontSize:38,
    fontWeight:'bold',
    color:'black',
    width:"65%",
    left:50,
    top:80
  },
  BottomContainerImage:{
    width:120,
    height:70,
    resizeMode:'contain',
    left:220,
    top:-30
  }
})
