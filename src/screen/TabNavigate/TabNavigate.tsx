import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faBars, faHouse, faMugHot, faTicket} from '@fortawesome/free-solid-svg-icons';

import Home from '../../screen/Home/Home';
import Order from '../../screen/Order/Order';
import Promo from '../../screen/Promo/Promo';
import Profile from '../../screen/Profile/Profile';
import ButtonNavigate from '../../components/ButtonNavigate/ButtonNavigate';

const Tab = createBottomTabNavigator();

function TabNavigate() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: {height: 60, backgroundColor: '#fff'},
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <ButtonNavigate focused={focused} iconName={faHouse} tabName={'Đặt hàng'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Order'
                component={Order}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <ButtonNavigate focused={focused} iconName={faMugHot} tabName={'Đặt hàng'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Voucher'
                component={Promo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <ButtonNavigate focused={focused} iconName={faTicket} tabName={'Ưu đãi'} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => <ButtonNavigate focused={focused} iconName={faBars} tabName={'Khác'} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigate;
