import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';
import {faBell, faTicket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Swiper from 'react-native-swiper';
import {Idea} from '../../Data/Data';
import HomeBody from '../Home/HomeBody';

export default function Header() {
    return (
        <View style={style.Container}>
            <View style={style.ItemView}>
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../../assets/Images/Logo-removebg-preview.png')}
                />
                <Text style={style.Text}>Ngọc Tiến ơi, Hi-Tea đi!</Text>
            </View>
            <View style={style.ItemView}>
                <TouchableOpacity style={style.Btn_Menu}>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesomeIcon
                            color="#E88C28"
                            size={20}
                            icon={faTicket}
                        />
                        <Text style={[style.Text, {marginLeft: 10}]}>9</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[style.Btn_Menu, {marginLeft: 10}]}>
                    <FontAwesomeIcon color="#F5E03B" size={20} icon={faBell} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    Statusbar_Style: {
        color: 'white',
    },
    Container: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    ItemView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Text: {
        fontSize: 15,
        fontWeight: '900',
    },
    Btn_Menu: {
        padding: 10,
        borderRadius: 50,
        paddingHorizontal: 15,
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Slider: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
});
