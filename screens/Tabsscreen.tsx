import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Details from './Details';
import Booking from './Booking';
import Profile from './Profile';
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
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({color, size}) => (
        //     // <Entypo name="home" size={size} color={color} />
        //   ),
        // }}
      />
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function TabScreen() {
  return <MyTabs />;
}
