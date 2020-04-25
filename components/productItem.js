import React from 'react';
import {View,StyleSheet,Text,Image,Button,TouchableWithoutFeedback} from 'react-native';

const ProductItem=props=>{

       return <TouchableWithoutFeedback onPress={props.changeScreen}><View style={style.card}>
            <Image style={style.image}source={{uri:props.image}}/>
            <Text style={style.title}>{props.title}</Text>
            <Text style={style.price}>{props.price.toFixed(2)}</Text>
            <View style={style.btn}>
                <Button color='#40148C' title='View Details' onPress={props.ViewDetails}></Button>
                <Button color="#40148C"title="Add To Cart" onPress={props.AddToCart}></Button>

            </View>
        </View>
        </TouchableWithoutFeedback>
}

const style=StyleSheet.create({
        card:{
           shadowColor:'black',
           shadowOffset:{width:20,height:20},
           shadowOpacity:0.5,
           shadowRadius:15,
           elevation:5, 
           margin:20,
           backgroundColor:'white',
           borderRadius:5,
           overflow:'hidden',
          
        },
        image:{
            width:'100%',
            height:200,
         
        },
        title:{
            textAlign:'center',
            fontFamily:'open-sans-bold',
            fontSize:22,

        },
        price:{
            textAlign:'center',
            fontFamily:'open-sans-bold',
            fontSize:18,
            color:'green'
        },
        btn:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginVertical:10
        }
})

export default ProductItem;