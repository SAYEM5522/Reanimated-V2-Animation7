import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Product from './Product'
import ProductDetails from './ProductDetails'
import { Item } from './Data'

const ProductList = () => {
  const translationY = useSharedValue(0);
 
const AnimatedFlatList=Animated.createAnimatedComponent(FlatList);
const scrollHandler = useAnimatedScrollHandler((event) => {
  translationY.value = event.contentOffset.y;
  
});
const renderItem=({item,index})=>{
  return(
    <View>
     {
        (index==0)?<ProductDetails translationY={translationY}/>:<Product />
     }
    </View>
  )
}
  return (
    <View style={styles.Container}>
      <AnimatedFlatList
      data={Item}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  Container:{
    top:-5
  }
})
