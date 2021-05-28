import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView
} from 'react-native'

import {
  Header,
  TextComponent,
  TextField,
  MultipleSelectDropDownField,
  DropDownField,
  DateTimePicker,
  ImagePickerComponent,
  ButtonComponent
} from '../../components'
import { navigationRef } from '../../route/rootNavigation'
import {COLORS} from '../../constants'

const CustomerProfile = (props) => {
    // let email ="", isHaveAnProfile=false
    const {username, email, phone, address, language, isHaveAnProfile}= props
  return (
      <>
      <Header
        title={'Create Profile'}
        onPressLeft={() => navigationRef.current.navigate('home')}
        hideRightBtn={true}
      />
    <View style={styles.container}>
        <View style={styles.imgContainer}>
        <ImagePickerComponent/>
        </View>
        <TextField
            style={styles.input}
            value={username}
            placeholder='Username'
            onTermChange={text => onChangeHandler('username', text)}
            label={'name'}
            hideLabel={true}
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
            value={phone}
            placeholder='Phone No.'
            onTermChange={text => onChangeHandler('phone', text)}
            keyboardType='numeric'
            label={'phone'}
            hideLabel={true}
          />
          <TextField
            style={styles.input}
            value={language}
            placeholder='Language'
            onTermChange={text => onChangeHandler('language', text)}
            label={'language'}
            hideLabel={true}
          />
            <TextField
            style={styles.input}
            value={address}
            placeholder='Address'
            onTermChange={text => onChangeHandler('address', text)}
            label={'address'}
            hideLabel={true}
          />
            
           
         
       <ButtonComponent
            onPress={() => onAuthSubmit()}
            title={isHaveAnProfile ? 'Update':'Create'}
          />
    </View>
    </>
  )
}

export default CustomerProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        flex:1,
        paddingHorizontal:'4%',
        paddingTop:'8%'
    },
    input:{
        backgroundColor:COLORS.lightGray4,
        // borderBottomColor:COLORS.dark1,
        borderWidth:0,
        marginBottom:'4%'
    },imgContainer:{
        marginBottom:'6%'
    }
})
