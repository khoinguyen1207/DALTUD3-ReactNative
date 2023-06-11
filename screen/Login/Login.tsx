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
} from 'react-native';

function Login(): JSX.Element {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <View style={styles.contentContainer}>
                            <View style={{alignItems: 'center', flex: 1}}>
                                <Text style={styles.textTitle}>
                                    Coffee House
                                </Text>
                            </View>
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
                                    <Text style={styles.titleInput}>
                                        Mật khẩu
                                    </Text>
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
                                                        console.log(
                                                            'OK Pressed',
                                                        ),
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
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#C29363',
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
        height: 350,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 40,
    },
    groupInput: {
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 2,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    titleInput: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#C29363',
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
        marginTop: 20,
    },
    textRegister: {
        marginLeft: 5,
        color: '#C29363',
        fontSize: 16,
    },
});

export default Login;
