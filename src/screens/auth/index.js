import React from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { color } from 'react-native-reanimated'
import {COLORS, FONTS, IMAGES, ICONS, SIZES} from '../../constants'

const AuthenticationComponent = props => {
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
      <ScrollView >
        <View style={styles.mainDivInScroll}>
         
            <Text style={styles.mainHeading}>
              {isHaveAnAccount ? 'Sign in' : 'Create Account'}
            </Text>

            <Text style={styles.txt}>
              {isHaveAnAccount
                ? 'Or use your account'
                : 'Or use your email for registration'}
            </Text>
            
              <TextInput
                style={styles.input}
                value={email}
                placeholder='Email'
                onChangeText={text =>
                  onChangeHandler('email',text)
                }
                keyboardType='email-address'
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                placeholder='Password'
                onChangeText={text =>
                  onChangeHandler('password',text)
                }
              />
           
            {isHaveAnAccount && (
              <TouchableOpacity onPress={() => changePasswordResetState()}>
                <Text style={[styles.txt, {textDecorationLine: 'underline'}]}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            )}
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => onAuthSubmit()}
                style={styles.btn1}>
                <Text style={[styles.btnTxt,{ color:COLORS.dark1}]}>
                  {isHaveAnAccount ? 'SIGN IN' : 'SIGN UP'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onAuthSubmit()}
                style={[
                  styles.btn1,
                  {backgroundColor: COLORS.black1, elevation: 6},
                ]}>
                <Text style={styles.btnTxt}>
                  {isHaveAnAccount ? 'SIGN IN' : 'SIGN UP'}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => onAuthWithFacebook()}
              style={styles.socialLoginBtn}>
              <Text style={styles.btnTxt}>FACEBOOK</Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}
export default AuthenticationComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellow,
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
    fontSize:38,
    letterSpacing: 0.94,
    color: COLORS.white,
    paddingHorizontal: 20,
    textTransform:'capitalize'
  },

  txt: {
    color: COLORS.dark1,
    textAlign: 'center',
    ...FONTS.body2_r,
    marginBottom: 20,
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
 
})
