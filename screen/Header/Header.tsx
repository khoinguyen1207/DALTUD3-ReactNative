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

const Idea = [
    {
        id: '1',
        Img: require('../assets/trasen.jpg'),
        Name: 'Trà đào Cam Sả - Đá',
        Price: '59.000đ',
    },
    {
        id: '2',
        Img: require('../assets/trasen.jpg'),
        Name: 'Trà đào Cam Sả - Đá',
        Price: '59.000đ',
    },
    {
        id: '3',
        Img: require('../assets/trasen.jpg'),
        Name: 'Trà đào Cam Sả - Đá',
        Price: '59.000đ',
    },
    {
        id: '4',
        Img: require('../assets/trasen.jpg'),
        Name: 'Trà đào Cam Sả - Đá',
        Price: '59.000đ',
    },
    {
        id: '5',
        Img: require('../assets/trasen.jpg'),
        Name: 'Trà đào Cam Sả - Đá',
        Price: '59.000đ',
    },
    {
        id: '6',
        Img: require('assets/trasen.jpg'),
        Name: 'Trà đào Cam Sả - Đá',
        Price: '59.000đ',
    },
];
export default function Header() {
    return (
        <View style={{flex: 1}}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <SafeAreaView style={{flex: 1}}>
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
                                <Text style={[style.Text, {marginLeft: 10}]}>
                                    9
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[style.Btn_Menu, {marginLeft: 10}]}>
                            <FontAwesomeIcon
                                color="#F5E03B"
                                size={20}
                                icon={faBell}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View
                        style={{
                            paddingHorizontal: 15,
                            marginTop: 10,
                            height: 200,
                        }}>
                        <Swiper
                            loop
                            autoplay
                            dot={
                                <View
                                    style={{
                                        width: 15,
                                        height: 1,
                                        backgroundColor: 'gray',
                                        marginLeft: 5,
                                    }}
                                />
                            }
                            activeDot={
                                <View
                                    style={{
                                        width: 15,
                                        height: 1,
                                        backgroundColor: 'black',
                                        marginLeft: 5,
                                    }}
                                />
                            }>
                            <Image
                                style={[style.Slider]}
                                source={require('../../assets/Images/Slider1.jpg')}
                            />
                            <Image
                                style={[style.Slider]}
                                source={require('../../assets/Images/Slider2.jpg')}
                            />
                            <Image
                                style={[style.Slider]}
                                source={require('../../assets/Images/Slider3.jpg')}
                            />
                        </Swiper>
                    </View>
                    <View style={{paddingHorizontal: 15}}>
                        <Text style={style.Text}>Gợi ý cho Ngọc Tiến : </Text>
                        <FlatList
                            horizontal={true}
                            data={Idea}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => {
                                console.log(item.Img);
                                return (
                                    <View style={{width: 10}}>
                                        <Image
                                            style={{width: 50, height: 50}}
                                            source={item.Img}
                                        />
                                        <View>
                                            <Text>{item.Name}</Text>
                                            <Text>{item.Price}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Text>Chọn</Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
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
