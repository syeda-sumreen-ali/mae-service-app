import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')

export const COLORS = {
  
  // colors
  yellow: '#FBB915',
  yellow1: '#FBC74F',
  yellow2: '#FDD57E',
  yellow3: '#FDE4AA',
  yellow4: '#FEF1D5',
  yellow5: '#ffb500',

  dark: '#000000',
  dark1: '#4B4B4B',
  dark2: '#8E8E8E',
  dark3: '#CACACA',
  dark4: '#EAEAEA',
  dark5: '#FAFAFA',

  light: '#2C2C2C',
  light: '#6E6E6E',
  light: '#B3B3B3',
  light: '#E1E1E1',
  light: '#F5F5F5',
  light: '#FFFFFF',

  black: '#000000', // h4
  black1: '#121212', //header, imgButton
  black2: '#4b4b4b', //btnBG , overviewDesc
  black3: '#161616', //keyword remove icon, keyword text
  white: '#ffffff', //body
  light: '#f5f5f5', //btnText
  light1: '#fafafa',
  lightGray1: '#b3b3b3', //p
  lightGray2: '#e1e1e1', //hrline btnSectiontopBorder
  lightGray3: '#eaeaea', //profileImgBg,
  lightGray4: '#f4f4f4', // sideMenu
  lightGray5: '#e0e0e0', //keyword bg
  lightGray6: '#cacaca', //keyword icon bg // signup login page background
  lightGray7: '#c6c6c6', //text color for payment confirmation

  lightGray8: '#393939',
  lightGray10: '#6f6f6f',

  lightGray11: 'rgba(255, 255, 255, 0.8)',
  gray: '#a8a8a8', //placeholder
  gray2: '#8d8d8d', //textFieldBorder
  gray3: '#525252', //textLink, textLabel
  gray4: '#979797', //profileImgBorder
  // lightGray3: '#f4f4f4',  //textFields
  gray5: '#8e8e8e',
  gray6: '#2f2f2f', // dashboardMenuButtons
  gray7: '#2c2c2c', // cards footer
  gray8: '#6e6e6e',
  gray9: '#262626',

  danger: '#F32013',
  warning: '#ffc107',
  success: '#4bb543',
  info: '#6f6f6f',
  disabled: '#c2c2c2',
  facebook:'#0a92f0',



  //mae 
  primary:"#2c74fc",
  // primary:'#486FFF',
  secondary:'#43EDDC',
  base:'#FBFCFF'

}

export const WOOD_THEME = {
  //chocolateBrown
  chocolateBrown: '#4c2711',
  chocolateBrownRGB: 'rgb(76, 39, 17)',

  //orange
  orange: '#d06a2e',
  orangeRGB: 'rgb(208, 106, 46)',

  //woodBrown
  woodBrown: '#4e4234',
  woodBrownRGB: 'rgb(78, 66, 52)',

  //skinShade3:
  skinShade3: '#ac9170',
  skinShade3RGB: 'rgb(172, 145, 112)',

  // skinShade2
  skinShade2: '#c6aa8d',
  skinShade2RGB: 'rgb(198, 170, 141)',

  //skinShade1
  skinShade1: '#d4bea4',
  skinShade1RGB: 'rgb(212, 190, 164)',
}
export const BLUE_THEME = {
  five: '#03254c',
  fiveRGB: 'rgb(3, 37, 76)',
  four: '#1167b1',
  fourRGB: 'rgb(17, 103, 177)',
  three: '#187bcd',
  threeRGb: 'rgb(24, 123, 205)',
  two: '#2a9df4',
  twoRGB: 'rgb(42, 157, 244)',
  one: '#d0efff',
  oneRGB: 'rgb(208, 239, 255)',
}

export const GREEN_THEME = {
  lightGreen1: '#acdc84', //pista green
  lightGreen2: '#a4dc04',
  lightGreen3: '#6cbc5c',
  lightGreen4: '#74bc1c',
  darkGreen1: '#1e5235', //darkgreen
  light: '#d6d6d6', //light
  parrotGreen: '#4c9c2c',
  gray: '#828282',
  yellowGreenOne: '#d4f04c',
  yellowGreenTwo: '#d4e04c',
}

// ==================== DARK MODE CUSTOMIZATION ====================== //
export const DARK_THEME = {
  // COLORS: { ...COLORS }
  darkBG: {backgroundColor: COLORS.black1},
  lightGray6: {backgroundColor: COLORS.lightGray6},
  lightGray6BG: {backgroundColor: COLORS.lightGray6},

  black1: {color: COLORS.black1},
  black2: {color: COLORS.black2},
  light: {color: COLORS.light},
  white: {color: COLORS.white},

  lightGray6: {color: COLORS.lightGray6},
  lightGray7: {color: COLORS.lightGray7},
  lightGray10: {color: COLORS.lightGray10},
  lightGray9: {color: COLORS.lightGray9},

  gray7: {color: COLORS.gray7},

  black2BR: {borderColor: COLORS.black2},
}

//static sizes for fonts
// for dynamic sizes use deviceOrientation width and height

export const SIZES = {
  // global sizes
  // base: 8,
  // font: 14,
  // radius: 12,
  // padding: 24,
  // padding2: 36,

  // font sizes
  // largeTitle: 50,
  largTitle: 44,
  title: 24, //experience
  subTitle: 20, //experience

  h: 18,
  h1: 16, //textlink //header
  h2: 15, //username
  h3: 14, //msg
  h4: 12, //date

  body1: 16,
  body2: 15,
  body3: 14,
  body4: 12,
  small: 12, //experience
  xsmall: 10,

  arrow_down: 16,
  calender: 20,

  // app dimensions
  width,
  height,
}

export const FONTS = {
  largTitle_r: {
    fontSize: SIZES.largTitle,
    fontFamily: 'Roboto-Regular',
  },
  largTitle_m: {
    fontSize: SIZES.largTitle,
    fontFamily: 'Roboto-Medium',
  },
  largTitle_b: {
    fontSize: SIZES.largTitle,
    fontFamily: 'Roboto-Bold',
  },

  title_r: {
    fontSize: SIZES.title,
    fontFamily: 'Roboto-Regular',
  },
  title_m: {
    fontSize: SIZES.title,
    fontFamily: 'Roboto-Medium',
  },
  title_b: {
    fontSize: SIZES.title,
    fontFamily: 'Roboto-Bold',
  },

  subTitle_r: {
    fontSize: SIZES.subTitle,
    fontFamily: 'Roboto-Regular',
  },
  subTitle_m: {
    fontSize: SIZES.subTitle,
    fontFamily: 'Roboto-Medium',
  },
  subTitle_b: {
    fontSize: SIZES.subTitle,
    fontFamily: 'Roboto-Bold',
  },

  small_r: {
    fontSize: SIZES.small,
    fontFamily: 'Roboto-Regular',
  },
  small_m: {
    fontSize: SIZES.small,
    fontFamily: 'Roboto-Medium',
  },
  small_b: {
    fontSize: SIZES.small,
    fontFamily: 'Roboto-bold',
  },

  xsmall_r: {
    fontSize: SIZES.xsmall,
    fontFamily: 'Roboto-Regular',
  },
  xsmall_m: {
    fontSize: SIZES.xsmall,
    fontFamily: 'Roboto-Medium',
  },
  xsmall_b: {
    fontSize: SIZES.xsmall,
    fontFamily: 'Roboto-Medium',
  },

  h_b: {
    fontSize: SIZES.h,
    fontFamily: 'Roboto-Bold',
  },
  h1_b: {
    fontSize: SIZES.h1,
    fontFamily: 'Roboto-Bold',
  },
  h2_b: {
    fontSize: SIZES.h2,
    fontFamily: 'Roboto-Bold',
  },
  h3_b: {
    fontSize: SIZES.h3,
    fontFamily: 'Roboto-Bold',
  },
  h4_b: {
    fontSize: SIZES.h4,
    fontFamily: 'Roboto-Bold',
  },

  h_m: {
    fontSize: SIZES.h,
    fontFamily: 'Roboto-Medium',
  },
  h1_m: {
    fontSize: SIZES.h1,
    fontFamily: 'Roboto-Medium',
  },
  h2_m: {
    fontSize: SIZES.h2,
    fontFamily: 'Roboto-Medium',
  },
  h3_m: {
    fontSize: SIZES.h3,
    fontFamily: 'Roboto-Medium',
  },
  h4_m: {
    fontSize: SIZES.h4,
    fontFamily: 'Roboto-Medium',
  },

  h_r: {
    fontSize: SIZES.h,
    fontFamily: 'Roboto-Regular',
  },
  h1_r: {
    fontSize: SIZES.h1,
    fontFamily: 'Roboto-Regular',
  },
  h2_r: {
    fontSize: SIZES.h2,
    fontFamily: 'Roboto-Regular',
  },
  h3_r: {
    fontSize: SIZES.h3,
    fontFamily: 'Roboto-Regular',
  },
  h4_r: {
    fontSize: SIZES.h4,
    fontFamily: 'Roboto-Regular',
  },

  body1_b: {
    fontSize: SIZES.body1,
    fontFamily: 'Roboto-Bold',
  },
  body2_b: {
    fontSize: SIZES.body2,
    fontFamily: 'Roboto-Bold',
  },
  body3_b: {
    fontSize: SIZES.body3,
    fontFamily: 'Roboto-Bold',
  },
  body4_b: {
    fontSize: SIZES.body4,
    fontFamily: 'Roboto-Bold',
  },

  body1_m: {
    fontSize: SIZES.body1,
    fontFamily: 'Roboto-Medium',
  },
  body2_m: {
    fontSize: SIZES.body2,
    fontFamily: 'Roboto-Medium',
  },
  body3_m: {
    fontSize: SIZES.body3,
    fontFamily: 'Roboto-Medium',
  },
  body4_m: {
    fontSize: SIZES.body4,
    fontFamily: 'Roboto-Medium',
  },

  body1_r: {
    fontSize: SIZES.body1,
    fontFamily: 'Roboto-Regular',
  },
  body2_r: {
    fontSize: SIZES.body2,
    fontFamily: 'Roboto-Regular',
  },
  body3_r: {
    fontSize: SIZES.body3,
    fontFamily: 'Roboto-Regular',
  },
  body4_r: {
    fontSize: SIZES.body4,
    fontFamily: 'Roboto-Regular',
  },
}

const appTheme = {COLORS, WOOD_THEME, BLUE_THEME, SIZES, FONTS, DARK_THEME}

export default appTheme
