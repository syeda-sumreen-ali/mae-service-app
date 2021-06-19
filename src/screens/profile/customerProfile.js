import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
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
import {COLORS, IMAGES, SIZES} from '../../constants'

const CustomerProfile = (props) => {
    // let email ="", isHaveAnProfile=false
    const {username, email, phone, address, language, isHaveAnProfile}= props
  return (
   
      <View style={styles.mainContainer}>
      
      <Header 
        style={{position:'absolute'}}
        onPressLeft={() => navigationRef.current.navigate('home')}
        // hideRightBtn={true}
        onPressLeft={()=>{}}
      />
     <ScrollView>

      <View  style={{ position:'absolute', top:100, alignSelf:'center', zIndex:9993}}>


      <ImagePickerComponent />
      </View>
    <View style={styles.container}>
   


          <Image style={styles.bgImg} source={IMAGES.bgImage}/>
    <View style={styles.formContainer}>

   
        {/* <View style={styles.imgContainer}> */}
        {/* </View> */}
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
            onPress={() => {}}
            title={isHaveAnProfile ? 'Update':'Create Profile'}
          />

</View>
    </View>
 
    </ScrollView>
    </View>

  )
}

export default CustomerProfile

const styles = StyleSheet.create({
  
  mainContainer:{
    backgroundColor:COLORS.primary,
  },
  
  bgImg:{width:SIZES.width},
    container:{
        borderTopRightRadius:45,
        borderTopLeftRadius:45,
        overflow:'hidden',
        marginTop:180,
        // position:'absolute',
        // zIndex:10000
      },

      formContainer:{
        position:"absolute",
        // zIndex:44,
        height:SIZES.height,
        paddingTop:'25%',
        paddingHorizontal:'15%',
        paddingBottom:100,
        // flex:1
      },
  //   input:{
  //       alignSelf:'center',
  //       marginBottom:'5%'
  //   },
    // imgContainer:{
        // marginBottom:'6%',
        // marginTop:-50,
        // zIndex:33,
     
        // position:'absolute'
    // },
  //   bgImageContainer:{
  //     borderTopRightRadius:45,
  //     borderTopLeftRadius:45,
  //     // marginTop:-500,
  //     overflow:'hidden'
  //   },
  //   bgImage:{
  //     // resizeMode:"cover",

  //     // position:'absolute',
  //     // marginTop:-30,
  //     // top:-100,
  //     // width:SIZES.width,
  //     // height:SIZES.height
  //   }
})
