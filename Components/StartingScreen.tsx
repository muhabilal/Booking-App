import React from 'react';
import {
  Image,
  Text,
  Stack,
  Row,
  Center,
  Heading,
  Button,
  IconButton,
} from 'native-base';

export default function StartingScreen(props: any) {
  const title_text = props.text_heading;
  const text = props.text_description;
  const img = props.picture;
  const move_screen = props.nav;
  return (
    <>
      <Stack bg={'singletons'} h={600} justifyContent={'center'}>
        <Center px={5}>
          <Image source={img} alt="map" mb={10} />
          <Heading>{title_text}</Heading>
          <Text>{text}</Text>
        </Center>
      </Stack>
      <Row
        px={5}
        h={160}
        bg={'singletons'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Button
          variant={'link'}
          _text={{color: '#4B5563'}}
          onPress={move_screen}>
          Skip
        </Button>
        <IconButton
          icon={<Image alt="img" source={require('../assests/Vector.png')} />}
          borderRadius="full"
          _icon={{
            size: '4',
          }}
          _pressed={{
            bg: 'black:alpha.20',
          }}
        />
      </Row>
    </>
  );
}
