import React from 'react';
import {Pressable, Text, Row, Column, Image, Button} from 'native-base';

export default function Profilecmp(props: any) {
  const cmp = props.token;
  const txt = props.wriiten;
  const news = props.newse;
  const list = props.foodlist;
  const all = props.seeall;
  const icn = props.icon;
  return (
    <Row
      bg={'singletons'}
      shadow={'1'}
      borderRadius={20}
      mt={10}
      w={'95%'}
      p={5}
      alignItems={'center'}>
      <Column>
        <Text style={{fontWeight: 'bold'}}>{news}</Text>
        <Text>{list}</Text>
      </Column>
      <Pressable>
        <Image
          size={10}
          resizeMode="cover"
          source={cmp}
          alt="Dash Board Image"
        />
      </Pressable>
      <Text>{txt}</Text>
      <Pressable pl={'20'}>
        <Image
          size={10}
          resizeMode="cover"
          source={icn}
          alt="Dash Board Image"
        />
      </Pressable>
    </Row>
  );
}
