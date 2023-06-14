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
    ImageBackground,
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
                    <ImageBackground
                        source={require('../../assets/Images/bg.png')}
                        style={styles.image}
                        resizeMode="cover">
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
                                    />
                                </View>
                                <View style={styles.groupInput}>
                                    <Text style={styles.titleInput}>
                                        Password
                                    </Text>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Password"
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() =>
                                            Alert.alert(
                                                'Notice',
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
                                            LOGIN
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.navigateSignin}>
                                    <Text style={{fontSize: 16}}>
                                        Chưa có tài khoản?
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: '#D27842',
                                            fontSize: 16,
                                        }}>
                                        Đăng ký
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
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
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 40,
    },
    groupInput: {
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    titleInput: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#D27842',
        paddingVertical: 10,
        borderRadius: 20,
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
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
        color: 'black',
    },
});

export default Login;
