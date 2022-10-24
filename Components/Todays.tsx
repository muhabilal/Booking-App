import React from 'react';
import {Column, Image, Row, ScrollView, Text} from 'native-base';
import {ImageSourcePropType} from 'react-native';

export default function Todays(props: any) {
  const todey = props.todayimages;
  return (
    <Row>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {todey.map(
          (item: {
            today: ImageSourcePropType | undefined;
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            location: ImageSourcePropType | undefined;
            hottel:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <Column bg={'white'} mr={2} borderRadius={10}>
                <Image borderTopRadius={10} source={item.today} />
                <Text fontWeight={'bold'}>{item.name}</Text>
                <Text w={120}>
                  <Image
                    borderRadius={20}
                    size={5}
                    resizeMode="cover"
                    source={item.location}
                    alt="Dash Board Image"
                  />
                  {item.hottel}
                </Text>
              </Column>
            );
          },
        )}
      </ScrollView>
    </Row>
  );
}
