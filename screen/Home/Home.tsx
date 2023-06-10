import React from 'react';
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
import Coffe from '../../Data/Data.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemCoffe from '../../Data/Data.js';

export default function Home() {
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
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Coffe}
                        keyExtractor={item => item.id}
                        style={styles.List_Tilte}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity>
                                    <Text>{item.Titel}</Text>
                                </TouchableOpacity>
                            );
                        }}></FlatList>
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
    },
});
