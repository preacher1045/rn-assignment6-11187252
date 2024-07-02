import React from "react";
import {View, Text, Image, StyleSheet} from "react-native"

const Index = () => {
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/Menu.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20
    },
})
export default Index;

