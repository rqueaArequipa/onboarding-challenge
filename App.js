import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './app/screens/HomeScreen';
import Onboarding from './app/components/Onboarding/Onboarding';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding')
      if (value != null) {
        setViewedOnboarding(true)
      }
    } catch (error) {
      console.log('Error @checkOnboarding', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkOnboarding()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? <Loading /> : viewedOnboarding ? <HomeScreen /> : <Onboarding />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
