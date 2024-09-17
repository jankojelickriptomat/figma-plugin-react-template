import { Text } from '@chakra-ui/react';
import React from 'react';
import { TextProps } from '../BodyMedium/BodyMedium';

const H1 = ({ text, style }: TextProps) => {
  return (
    <Text fontSize={22} fontWeight={600} lineHeight={26} style={style}>
      {text}
    </Text>
  );
};

export default H1;
