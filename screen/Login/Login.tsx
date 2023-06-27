/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Alert,
    ImageBackground,
} from 'react-native';

function Login(): JSX.Element {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                            source={{
                                uri: 'https://file.hstatic.net/1000075078/file/thecofeehouse_nguocgochibiscus_5_d775e20255c744ac9b71cee56cb21536_grande.jpg',
                            }}
                            resizeMode="cover"
                            style={{alignItems: 'center', flex: 1}}>
                            <Text style={styles.textTitle}>Coffee House</Text>
                        </ImageBackground>
                        <View style={styles.content}>
                            <View style={styles.groupInput}>
                                <Text style={styles.titleInput}>Email</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                />
                            </View>
                            <View style={styles.groupInput}>
                                <Text style={styles.titleInput}>Mật khẩu</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Mật khẩu"
                                    secureTextEntry
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    Alert.alert(
                                        'Thông báo',
                                        'Đăng nhập thành công',
                                        [
                                            {
                                                text: 'OK',
                                                onPress: () =>
                                                    console.log('OK Pressed'),
                                            },
                                        ],
                                    )
                                }>
                                <Text style={styles.buttonTitle}>
                                    Đăng nhập
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.navigateSignin}>
                                <Text style={{fontSize: 16}}>
                                    Chưa có tài khoản?
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.textRegister}>
                                        Đăng ký
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    textTitle: {
        color: 'white',
        marginTop: 50,
        fontSize: 50,
        fontWeight: 'bold',
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginTop: -20,
        borderRadius: 20,
    },
    groupInput: {
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'white',
    },
    titleInput: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#E57905',
        paddingVertical: 10,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    navigateSignin: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    textRegister: {
        marginLeft: 5,
        color: '#E57905',
        fontSize: 16,
    },
});

export default Login;
