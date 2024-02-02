import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen() {

  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding')
    } catch (error) {
      console.log('Error @clearOnboarding', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={clearOnboarding}>
        <Text style={styles.text}>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50
  },

  title: {
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: '500'
  },
  button: {
    backgroundColor: '#FF7B1C',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 99,
  },

  text: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 24,
    letterSpacing: 1
  }
})