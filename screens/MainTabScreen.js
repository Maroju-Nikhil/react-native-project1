import React from 'react';

import HomeScreen from './HomeScreen.js';
import DetailsScreen from './DetailsScreen.js';
import ExploreScreen from './ExploreScreen.js';
import ContactScreen from './ContactScreen.js';
import { Entypo , MaterialIcons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#ffffff"
            style={{ backgroundColor: '#ffffff' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor : '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor : '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="details" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStackScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor : '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="explore" size={24} color={color} />
                    ),
                }}
            />
             <Tab.Screen
                name="Contact"
                component={ContactStackScreen}
                options={{
                    tabBarLabel: 'Contact',
                    tabBarColor : '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#009387' },
            headerTintColor: '#ffffff',
            headerTitleStyle: { fontWeight: 'bold' ,fontFamily: "sans-serif-condensed"}
        }} >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <Entypo
                            name="menu"
                            size={24}
                            color="white"
                            backgroundColor="#009387"
                            onPress={() => navigation.openDrawer()}
                            style = {{marginLeft : 10}}
                        />
                    )
                }}
            />
        </HomeStack.Navigator>
    );
}

const DetailsStackScreen = ({ navigation }) => {
    return (
        <DetailsStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#009387' },
            headerTintColor: '#ffffff',
            headerTitleStyle: { fontWeight: 'bold',fontFamily: "sans-serif-condensed" }
        }} >
            <DetailsStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerLeft: () => (
                        <Entypo
                            name="menu"
                            size={24}
                            color="white"
                            backgroundColor="#009387"
                            onPress={() => navigation.openDrawer()}
                            style = {{marginLeft : 10}}
                        />
                    )
                }}
            />
        </DetailsStack.Navigator>
    );
}

const ExploreStackScreen = ({ navigation }) => {
    return (
        <ExploreStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#009387' },
            headerTintColor: '#ffffff',
            headerTitleStyle: { fontWeight: 'bold' ,fontFamily: "sans-serif-condensed"}
        }} >
            <ExploreStack.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerLeft: () => (
                        <Entypo
                            name="menu"
                            size={24}
                            color="white"
                            backgroundColor="#009387"
                            onPress={() => navigation.openDrawer()}
                            style = {{marginLeft : 10}}
                        />
                    )
                }}
            />
        </ExploreStack.Navigator>
    );
}

const ContactStackScreen = ({ navigation }) => {
    return (
        <ContactStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#009387' },
            headerTintColor: '#ffffff',
            headerTitleStyle: { fontWeight: 'bold' ,fontFamily: "sans-serif-condensed"}
        }} >
            <ContactStack.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    headerLeft: () => (
                        <Entypo
                            name="menu"
                            size={24}
                            color="white"
                            backgroundColor="#009387"
                            onPress={() => navigation.openDrawer()}
                            style = {{marginLeft : 10}}
                        />
                    )
                }}
            />
        </ContactStack.Navigator>
    );
}

export default MainTabScreen;