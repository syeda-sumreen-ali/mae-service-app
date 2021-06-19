import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import {
  BLUE_THEME,
  COLORS,
  GREEN_THEME,
  IMAGES,
  SIZES,
  WOOD_THEME,
} from '../../constants'

const Splash = props => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('auth')
    }, 4000)
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.bg1}
        style={{
          height: SIZES.height,
          width: SIZES.width,
          resizeMode: 'stretch',
        }}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={IMAGES.logo} />
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:GREEN_THEME.darkGreen1
  },
  logo: {
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.5,

    // elevation:5
  },
  logoContainer: {
    elevation: 7,
    position: 'absolute',
    backgroundColor: COLORS.black2,
    borderRadius: 10,
  },
})
