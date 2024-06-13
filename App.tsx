import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import DetailScreen from './src/screens/DetailScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// For Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Tab"
              component={TabNavigator}
              options={{animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              options={{animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
              name="Payment"
              component={PaymentScreen}
              options={{animation: 'slide_from_bottom'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: -35,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
