import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Setting from '../Setting/Setting';
import Order from '../Order/Order';
import Promo from '../Promo/Promo';
import {
    faBars,
    faHouse,
    faHouseChimney,
    faMugHot,
    faTicket,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

// Screen names
const homeName = 'Trang chủ';
const settingName = 'Khác';
const orderName = 'Đặt hàng';
const promoName = 'Ưu đãi';

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={orderName}>
                <Tab.Screen
                    name="Trang chủ"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                            <View style={style.container}>
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    color={focused ? '#E57905' : '#DDDDDD'}
                                    size={25}
                                />
                                <Text
                                    style={[
                                        style.fontText,
                                        {
                                            color: focused
                                                ? '#E57905'
                                                : '#DDDDDD',
                                        },
                                    ]}>
                                    {homeName}
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Đặt hàng"
                    component={Order}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                            <View style={style.container}>
                                <FontAwesomeIcon
                                    icon={faMugHot}
                                    color={focused ? '#E57905' : '#DDDDDD'}
                                    size={25}
                                />
                                <Text
                                    style={[
                                        style.fontText,
                                        {
                                            color: focused
                                                ? '#E57905'
                                                : '#DDDDDD',
                                        },
                                    ]}>
                                    {orderName}
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Ưu đãi"
                    component={Promo}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                            <View style={style.container}>
                                <FontAwesomeIcon
                                    icon={faTicket}
                                    color={focused ? '#E57905' : '#DDDDDD'}
                                    size={25}
                                />
                                <Text
                                    style={[
                                        style.fontText,
                                        {
                                            color: focused
                                                ? '#E57905'
                                                : '#DDDDDD',
                                        },
                                    ]}>
                                    {promoName}
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Khác"
                    component={Setting}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                            <View style={style.container}>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    color={focused ? '#E57905' : '#DDDDDD'}
                                    size={25}
                                />
                                <Text
                                    style={[
                                        style.fontText,
                                        {
                                            color: focused
                                                ? '#E57905'
                                                : '#DDDDDD',
                                        },
                                    ]}>
                                    {settingName}
                                </Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#737EB2',
    },
    fontText: {
        fontWeight: 'normal',
    },
});
