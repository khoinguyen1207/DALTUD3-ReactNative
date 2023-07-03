/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, Image, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Coffe, Tea, Ice} from '../../data/Data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis, faGlassWater, faIceCream, faMugSaucer, faPlus} from '@fortawesome/free-solid-svg-icons';
import ModelOrder from './ModelOrder';

function ListItem({data, Title}: {data: any; Title: string}) {
    return (
        <View style={{marginBottom: 20}}>
            <Text
                style={{
                    fontSize: 22,
                    marginBottom: 15,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                {Title}
            </Text>
            <FlatList
                style={{overflow: 'hidden'}}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.List}>
                            <View style={styles.ListTop}>
                                <View>
                                    <Image
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: 15,
                                        }}
                                        resizeMode='cover'
                                        source={{
                                            uri: item.Img,
                                        }}
                                    />
                                </View>
                                <View style={styles.ListCenter}>
                                    <Text style={{fontSize: 18, color: 'black'}}>{item.Name}</Text>
                                    <Text style={{fontSize: 15}}>{item.Price}</Text>
                                </View>
                            </View>
                            <View style={styles.ListBottom}>
                                <TouchableOpacity style={styles.BtnAdd}>
                                    <FontAwesomeIcon size={15} color='white' icon={faPlus} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}
function ListIcon({Show}: {Show: any}) {
    return (
        <>
            <TouchableOpacity style={styles.Contentcontainer}>
                <View>
                    <Image style={styles.ImgList} source={require('../../../assets/Images/icon01.png')} />
                </View>
                <Text style={styles.ContentText}>Cà phê</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Contentcontainer}>
                <View>
                    <Image style={styles.ImgList} source={require('../../../assets/Images/icon02.png')} />
                </View>
                <Text style={styles.ContentText}>Đá xay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Contentcontainer}>
                <View>
                    <Image style={styles.ImgList} source={require('../../../assets/Images/icon04.png')} />
                </View>
                <Text style={styles.ContentText}>Trà</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Contentcontainer} onPress={Show}>
                <View>
                    <Image style={styles.ImgList} source={require('../../../assets/Images/icon03.png')} />
                </View>
                <Text style={styles.ContentText}>Xem thêm</Text>
            </TouchableOpacity>
        </>
    );
}
function BodyOrder() {
    const [Modal, setModal] = useState(false);
    const show = () => setModal(true);
    const hide = () => setModal(false);
    return (
        <>
            <View style={{flex: 1, paddingHorizontal: 15}}>
                <View style={styles.ContentBottom}>
                    <ListIcon Show={show}></ListIcon>
                </View>
                <View style={styles.ListContainer}>
                    <ListItem data={Coffe} Title={'Cà Phê'} />
                    <ListItem data={Tea} Title={'Trà Trái Cây - Trà Sữa'} />
                </View>
            </View>
            <ModelOrder value={Modal} Hide={hide} />
        </>
    );
}
const styles = StyleSheet.create({
    ContentBottom: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    Contentcontainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContentText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    ImgList: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    ListContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    List: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    ListTop: {
        flexDirection: 'row',
        flex: 1,
    },
    ListCenter: {
        marginLeft: 10,
        flex: 1,
    },
    ListBottom: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BtnAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        padding: 10,
        backgroundColor: '#E57905',
        borderRadius: 50,
    },
});
export default BodyOrder;
