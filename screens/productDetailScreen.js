import React from 'react';
import {View,Text,StyleSheet, Image,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';


const productDetailScreen=props=>{
    const prodId=props.navigation.getParam('id');
    const product=useSelector(state=>state.product.availableProducts.find(prod=>prod.id===prodId));
    return <ScrollView>
        <View style={style.screen}>
            <Image style={style.image} source={{uri:product.imageUrl}}/>
            <View style={style.btn}>
                <Button color='#40148C' title="Add To Cart"></Button>
            </View>
            <Text style={style.price}>{product.price}</Text>
            <View>
                <Text style={style.desc}>{product.description}</Text>
            </View>
        </View>
    </ScrollView>
}
productDetailScreen.navigationOptions=navData=>{
    const title=navData.navigation.getParam('title');
    return {
        headerTitle:title
    }
}
const style=StyleSheet.create({
    screen:{
        margin:10


    },
    image:{
        width:'100%',
        height:300,
        borderRadius:5,
        shadowColor:'black',
           shadowOffset:{width:20,height:20},
           shadowOpacity:0.5,
           shadowRadius:15,
           elevation:5, 
    },
    btn:{
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },
    price:{
        textAlign:'center',
        fontSize:22,
        color:'green',
        fontFamily:'open-sans-bold',
        marginVertical:10
    },
    desc:{
        fontFamily:'open-sans',
        fontSize:15,
        marginHorizontal:5,
        textAlign:'center'
    }
})

export default productDetailScreen;