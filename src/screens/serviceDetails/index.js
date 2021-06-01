import React from 'react'
import { Image, TouchableOpacity,  StyleSheet, Text, View, ScrollView } from 'react-native'
import { ButtonComponent } from '../../components'
import {IMAGES, COLORS, FONTS, SIZES, ICONS} from '../../constants'


const ServiceDetails = ({data, closeModal}) => {
    return (
      <View style={styles.container}>
          <ScrollView>

            <Image source={data.image} style={styles.image}/>
            <View
          style={{
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => closeModal()}
          >
            <Image
              style={styles.headerRightImage}
              source={IMAGES.icons_actions_left}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.profileImgContainer}>

        <Image
              style={styles.profileImg}
              source={data.profileImg}
            />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.h}>{data.name}</Text>
            <Text style={[styles.h, {color:COLORS.yellow}]}>{data.visitCharges} USD</Text>
          </View>
              <View style={{flexDirection:'row', height:40}}>
                <ICONS.Entypo name={'star'} color={COLORS.yellow} size={20}/>
                <ICONS.Entypo name={'star'} color={COLORS.yellow} size={20}/>
                <ICONS.Entypo name={'star'} color={COLORS.yellow} size={20}/>
                <ICONS.Entypo name={'star'} color={COLORS.yellow} size={20}/>
                <ICONS.Entypo name={'star'} color={COLORS.yellow} size={20}/>
                <Text style={styles.reviewText}> Reviews ({data.review})</Text>
              </View>
            <Text style={styles.p}>{data.desc}</Text>
            <Text style={styles.p}>{data.desc}</Text>

            <ButtonComponent title={'Request Order'} onPress={()=>alert('add to cart remaining')}/>
        </View>

        </ScrollView>
        </View>
    )
}

export default ServiceDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.yellow,flex:1
    },
    image:{
        height:400,
        width:SIZES.width,
        position:'absolute'
    },
    descContainer:{
        backgroundColor:COLORS.white,
        width:'85%', 
        alignSelf:'center',
        elevation:5,

       marginTop:300, 
       padding:'5%',
       marginBottom:40
    },
    h:{
        ...FONTS.title_b,
        lineHeight:42,
    },

    p:{
      color:COLORS.dark1,
      ...FONTS.h1_r,
      letterSpacing:0.32,
      lineHeight:23,
    },
    profileImg:{
      width:100,
      height:100,
      resizeMode:'contain'
    },
    profileImgContainer:{
      borderRadius:50,
      overflow:'hidden',
      backgroundColor:COLORS.light1,
      width:100,
      height:100,
      alignSelf:'center',
      marginTop:-60,
      borderWidth:3,
      borderColor:COLORS.lightGray1
      // position:'absolute'
    },
    reviewText:{
      color:COLORS.gray3,
      ...FONTS.body3_r,
      letterSpacing:0.32
    },
    headerRightImage:{
      marginTop:20
    }
})
