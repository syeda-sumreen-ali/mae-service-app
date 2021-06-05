import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import {COLORS, FONTS, IMAGES, SIZES} from '../../constants'
import * as Progress from 'react-native-progress'
import {useNavigation} from '@react-navigation/core'

const Splash = () => {
  const [progress, setProgress] = React.useState(0)
  const navigation = useNavigation()
  React.useEffect(() => {
    progress === 1 && navigation.replace('auth')
  }, [progress])
  
  setTimeout(() => {
    if(progress<1){
      setProgress(progress + 0.2)
    }
   }, 500)
  // setProgress(0.2)
  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo_light} style={styles.logo} />
      <Image source={IMAGES.worker2} style={styles.img} />
      <Progress.Bar
        color={COLORS.white}
        thickness={14}
        duration={5000}
        spinDuration={1000}
        progress={progress}
        width={200}
        animationConfig={{bounciness: 0}}
        style={styles.progress}
      />
      <Text style={styles.text}>Book your services at your doorstep now</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: COLORS.yellow},
  logo: {marginTop: 80},
  img: {
    resizeMode: 'contain',
    width: SIZES.width * 0.9,
    // height:SIZES.width*1.2,
    // alignSelf: 'center',
    marginTop: -60,
  },
  text: {
    ...FONTS.subTitle_b,
    color: COLORS.white,
    width: '80%',
    letterSpacing: 0.18,
    lineHeight: 32,
    textAlign: 'center',
    marginLeft: -25,
    marginTop: -90,
  },
  progress: {
    marginTop: 20,
    height: 10,
    // backgroundColor:'white'
  },
})
