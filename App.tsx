/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screen/Login/Login';
import Register from './src/screen/Register/Register';
import TabNavigate from './src/screen/TabNavigate/TabNavigate';
import OrderHistory from './src/screen/OrderHistory/OrderHistory';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='TabNavigate' component={TabNavigate} />
                <Stack.Screen name='OrderHistory' component={OrderHistory} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
