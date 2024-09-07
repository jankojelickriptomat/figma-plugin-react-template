import React from 'react';
import { LIGHT_THEME_COLORS } from '../../../constants/colors';

const Cta = ({ title, onClick, disabled }: Props) => {
  const onClickMe = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onclick();
  };

  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor: LIGHT_THEME_COLORS.mainPurple200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
      }}
      onClick={onClickMe}
    >
      <h3>{title}</h3>
    </button>
  );
};

export default Cta;

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}
