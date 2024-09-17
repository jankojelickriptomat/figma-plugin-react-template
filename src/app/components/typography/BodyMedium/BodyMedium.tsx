import { Text } from '@chakra-ui/react';
import React from 'react';

const BodyMedium = ({ text, style }: TextProps) => {
  return <Text style={style}>{text}</Text>;
};

export default BodyMedium;

export interface TextProps {
  text: string;
  style?: React.CSSProperties;
}
