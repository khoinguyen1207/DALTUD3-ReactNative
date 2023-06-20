import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Header from '../Header/Header';
import HomeBody from './HomeBody';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <StatusBar
                    backgroundColor={'white'}
                    barStyle={'dark-content'}
                />
                <SafeAreaView style={{flex: 1}}>
                    <Header />
                    <HomeBody />
                </SafeAreaView>
            </View>
        </>
    );
}
