import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'


// For Bottom Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()


const TabNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,


                tabBarBackground: (
                    () => (
                        <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
                    ))
            }}>
                <Tab.Screen name='Home' component={HomeScreen} options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='home' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                    )
                }} />

                <Tab.Screen name='Cart' component={CartScreen} options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='cart' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                    )
                }} />

                <Tab.Screen name='Favorite' component={FavoriteScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <CustomIcon name='like' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                        )
                    }} />

                <Tab.Screen name='History' component={OrderHistoryScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <CustomIcon name='bell' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                        )
                    }} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        // paddingBottom: 0,
        marginBottom: -35,
        position: "absolute",
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: "transparent"
    },

    BlurViewStyles: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default TabNavigator
