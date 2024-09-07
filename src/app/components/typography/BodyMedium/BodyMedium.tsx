import { Text } from '@chakra-ui/react';
import React from 'react';

const BodyMedium = ({ text, style }: Props) => {
  return <Text style={style}>{text}</Text>;
};

export default BodyMedium;

interface Props {
  text: string;
  style?: React.CSSProperties;
}
