import React from 'react'
import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import {color} from 'react-native-reanimated'
import {COLORS, FONTS, IMAGES, ICONS, SIZES} from '../../constants'
import {TextComponent, TextField, ButtonComponent} from '../../components'

const Auth = props => {
  const {
    email,
    password,
    isHaveAnAccount,
    onAuthSubmit,
    onAuthChangeHandler,
    onChangeHandler,
    onAuthWithFacebook,
    changePasswordResetState,
    navigation,
  } = props

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainDivInScroll}>
          <TextComponent
            style={styles.mainHeading}
            text={isHaveAnAccount ? 'Sign in' : 'Create Account'}
          />

          <TextComponent
            style={styles.txt}
            text={
              isHaveAnAccount
                ? 'Or use your account'
                : 'Or use your email for registration'
            }
          />

          <TextField
            style={styles.input}
            value={email}
            placeholder='Email'
            onTermChange={text => onChangeHandler('email', text)}
            keyboardType='email-address'
            label={'email'}
            hideLabel={true}
          />
          <TextField
            style={styles.input}
            hideText={true}
            value={password}
            placeholder='Password'
            onTermChange={text => onChangeHandler('password', text)}
            label={'password'}
            hideLabel={true}
          />

          <ButtonComponent
            onPress={() => onAuthSubmit()}
            title={isHaveAnAccount ? 'Sign up' : 'Sign in'}
          />
          <ButtonComponent
              onPress={() => onAuthWithFacebook()}
              btnStyle={styles.socialLoginBtn}
              btnTextstyle={styles.btnTxt}
              title={'Facebook'}
            />

          <View style={styles.linkContainer}>

          <TextComponent
            style={styles.txt}
            text={
              isHaveAnAccount
                ? "Don't have an account"
                : 'Already have an account?'
            }/>
        
            <ButtonComponent
              onPress={() => onAuthChangeHandler()}
              btnStyle={{width:'30%', height:'auto', backgroundColor:'transparent', padding:0 }}
              title={isHaveAnAccount ? 'Sign up' : 'Sign in'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.yellow,
    // backgroundColor: COLORS.white,
    display: 'flex',
  },

  mainDivInScroll: {
    display: 'flex',
    flex: 1,
    height: SIZES.height,
    flexDirection: 'column',
    backgroundColor: COLORS.yellow,
    paddingHorizontal: '4%',
    paddingTop: SIZES.height * 0.2,
  },

  mainHeading: {
    textAlign: 'center',
    ...FONTS.largTitle_b,
    fontSize: 38,
    letterSpacing: 0.94,
    color: COLORS.white,
    paddingHorizontal: 20,
    textTransform: 'capitalize',
  },

  txt: {
    color: COLORS.dark1,
    textAlign: 'center',
    ...FONTS.body2_r,
    marginBottom: 20,
    paddingTop:'5%'
  },

  input: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: COLORS.light1,
    borderRadius: 4,
    color: COLORS.black,
    ...FONTS.body3_r,
  },
  socialLoginBtn: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.facebook,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
  },

  btn1: {
    backgroundColor: COLORS.lightGray4,
    marginVertical: 10,
    height: 55,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
    // margin: 20,
  },
  btnTxt: {
    color: COLORS.light,
    textAlign: 'center',
    letterSpacing: 0.75,
    ...FONTS.h2_m,
  },
  linkContainer:{
    flexDirection:'row',
    // alignItems:'center',
    justifyContent:'center'
  }
})
