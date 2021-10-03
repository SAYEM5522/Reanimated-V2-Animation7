import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Product from './Product'
import ProductDetails from './ProductDetails'
const Item=[{
  id:'1',
  img:"https://www.theindependentbd.com/assets/news_images/hgfxf.jpg",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

},
{
  id:'2',
  img:"https://media.istockphoto.com/photos/africanamerican-male-singer-portrait-isolated-on-gradient-studio-in-picture-id1226150009?b=1&k=20&m=1226150009&s=170667a&w=0&h=0pe8s3mEkGlg_5rQmwIxmpSaeyqkz0W0GGJAVaJB_kk=",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

},
{
  id:'3',
  img:"https://www.theindependentbd.com/assets/news_images/hgfxf.jpg",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

},
{
  id:'4',
  img:"https://w0.peakpx.com/wallpaper/962/706/HD-wallpaper-naomi-scott-women-brunette-simple-background-gradient-actress-thumbnail.jpg",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

}]
const renderItem=({item,index})=>{
  return(
    <View>
     {
        (index==0)?<ProductDetails/>:<Product />
     }
    </View>
  )
}

const ProductList = () => {
  return (
    <View>
      <FlatList
      data={Item}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
     
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({

})
