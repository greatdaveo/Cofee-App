import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import DetailScreen from './src/screens/DetailScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import TabNavigator from './src/navigators/TabNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// For Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const App = () => {
  return (

    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Tab' component={TabNavigator} options={{ animation: "slide_from_bottom" }} />
          <Stack.Screen name='Details' component={DetailScreen} options={{ animation: "slide_from_bottom" }} />
          <Stack.Screen name='Payment' component={PaymentScreen} options={{ animation: "slide_from_bottom" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({})

export default App
