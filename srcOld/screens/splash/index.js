import React from 'react'
import {StyleSheet, Image, Text, View, SafeAreaView, StatusBar} from 'react-native'
import {
  BLUE_THEME,
  COLORS,
  GREEN_THEME,
  IMAGES,
  SIZES,
  WOOD_THEME,
} from '../../constants'
import {Screen} from '../../components'

const Splash = props => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('intro')
    }, 4000)
  }, [])
  return (
    <Screen>

        <Image style={styles.logo} source={IMAGES.logo} />
        <Image style={styles.logo} source={IMAGES.underline} />
    </Screen>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.primary
  },
  logo: {
    resizeMode:'contain',
    width: SIZES.width * 0.45,
    // height: SIZES.width * 0.2,

    // elevation:5
  },
})
