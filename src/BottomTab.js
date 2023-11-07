import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Leagues from './Screens/Leagues';
import Research from './Screens/Research';
import Leaderboard from './Screens/Leaderboard';
import Profile from './Screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6231AD' ,tabBarStyle: { height:60,alignItems:'center',paddingBottom:10,}}}>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                )
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="trophy" color={color} size={size-5} />
                )
            }} name="Leagues" component={Leagues} />
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="search" color={color} size={size} />
                )
            }} name="Research" component={Research} />
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="bar-chart" color={color} size={size+6} />
                )
            }} name="Leaderboard" component={Leaderboard} />
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }} name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})