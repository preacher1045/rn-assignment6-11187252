import React, { useContext } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { data } from '../data/data';
import { CartContext } from '../components/cartContext'; // Import the CartContext

const Index = ({ navigation }) => {
    const { addToCart } = useContext(CartContext); // Use the addToCart function from the context

    const renderItems = ({ item, index }) => {
        const hasNext = index + 1 < data.length;

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                <TouchableOpacity style={{ flex: 1, marginBottom: 20, marginTop: 10 }} onPress={() => addToCart(item)}>
                    <Image source={item.image} />
                    <Text>{item.title}</Text>
                    <Text style={{color: '#8a8988'}}>{item.subtitle}</Text>
                    <Text style={{color:'#e37622'}}>${item.price}</Text>
                </TouchableOpacity>
                {hasNext && (
                    <TouchableOpacity style={{ flex: 1,  marginBottom: 20, marginTop: 10 }} onPress={() => addToCart(data[index + 1])}>
                        <Image source={data[index + 1].image} />
                        <Text>{data[index + 1].title}</Text>
                        <Text style={{color: '#8a8988'}}>{data[index + 1].subtitle}</Text>
                        <Text style={{color: '#e37622'}}>${data[index + 1].price}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../assets/Menu.png')} />
                <Image source={require('../assets/Logo.png')} />
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Image source={require('../assets/Search.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}>
                        <Image source={require('../assets/shoppingBag.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30
            }}>
                <Text style={{ fontSize: 25, fontWeight: '400' }}>OUR STORY</Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Image source={require('../assets/Listview.png')} style={styles.iconImg} />
                    <Image source={require('../assets/Filter.png')} style={styles.iconImg} />
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={item => item.id.toString()}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20
    },
    iconImg: {
        width: 26,
        height: 24
    },
});

export default Index;
