import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ProductOverviewScreen from '../screens/productOverViewScreen'
import ProductDetailScreen from '../screens/productDetailScreen';

const Navigator=createStackNavigator({
    ProductOverview:ProductOverviewScreen,
    ProductDetail:ProductDetailScreen

},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#40148C'
        },
        headerTintColor:'white'

    }
})
//#C2185B
//#FFC107

export default createAppContainer(Navigator)