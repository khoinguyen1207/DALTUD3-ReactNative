/* eslint-disable react-native/no-inline-styles */
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function ModelOrder({value, Hide, Show}) {
    return (
        <Modal animationType='fade' transparent={true} visible={value} statusBarTranslucent={true}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'black',
                    opacity: 0.3,
                }}></View>
            <View style={styles.ContentModal}>
                <View style={styles.ContentTop}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        Danh mục
                    </Text>
                    <TouchableOpacity style={styles.BtnIcon} onPress={Hide}>
                        <FontAwesomeIcon size={25} icon={faXmark} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ContentBottom}>
                    <TouchableOpacity style={styles.Contentcontainer}>
                        <View
                            style={{
                                backgroundColor: '#FFF2D9',
                                borderRadius: 100,
                                padding: 10,
                            }}>
                            <Image
                                source={require('../../assets/Images/Coffesearch.png')}
                                style={styles.Image}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={styles.ContentText}>Cà phê</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Contentcontainer}>
                        <View
                            style={{
                                backgroundColor: '#FFF2D9',
                                borderRadius: 100,
                                padding: 10,
                            }}>
                            <Image
                                source={require('../../assets/Images/Coffesearch.png')}
                                style={styles.Image}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={styles.ContentText}>Cà phê</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Contentcontainer}>
                        <View
                            style={{
                                backgroundColor: '#FFF2D9',
                                borderRadius: 100,
                                padding: 10,
                            }}>
                            <Image
                                source={require('../../assets/Images/Coffesearch.png')}
                                style={styles.Image}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={styles.ContentText}>Cà phê</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Contentcontainer}>
                        <View
                            style={{
                                backgroundColor: '#FFF2D9',
                                borderRadius: 100,
                                padding: 10,
                            }}>
                            <Image
                                source={require('../../assets/Images/Coffesearch.png')}
                                style={styles.Image}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={styles.ContentText}>Cà phê</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Contentcontainer}>
                        <View
                            style={{
                                backgroundColor: '#FFF2D9',
                                borderRadius: 100,
                                padding: 10,
                            }}>
                            <Image
                                source={require('../../assets/Images/Coffesearch.png')}
                                style={styles.Image}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={styles.ContentText}>Cà phê</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Contentcontainer}>
                        <View
                            style={{
                                backgroundColor: '#FFF2D9',
                                borderRadius: 100,
                                padding: 10,
                            }}>
                            <Image
                                source={require('../../assets/Images/Coffesearch.png')}
                                style={styles.Image}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={styles.ContentText}>Cà phê</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    ContentModal: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: Dimensions.get('window').height * 0.5,
        maxHeight: Dimensions.get('window').height * 0.5,
        backgroundColor: 'white',
    },
    ContentTop: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        marginBottom: 10,
    },
    BtnIcon: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        alignItems: 'center',
    },
    Image: {
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    ContentBottom: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Contentcontainer: {
        marginLeft: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    ContentText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
});
export default ModelOrder;
