import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Item({ item }) {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <View style={[styles.imageContainer, {width}]}>
                <Image
                source={item.image}
                    style={[styles.image]} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    image: {
        width: 450,
        height: 450,
        borderRadius: 450,
        paddingHorizontal: 20,
        objectFit: 'cover'

    },

    content: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontWeight: '700',
        fontSize: 45,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 1
    },

    description: {
        fontWeight: '300',
        fontSize: 20,
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 60,
        letterSpacing: 0.5,
    }
})