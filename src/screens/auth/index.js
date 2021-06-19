import React, { useState } from 'react'
import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native'
import { color } from 'react-native-reanimated'
import { COLORS, FONTS, IMAGES, ICONS, SIZES, dummyText } from '../../constants'
import {
  TextComponent,
  TextField,
  ButtonComponent,
  Screen,
  Header
} from '../../components'
import Intro from './intro'
import Register from './register'
import Login from './login'
import TextFieldComponent from '../../components/formFields/textInput'

const Auth = props => {
  const {
    email,
    password,
    isHaveAnAccount,
    onAuthSubmit,
    onAuthChangeHandler,
    onChangeHandler,
    changePasswordResetState,
    onAuthWithFacebook,
    navigation
  } = props

  const [page, setPage] = useState('intro')
  return (
    <Screen center={page !== 'intro' ? false : true}>
      {page === 'intro' ? (
        <Intro setPage={val => setPage(val)} />
      ) : (
        <View>
          <Header
            onPressLeft={() => setPage('intro')}
            onPressRight={() => {}}
          />
          
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Find a specialist! </Text>
            <Image source={IMAGES.underline} style={styles.underline} />
            <Text style={styles.text}>{dummyText}</Text>
          </View>
          <ScrollView  > 
          <View style={styles.formContainer}>
              <Image source={IMAGES.bgImage} style={styles.bgImage} />

            <View style={styles.formInnerContainer}>
              <TextFieldComponent
                label=''
                placeholder={'Email'}
                value={email}
                onTermChange={val => onChangeHandler( 'email' , val)}
                />
              <TextFieldComponent
                label=''
                placeholder={'Password'}
                value={password}
                onTermChange={val => onChangeHandler( 'password' , val)}
                />
              <ButtonComponent title={'Enter'} onPress={()=>{onAuthSubmit(page)}} />
            </View>
          </View>
              </ScrollView>
        </View>
      )}
    </Screen>
  )
}
export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.yellow,
    // backgroundColor: COLORS.white,
    display: 'flex'
  },

  mainDivInScroll: {
    display: 'flex',
    flex: 1,
    height: SIZES.height,
    flexDirection: 'column',
    // backgroundColor: COLORS.yellow,
    paddingHorizontal: '4%',
    paddingTop: SIZES.height * 0.1
  },

  mainHeading: {
    textAlign: 'center',
    ...FONTS.largTitle_b,
    fontSize: 38,
    letterSpacing: 0.94,
    color: COLORS.white,
    paddingHorizontal: 20,
    textTransform: 'capitalize'
  },

  txt: {
    color: COLORS.dark1,
    textAlign: 'center',
    ...FONTS.body2_r,
    marginBottom: 20,
    paddingTop: '5%'
  },

  input: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: COLORS.light1,
    borderRadius: 4,
    color: COLORS.black,
    ...FONTS.body3_r
  },
  socialLoginBtn: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.facebook,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20
  },

  btn1: {
    backgroundColor: COLORS.lightGray4,
    marginVertical: 10,
    height: 55,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center'
    // margin: 20,
  },
  btnTxt: {
    color: COLORS.light,
    textAlign: 'center',
    letterSpacing: 0.75,
    ...FONTS.h2_m
  },
  linkContainer: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center'
  },
  contentContainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
    top:25,
    // bottom:'45%',
    left:0,
    right:0
  },
  text: {
    textAlign: 'center',
    color: COLORS.base,
    ...FONTS.body2_r,
    letterSpacing: 1.6,
    lineHeight: 22,
    marginTop: 20,
    marginBottom:'40%',
    width: '85%'
  },
  title: {
    textAlign: 'center',
    color: COLORS.base,
    ...FONTS.largTitle_r,
    letterSpacing: 2,
    width: '85%',
    marginBottom: 10
  },

  formContainer: {
    marginTop:'85%',
    backgroundColor: '#21e4d2',
    // height: 600,
height:'45%',
    // paddingTop:'15%',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    overflow: 'hidden',
    marginBottom:-80

    // paddingHorizontal:'15%'
  },
  bgImage: {
    // position: 'absolute',
    // width:SIZES.width*0.8,
    // height:'100%',
    resizeMode: 'contain',
    // top: 130,
    right: -50,
    left: -50,
    height: 450,
    width: SIZES.width,
    // bottom:0,
    // bottom:0,
    top:'65%'
  },
  formInnerContainer: {
    position:'absolute',
    marginTop: '15%',
    paddingHorizontal: '15%'
  }
})
