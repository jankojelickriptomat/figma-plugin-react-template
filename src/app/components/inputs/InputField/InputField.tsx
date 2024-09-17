import { Box, Input } from '@chakra-ui/react';
import React from 'react';
import { LIGHT_THEME_COLORS } from '../../../constants/colors';
import { BORDER_RADIUS } from '../../../constants/styles';
import BodyMedium from '../../typography/BodyMedium/BodyMedium';

const InputField = ({ title, placeholder, onChange, value }: Props) => {
  return (
    <Box>
      <BodyMedium text={title} style={{ lineHeight: 3 }} />
      <Input
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        value={value}
        placeholder={placeholder}
        borderWidth={1}
        borderColor={LIGHT_THEME_COLORS.neutral200}
        borderRadius={BORDER_RADIUS}
        backgroundColor={LIGHT_THEME_COLORS.white}
        height={12}
        width={300}
        focusBorderColor={'common.mainPurple200'}
        style={{ bottom: 15 }}
      />
    </Box>
  );
};

export default InputField;

interface Props {
  title: string;
  onChange?: (txt: string) => void;
  placeholder?: string;
  value: string;
}
