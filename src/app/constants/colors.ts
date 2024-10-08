const commonColors = {
  mainPurple30: '#F0EEFE',
  mainPurple50: '#EBE7FF',
  mainPurple200: '#6E52FF',
  mainPurple300: '#4825FF',
  mainPurple400: '#1C01B1',

  mainGreen50: '#E3FFEA',
  mainGreen200: '#37FF68',

  mainPink50: '#FFD8EB',
  mainPink200: '#FF4AA3',

  success100: '#33CC00',
  warning100: '#FFA713',
  warning400: '#874C07',

  danger70: '#FF7171',
  danger100: '#E50915',

  dark100: '#1C1C25',
  gold: '#FFC224',
  iosSystemBlueText: '#007AFF',
};

export const LIGHT_THEME_COLORS = {
  ...commonColors,
  neutral50: '#F9F9F9',
  neutral70: '#D3D3D3',
  neutral80: '#F2F2F2',
  neutral100: '#E5E5E5',
  neutral200: '#999999',
  neutral300: '#606060',
  neutral400: '#333333',
  neutral500: '#262626',
  success50: '#EFFBEB',
  success100: '#33CC00',
  success200: '#398B1D',
  warning50: '#FEF3E1',
  warning200: '#D5770B',
  danger50: '#FFEBEC',
  danger200: '#A0030C',
  white: '#FFFFFF',
  transparent: '#ffffff00',
  mainTextColor: '#333333',
  textNeutral200: '#999999',
  textNeutral300: '#606060',
  darkTextColor: '#1E1E1E',
  lightBlue: '#D7F3FF',
  darkGray: '#757575',
  dark50: '#292934',
  dark200: '#191A22',
  dark300: '#12131A',
  iosSystemGreyBg: '#F2F2F2',
};

export const DARK_THEME_COLORS = {
  ...commonColors,
  dark50: '#292934',
  neutral50: '#12131A',
  neutral70: '#E5E5E5',
  neutral80: '#E5E5E5',
  neutral100: '#191A22',
  neutral200: '#E5E5E5',
  neutral300: '#E5E5E5',
  neutral400: '#F9F9F9',
  neutral500: '#FFFFFF',
  success50: '#292934',
  success100: '#33CC00',
  success200: '#EFFBEB',
  warning50: '#292934',
  warning200: '#FEF3E1',
  danger50: '#292934',
  danger200: '#FFEBEC',
  white: '#292934',
  transparent: '#00000000',
  mainTextColor: '#F9F9F9',
  textNeutral200: '#E5E5E5',
  textNeutral300: '#E5E5E5',
  darkTextColor: '#FFFFFF',
  lightBlue: '#1E1E1E',
  darkGray: '#E5E5E5',
  iosSystemGreyBg: LIGHT_THEME_COLORS.dark200,
};

const THEME = {
  common: commonColors,
  dark: DARK_THEME_COLORS,
  light: LIGHT_THEME_COLORS,
};

export default THEME;
