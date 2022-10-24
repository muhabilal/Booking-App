import React from 'react';
import {
  Row,
  Pressable,
  Image,
  Text,
  Column,
  Box,
  ScrollView,
  Button,
} from 'native-base';
export function HomePress(props: any) {
  const cmp = props.token;
  const txt = props.wriiten;
  const news = props.newse;
  const list = props.foodlist;
  const all = props.seeall;
  const next = props.navigation;
  const siz = props.size;

  return (
    <Row
      my={3}
      alignItems={'center'}
      bg={'white'}
      borderRadius={5}
      justifyContent={'space-between'}>
      <Column justifyContent={'space-between'}>
        <Text style={{fontWeight: 'bold'}}>{news}</Text>
        <Text>{list}</Text>
      </Column>
      <Text>{all}</Text>
      <Pressable onPress={next}>
        <Image
          size={siz}
          resizeMode="cover"
          source={cmp}
          alt="Dash Board Image"
        />
      </Pressable>
      <Text>{txt}</Text>
    </Row>
  );
}

export const BookingHistory = (props: any) => {
  const txt = props.bantxt;
  return (
    <Box
      h={16}
      w={'100%'}
      mb={2}
      bg={'primary.10'}
      borderTopRadius={50}
      borderBottomRadius={30}
      alignItems={'center'}
      justifyContent={'center'}>
      <Text color={'secondary'} fontWeight={'bold'}>
        {txt}
      </Text>
    </Box>
  );
};

export const BookingResturant = (props: any) => {
  const NEWARIVAL = props.newarival;
  const txt = props.btntxt;
  const next = props.navigation;
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {NEWARIVAL.map(item => {
        return (
          <Row
            shadow="1"
            justifyContent={'space-between'}
            bg={'#FFFFFF'}
            borderRadius={10}
            padding={1}
            m={1}>
            <Image borderTopRadius={10} source={item.today} />
            <Column>
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
            <Button
              w={20}
              h={10}
              mt={6}
              bg={'primary.10'}
              borderRadius={10}
              onPress={next}>
              {txt}
            </Button>
          </Row>
        );
      })}
    </ScrollView>
  );
};

export const BookingAddd = () => {
  return (
    <Box
      shadow="1"
      h={20}
      bg={'primary'}
      borderBottomRadius={30}
      alignItems={'center'}
      justifyContent={'center'}>
      <Text color={'secondary'} fontWeight={'bold'}>
        Booking History
      </Text>
    </Box>
  );
};
