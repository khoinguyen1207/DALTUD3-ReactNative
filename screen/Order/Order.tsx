import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-svg';
import Header_Order from '../Header/Header_Order';
import BodyOrder from './BodyOrder';

function Order() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <SafeAreaView style={{flex: 1}}>
                <Header_Order />
                <ScrollView>
                    <BodyOrder />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
export default Order;
