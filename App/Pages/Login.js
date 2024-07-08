import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import colors from '../Shared/colors';

export default function Login() {
    return (
        <View>
            <Image source={require("../Assets/Images/login.png")} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}> Help us help you!! </Text>
                <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 20 }}>Login/Signup</Text>
                <View style={styles.button}>
                    <Text>Sign In With Google</Text>
                </View>
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
    },
    button: {
        backgroundColor: colors.primary,
    }
});