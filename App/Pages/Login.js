import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
    return (
        <View>
            <Image source={require("../Assets/Images/login.png")} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    Help us help you!!
                </Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopStartRadius: 30,
    },
    welcomeText: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
    }
});