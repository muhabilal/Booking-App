import {Heading, Stack, Text} from 'native-base';
import React from 'react';
import Swiper from 'react-native-swiper';
import StartingScreen from '../Components/StartingScreen';
const Splash = ({navigation}) => {
  return (
    <Swiper loop={false}>
      <Stack>
        <StartingScreen
          nav={() => navigation.navigate('First')}
          picture={require('../assests/TrackingMaps.png')}
          text_heading="Nearby restaurants"
          text_description="You don't have to go far to find a good restaurant,
           we have provided all the restaurants that is 
                        near you"
        />
      </Stack>
      <Stack>
        <StartingScreen
          nav={() => navigation.navigate('First')}
          picture={require('../assests/Orderillustration.png')}
          text_heading="Select the Favorites Menu"
          text_description="Now eat well, don't leave the house,You can 
                        choose your favorite food only with 
                                 one click"
        />
      </Stack>
      <Stack>
        <StartingScreen
          nav={() => navigation.navigate('First')}
          picture={require('../assests/SafeFood.png')}
          text_heading="Good food at a cheap price"
          text_description="You can eat at expensive restaurants with
                             affordable price"
        />
      </Stack>
    </Swiper>
  );
};

export default Splash;
