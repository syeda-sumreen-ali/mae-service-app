import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ButtonComponent, Screen } from '../../components'
import { COLORS, FONTS, IMAGES, SIZES } from '../../constants'

const Intro = ({setPage}) => {
  return (
    <Screen>
      
      <View style={styles.main}>
        <View style={[styles.col, { flex: 0.6 }]}>
          <Image source={IMAGES.vender_round} style={styles.img} />
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>Find a Specialist</Text>
          <Text style={styles.h2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>
      <View style={styles.btnSection}>
        <ButtonComponent
          title='Log in'
          onPress={() => {setPage('login')}}
          btnStyle={styles.loginbtn}
          btnTextStyle={styles.loginbtnText}
        />
      <ButtonComponent
          title='Create account'
          onPress={() => {setPage('register')}}
        />
      </View>
    </Screen>
  )
}

export default Intro

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.secondary,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: '2%',
    marginTop:-30

  },
  img: {
    width: 120,
    resizeMode: 'contain',
    marginLeft: -20
  },
  col: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: COLORS.base,
    ...FONTS.largTitle_r,
    marginBottom: 20,
    letterSpacing: 0.38
  },
  h2: {
    color: COLORS.base,
    ...FONTS.h1_r,
    marginBottom: 20,
    letterSpacing: 0.38
  },
  loginbtn:{
      backgroundColor:COLORS.secondary,
    },
    loginbtnText:{
      color:COLORS.primary
  },
  btnSection:{
      position:'absolute',
      bottom:30,
  }
})
