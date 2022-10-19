import React from 'react';
import {Row, Pressable, Image, Text, Column} from 'native-base';
export default function HomePress(props: any) {
  const cmp = props.token;
  const txt = props.wriiten;
  const news = props.newse;
  const list = props.foodlist;
  const all = props.seeall;
  console.log('sdfa', all);

  return (
    <Row
      justifyContent={'space-between'}
      my={3}
      alignItems={'center'}
      bg={'white'}
      borderRadius={20}>
      <Column>
        <Text style={{fontWeight: 'bold'}}>{news}</Text>
        <Text>{list}</Text>
      </Column>
      <Text>{all}</Text>
      <Pressable onPress={() => console.log("I'm Pressed")}>
        <Image
          size={5}
          resizeMode="cover"
          source={cmp}
          alt="Dash Board Image"
        />
      </Pressable>
      <Text>{txt}</Text>
    </Row>
  );
}
