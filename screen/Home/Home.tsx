import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TitleCoffe, coffeeItems} from '../../Data/Data';
import Carousel from 'react-native-snap-carousel';

export default function Home() {
    const [ActiveBtn, setActiveBtn] = useState(1);
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar />
            <Image
                source={require('../../assets/beansBackground1.png')}
                style={[styles.Img, {height: 180}]}
            />
            <SafeAreaView style={{flex: 1, marginTop: 5}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                    }}>
                    <Image
                        source={require('../../assets/avatar.png')}
                        style={{width: 36, height: 36, borderRadius: 50}}
                    />
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            <Icon name="map-pin" size={25} color="#C29363" />
                        </Text>
                        <Text
                            style={{
                                marginLeft: 10,
                                fontSize: 18,
                                lineHeight: 24,
                                fontWeight: 'bold',
                            }}>
                            2941 New York
                        </Text>
                    </View>
                    <Text>
                        <Icon name="bell" size={25} color="#C29363" />
                    </Text>
                </View>
                <View style={styles.Search_Bar}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <TextInput
                            placeholder="Search"
                            style={styles.Textinput}
                        />
                        <TouchableOpacity
                            style={{
                                borderRadius: 50,
                                padding: 10,
                                backgroundColor: '#C29363',
                            }}>
                            <Text>
                                <Icon name="search" size={25} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.List_Tilte}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={TitleCoffe}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            let ActiveColor = Number(item.id) == ActiveBtn;
                            return (
                                <TouchableOpacity
                                    onPress={() =>
                                        setActiveBtn(Number(item.id))
                                    }
                                    style={{
                                        padding: 18,
                                        marginLeft: 5,
                                        backgroundColor: ActiveColor
                                            ? '#C29363'
                                            : '#E2E0E2',
                                        borderRadius: 50,
                                    }}>
                                    <Text
                                        style={{
                                            color: ActiveColor
                                                ? 'white'
                                                : 'black',
                                            fontWeight: 'bold',
                                        }}>
                                        {item.Titel}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}></FlatList>
                </View>
                {/* Card  */}
                <View style={{marginTop: 64, paddingBottom: 8, paddingTop: 8}}>
                    <Carousel
                        containerCustomStyle={{overflow: 'visible'}}
                        data={coffeeItems}
                        renderItem={({item}) => {
                            return (
                                <View
                                    style={{
                                        borderRadius: 40,
                                        height: 350,
                                        width: 250,
                                        backgroundColor: '#83491A',
                                    }}>
                                    <View
                                        style={[
                                            styles.Card,
                                            {
                                                shadowColor: 'black',
                                                shadowRadius: 30,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 40,
                                                },
                                                shadowOpacity: 0.8,
                                            },
                                        ]}>
                                        <Image
                                            style={{width: 150, height: 150}}
                                            source={item.image}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 20,
                                            marginTop: 20,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 30,
                                                lineHeight: 36,
                                                color: 'white',
                                                zIndex: 10,
                                            }}>
                                            {item.name}
                                        </Text>
                                        <View
                                            style={{
                                                backgroundColor:
                                                    'rgba(255,255,255,0.2)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                borderRadius: 36,
                                                padding: 4,
                                                paddingHorizontal: 8,
                                                width: 64,
                                            }}>
                                            <Text>
                                                <Icon
                                                    name="star"
                                                    size={15}
                                                    color="white"
                                                />
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    lineHeight: 24,
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                }}>
                                                {item.stars}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: 10,
                                            }}>
                                            <Text
                                                style={{
                                                    marginLeft: 5,
                                                    fontSize: 18,
                                                    color: 'white',
                                                }}>
                                                Size :
                                            </Text>
                                            <TouchableOpacity
                                                style={styles.Btn_Size_Card}>
                                                <Text>S</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.Btn_Size_Card}>
                                                <Text>M</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginTop: 15,
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    color: 'white',
                                                }}>
                                                $ {item.price}
                                            </Text>
                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: 'white',
                                                    padding: 10,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 999,
                                                }}>
                                                <Text>
                                                    <Icon
                                                        name="plus"
                                                        size={25}
                                                        color="#83491A"
                                                    />
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                        firstItem={1}
                        inactiveSlideOpacity={0.5}
                        inactiveSlideScale={0.77}
                        sliderWidth={400}
                        itemWidth={260}
                        slideStyle={{display: 'flex', alignItems: 'center'}}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    Img: {
        width: '100%',
        opacity: 0.3,
        position: 'absolute',
    },
    Search_Bar: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    Textinput: {
        flex: 1,
        padding: 10,
        color: 'black',
        backgroundColor: '#E2E0E2',
        borderRadius: 50,
        width: '100%',
    },
    List_Tilte: {
        marginTop: 30,
        paddingLeft: 15,
        marginRight: 2,
    },
    Card: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Btn_Size_Card: {
        backgroundColor: '#fff',
        padding: 7,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginLeft: 5,
    },
});
