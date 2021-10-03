import React from 'react';
import { Image, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import ProductDetails from './Component/ProductDetails';
import ProductList from './Component/ProductList';
export default function App() {

  return (
    <>
   <ProductList/>
    </>
  );
}

const styles = StyleSheet.create({


});
