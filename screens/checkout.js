import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { CartContext } from '../components/cartContext'; // Import the CartContext

const CheckOut = () => {
    const { cart, removeFromCart } = useContext(CartContext); // Use the cart and removeFromCart functions from the context

    // Calculate the total price, ensuring it defaults to 0 if the cart is empty
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.subtitle}</Text>
                    <Text style={{color: '#e37622'}}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Image source={require('../assets/remove.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 120 }}>
                    <Image source={require('../assets/Logo.png')} />
                    <Image source={require('../assets/Search.png')} />
                </View>
                <View style={{ marginTop: 35 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}>CHECKOUT</Text>
                </View>

                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    style={{ marginTop: 20 }}
                />

                <View style={styles.totalContainer}>
                    <Text>EST. TOTAL</Text>
                    <Text style={{color: '#e37622'}}>${totalPrice.toFixed(2)}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
                <Image source={require('../assets/shoppingBag.png')} />
                <Text style={{ color: '#fff' }}>CHECKOUT</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 60
    },
    cartItem: {
        flexDirection: 'row',
        marginBottom: 20
    },
    itemImage: {
        width: 100,
        height: 100
    },
    itemDetails: {
        flex: 1,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    removeItem: {
        color: 'red',
        marginTop: 10
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ccc',
        position: 'relative',
        bottom: '18%'
    },
    checkoutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
    }
});

export default CheckOut;
