import React from 'react';
import { LIGHT_THEME_COLORS } from '../../../constants/colors';
import { Button } from '@chakra-ui/react';
import { BORDER_RADIUS } from '../../../constants/styles';

const Cta = ({ title, onClick, disabled }: Props) => {
  const onClickMe = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Button
      disabled={disabled}
      _hover={{ bg: LIGHT_THEME_COLORS.mainPurple300 }}
      color={LIGHT_THEME_COLORS.white}
      backgroundColor={LIGHT_THEME_COLORS.mainPurple200}
      borderWidth={0}
      borderRadius={BORDER_RADIUS}
      alignItems="center"
      justifyContent="center"
      onClick={onClickMe}
      cursor="pointer"
      marginTop={20}
      marginBottom={20}
      width={220}
    >
      <h3>{title}</h3>
    </Button>
  );
};

export default Cta;

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}
