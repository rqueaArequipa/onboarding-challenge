import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'

export default function NextButton({ scrollTo }) {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, {width}]}>
            <TouchableOpacity style={styles.button} onPress={scrollTo}>
                <Text style={styles.text}>Suivant</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        alignItems: 'flex-end',
    },

    button: {
        backgroundColor: '#FF7B1C',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 99,
        marginTop: 50,
        marginRight: 60,
    },

    text: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 24,
        letterSpacing: 1
    }
})