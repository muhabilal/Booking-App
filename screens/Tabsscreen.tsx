import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Details from './Details';
import Booking from './Booking';
import Profile from './Profile';
import {Image} from 'native-base';
// import {Entypo} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              size={size}
              color={color}
              source={require('../assests/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              size={size}
              color={color}
              source={require('../assests/booking.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              size={size}
              color={color}
              source={require('../assests/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabScreen() {
  return <MyTabs />;
}
