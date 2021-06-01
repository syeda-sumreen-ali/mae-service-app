import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonComponent, Header } from '../../components'
import { COLORS, FONTS, ICONS,IMAGES, SIZES } from '../../constants'
import {useNavigation} from '@react-navigation/native'
const BecomeAVendor = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
         <Image source={IMAGES.worker1 } style={styles.img}/>    
     	<TouchableOpacity
         style={{ padding:'5%' }}
				activeOpacity={0.7}
				onPress={() => navigation.goBack()}
			>
        <Image
            style={styles.headerRightImage}
            source={IMAGES.icons_actions_left}
        />
				
			</TouchableOpacity>
       
       <View style={{marginTop:280, paddingHorizontal:'5%', flex:1}}>
      <Text style={styles.h1}>Become a vendor</Text>
      <Text style={styles.p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Text>

      <ButtonComponent 
      btnStyle={styles.btnStyle}
      title={'Become A Vendor'} onPress={()=>navigation.navigate('vendorProfile')}/>
    </View>

       </View>
  )
}

export default BecomeAVendor

const styles = StyleSheet.create({
  container: {
    // padding: '5%',
    backgroundColor:COLORS.light,
    flex:1
  },
  h1: {
    ...FONTS.largTitle_m,
    marginBottom:'4%',
    color:COLORS.dark1,
  },
  p:{
      color:COLORS.dark1,
      ...FONTS.h2_r,
      lineHeight:22,
      letterSpacing:0.32
  },
  btnStyle:{
      marginTop:'6%',
      borderRadius:40,
      width:'70%',
      alignSelf:'flex-start'
  },
  img:{
      resizeMode:'cover',
      width:'100%',
      height:350,
      position:'absolute',
    
  }
})
