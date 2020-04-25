import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

import ProductItem from '../components/productItem';
import HeaderButton from '../components/customHeaderButton'



const productOverViewScreen=props=>{
    const renderItemHandler=(itemData)=>{
        return <ProductItem title={itemData.item.title}
                    image={itemData.item.imageUrl}
                    price={itemData.item.price}
                    onAddToCart={()=>{console.log("ADD TO CART")}}
                    ViewDetails={()=>{console.log('View Details')}}
                    changeScreen={()=>{props.navigation.navigate({routeName:'ProductDetail',params:{
                        id:itemData.item.id,
                        title:itemData.item.title
                    }})}}
        
        ></ProductItem>
    }
    const products=useSelector(state=>state.product.availableProducts)
    return <FlatList data={products} keyExtractor={item=>item.id} renderItem={renderItemHandler}></FlatList>
}
 
productOverViewScreen.navigationOptions={
    headerTitle:'All Products',
    headerRight:()=><HeaderButtons  HeaderButtonComponent={HeaderButton}>
        <Item title="cart" iconName='md-cart' onPress={()=>{}}></Item>
    </HeaderButtons>
}
const style=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default productOverViewScreen;