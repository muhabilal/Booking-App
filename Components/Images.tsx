import {Box, FlatList, ScrollView, Text, Row, Image} from 'native-base';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

export default function Images(props: any) {
  const imag = props.imgurl;
  console.log('dausfdks', imag);

  return (
    <Row h={140} m={1}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {imag.map((image: {imgelink: ImageSourcePropType | undefined}) => {
          return <Image source={image.imgelink} />;
        })}
      </ScrollView>
    </Row>
  );
}
