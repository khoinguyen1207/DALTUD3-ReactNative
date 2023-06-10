/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const DATA = [
    {
        id: '1',
        name: 'Trà đào',
        size: 'S',
        quantity: 1,
        price: 65000,
    },
    {
        id: '2',
        name: 'Trà vải',
        size: 'L',
        quantity: 2,
        price: 39000,
    },
    {
        id: '3',
        name: 'Cà phê sữa',
        size: 'M',
        quantity: 1,
        price: 25000,
    },
    {
        id: '4',
        name: 'Trà ô long hạt sen',
        size: 'L',
        quantity: 1,
        price: 69000,
    },
    {
        id: '5',
        name: 'Hồng trà',
        size: 'M',
        quantity: 4,
        price: 45000,
    },
    {
        id: '6',
        name: 'Trà ổi',
        size: 'S',
        quantity: 1,
        price: 52000,
    },
    {
        id: '7',
        name: 'trà sữa trân châu đường đen',
        size: 'S',
        quantity: 3,
        price: 52000,
    },
];

type ItemProps = {
    name: string;
    size: string;
    quantity: number;
    price: number;
};

const Item = (item: ItemProps) => (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity>
                <Image source={require('../../assets/edit.png')} style={styles.btnEdit} />
            </TouchableOpacity>
            <View>
                <Text style={styles.itemName}>
                    {item.quantity}x {item.name}
                </Text>
                <Text>Size: {item.size}</Text>
            </View>
        </View>
        <Text style={styles.textPrice}>{item.price}</Text>
    </View>
);

function StopWatch(): JSX.Element {
    const [selectRadio, setRadio] = useState(1);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleBar}>
                    <TouchableOpacity style={styles.btnBack}>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: '400',
                                color: 'black',
                            }}>
                            Quay về
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Xác nhận đơn hàng</Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.titleGroup}>Sản phẩm đã chọn</Text>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => (
                            <Item
                                name={item.name}
                                size={item.size}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.group}>
                    <Text style={styles.titleGroup}>Tổng cộng</Text>
                    <View style={styles.totalView}>
                        <Text style={styles.textCategory}>Thành tiền</Text>
                        <Text style={styles.textPrice}>185.000</Text>
                    </View>
                    <View style={styles.totalView}>
                        <Text style={styles.textCategory}>Phí giao hàng</Text>
                        <Text style={styles.textPrice}>15.000</Text>
                    </View>
                    <View style={styles.totalView}>
                        <Text
                            style={[styles.textCategory, {fontWeight: 'bold'}]}>
                            Số tiền thanh toán
                        </Text>
                        <Text style={[styles.textPrice, {fontWeight: 'bold'}]}>
                            275.000
                        </Text>
                    </View>
                </View>
                <View style={[styles.group, {marginBottom: 0}]}>
                    <Text style={styles.titleGroup}>Thanh toán</Text>
                    <View>
                        <View style={styles.radioView}>
                            <Text style={styles.radioText}>Momo</Text>
                            <TouchableOpacity onPress={() => setRadio(1)}>
                                <View style={styles.radioWrapper}>
                                    <View style={styles.radio} />
                                    {selectRadio === 1 && (
                                        <View style={styles.radioBg} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.radioView}>
                            <Text style={styles.radioText}>Shoppe Pay</Text>
                            <TouchableOpacity onPress={() => setRadio(2)}>
                                <View style={styles.radioWrapper}>
                                    <View style={styles.radio} />
                                    {selectRadio === 2 && (
                                        <View style={styles.radioBg} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.radioView}>
                            <Text style={styles.radioText}>Ngân hàng</Text>
                            <TouchableOpacity onPress={() => setRadio(3)}>
                                <View style={styles.radioWrapper}>
                                    <View style={styles.radio} />
                                    {selectRadio === 3 && (
                                        <View style={styles.radioBg} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.paymentBar}>
                <Text style={styles.textTotalPrice}>Tổng: 275.000</Text>
                <TouchableOpacity style={styles.btnCheckout}>
                    <Text style={styles.textBtnCheckout}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F1EF',
    },
    title: {
        fontSize: 18,
        color: '#C29363',
        fontWeight: 'bold',
    },
    titleBar: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        position: 'relative',
    },
    btnBack: {
        position: 'absolute',
        left: 0,
        paddingHorizontal: 15,
    },
    group: {
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
    },
    titleGroup: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 6,
        justifyContent: 'space-between',
    },
    textPrice: {
        fontSize: 16,
        color: '#6C7A89',
        alignSelf: 'center',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    btnEdit: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    totalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },
    textCategory: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
    },
    // Radio
    radioText: {
        fontSize: 16,
        color: 'black',
    },
    radioView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    radio: {
        height: 22,
        width: 22,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 12,
    },
    radioBg: {
        backgroundColor: '#C29363',
        height: 14,
        width: 14,
        borderRadius: 10,
        left: 4,
        position: 'absolute',
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    // Payment
    paymentBar: {
        backgroundColor: '#C29363',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    btnCheckout: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
    },
    textTotalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    textBtnCheckout: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C29363',
    },
});
export default StopWatch;
