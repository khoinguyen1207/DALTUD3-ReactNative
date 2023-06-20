import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    ImageSourcePropType,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Idea, New_Special, TitleNew, Home} from '../../Data/Data';
import {
    faCalendarDays,
    faStarAndCrescent,
    faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Icon} from 'react-native-vector-icons/Icon';

export default function HomeBody() {
    const [Active, setActive] = useState(1);
    const [New, SetNew] = useState(1);
    const [SaveView, SetSaveView] = useState(New_Special);
    var Title;
    const New_Titel = (item: number) => {
        setActive(item);
        if (item == 1) {
            Title = New_Special;
            SetSaveView(Title);
        } else if (item == 2) {
            Title = Home;
            SetSaveView(Title);
        } else {
            Title = Home;
            SetSaveView(Title);
        }
    };
    return (
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
            <View style={{paddingHorizontal: 15, marginBottom: 15}}>
                <Text style={style.Text}>Gợi ý cho Ngọc Tiến : </Text>
                <FlatList
                    style={{overflow: 'hidden'}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={Idea}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        return (
                            <View
                                style={{
                                    marginTop: 10,
                                    marginRight: 10,
                                    width: 150,
                                }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 150,
                                        borderRadius: 10,
                                        flexShrink: 0,
                                    }}
                                    source={item.Img}
                                />
                                <View style={{padding: 2, flex: 1}}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: '900',
                                            flex: 1,
                                        }}>
                                        {item.Name}
                                    </Text>
                                    <Text>{item.Price}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        backgroundColor: '#FFF2D9',
                                        padding: 5,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#E57905',
                                            fontWeight: '900',
                                        }}>
                                        Chọn
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={{paddingHorizontal: 15}}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                    <Text style={[style.Text]}>Khám phá thêm</Text>
                    <FontAwesomeIcon
                        icon={faWandMagicSparkles}
                        color="#F5E03B"
                        size={23}
                        style={{marginLeft: 5, alignItems: 'center'}}
                    />
                </View>
                <View>
                    <FlatList
                        style={{overflow: 'hidden', marginBottom: 10}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={TitleNew}
                        keyExtractor={item => String(item.id)}
                        renderItem={({item}) => {
                            const ActiveColor = item.id == Active;
                            return (
                                <TouchableOpacity
                                    onPress={() => New_Titel(item.id)}
                                    style={[
                                        style.Btn_TitleNew,
                                        {
                                            backgroundColor: ActiveColor
                                                ? '#FFF2D9'
                                                : 'white',
                                        },
                                    ]}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: ActiveColor
                                                ? '#E57905'
                                                : 'black',
                                            fontWeight: 'bold',
                                        }}>
                                        {item.Title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }}>
                    {SaveView.map(name => {
                        return (
                            <View style={style.New}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 150,
                                        marginBottom: 10,
                                        borderRadius: 20,
                                    }}
                                    source={name.Img}
                                    resizeMode="cover"
                                />
                                <View>
                                    <Text
                                        numberOfLines={2}
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: 'black',
                                            textTransform: 'uppercase',
                                        }}>
                                        {name.Name}
                                    </Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                        />
                                        <Text style={{marginLeft: 5}}>
                                            {name.Date}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
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
        fontSize: 18,
        fontWeight: '900',
        color: 'black',
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
    Btn_TitleNew: {
        marginHorizontal: 2,
        padding: 10,
        borderRadius: 30,
    },
    New: {
        width: 170,
        borderRadius: 20,
        marginHorizontal: 2,
        marginBottom: 10,
    },
});
