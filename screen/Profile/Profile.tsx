/* eslint-disable react-native/no-inline-styles */
import {
    faBell,
    faCartShopping,
    faChevronRight,
    faFileLines,
    faGear,
    faRightFromBracket,
    faTicket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

function Profile(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.statusBar}>
                <Text
                    style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                    Khác
                </Text>
                <View style={styles.groupVoucher}>
                    <TouchableOpacity
                        style={[styles.btnVoucher, {marginRight: 10}]}>
                        <FontAwesomeIcon
                            icon={faTicket}
                            style={{
                                marginRight: 5,
                                padding: 10,
                                color: 'orange',
                            }}
                        />
                        <Text style={{color: 'black'}}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnNotice}>
                        <FontAwesomeIcon icon={faBell} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.titleText}>Tiện ích</Text>
                <TouchableOpacity style={styles.btnUtil}>
                    <FontAwesomeIcon
                        icon={faFileLines}
                        style={{
                            padding: 12,
                            color: 'orange',
                            marginBottom: 10,
                        }}
                    />
                    <Text style={styles.textSection}>Lịch sử đơn hàng</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15,
                        marginBottom: 30,
                    }}>
                    <TouchableOpacity
                        style={[styles.btnUtil, {flex: 1, marginRight: 40}]}>
                        <FontAwesomeIcon
                            icon={faTicket}
                            style={{
                                padding: 12,
                                color: 'green',
                                marginBottom: 10,
                            }}
                        />
                        <Text style={styles.textSection}>Voucher</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnUtil, {flex: 1}]}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{
                                color: 'purple',
                                padding: 12,
                                marginBottom: 10,
                            }}
                        />
                        <Text style={styles.textSection}>Giỏ hàng</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titleText}>Tài Khoản</Text>
                <View style={styles.contentView}>
                    <TouchableOpacity style={styles.sectionView}>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{marginRight: 10}}
                        />
                        <Text style={styles.textSection}>
                            Thông tin cá nhân
                        </Text>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            style={styles.chevron}
                            size={12}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionView}>
                        <FontAwesomeIcon
                            icon={faGear}
                            style={{marginRight: 10}}
                        />
                        <Text style={styles.textSection}>Cài đặt</Text>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            style={styles.chevron}
                            size={12}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionView}>
                        <FontAwesomeIcon
                            icon={faRightFromBracket}
                            style={{marginRight: 10}}
                        />
                        <Text style={styles.textSection}>Đăng xuất</Text>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            style={styles.chevron}
                            size={12}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    body: {
        backgroundColor: '#efefef',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    groupVoucher: {
        flexDirection: 'row',
    },
    btnVoucher: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    btnNotice: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    titleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    contentView: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,

        elevation: 1,
    },
    sectionView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 15,
        alignItems: 'center',
    },
    textSection: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
    },
    arrowIcon: {
        position: 'absolute',
        right: 0,
    },
    btnUtil: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,

        elevation: 1,
    },
    chevron: {
        position: 'absolute',
        right: 0,
    },
});

export default Profile;
