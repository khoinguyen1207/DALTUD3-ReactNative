/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {faArrowLeft, faMugHot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const categoryList = ['Đang thực hiện', 'Đã hoàn tất', 'Đã hủy'];
const noticeList = ['Chưa có đơn hàng đang thực hiện', 'Chưa có đơn hàng đã hoàn tất', 'Chưa có đơn hàng đã hủy'];

const EmptyComponent = ({item}: {item: string}) => {
    return (
        <View style={styles.emptyView}>
            <FontAwesomeIcon icon={faMugHot} style={{color: 'gray'}} size={40} />
            <Text style={{marginTop: 10}}>{item}</Text>
        </View>
    );
};

function OrderHistory({navigation}: {navigation: any}): JSX.Element {
    const [tab, setTab] = useState('Đang thực hiện');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleBar}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </TouchableOpacity>
                <Text style={styles.title}>Lịch sử đơn hàng</Text>
            </View>
            <View style={styles.lineView} />
            <View style={styles.mainView}>
                <View style={styles.groupNavigate}>
                    {categoryList.map((item) => {
                        return (
                            <TouchableOpacity
                                style={[styles.btnNavigate, tab === item && styles.btnActive]}
                                key={item}
                                onPress={() => setTab(item)}>
                                <Text style={styles.textBtnNavigate}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.contentView}>
                    {noticeList.map((item, index) => {
                        return tab === categoryList[index] && <EmptyComponent item={item} key={item} />;
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    titleBar: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        position: 'relative',
    },
    btnBack: {
        position: 'absolute',
        left: 0,
        paddingHorizontal: 15,
    },
    mainView: {
        padding: 15,
    },
    groupNavigate: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    btnNavigate: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 10,
    },
    textBtnNavigate: {
        color: '#E57905',
    },
    lineView: {
        backgroundColor: 'black',
        height: 0.5,
    },
    contentView: {
        padding: 15,
    },
    emptyView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    btnActive: {
        backgroundColor: 'rgba(229, 121, 5, 0.16)',
    },
});
export default OrderHistory;
