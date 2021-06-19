import React from 'react'
import { View,TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import {ICONS, COLORS, FONTS,IMAGES} from '../../constants'

const Card = ({data,index,cardStyle , onPress,vertical=false}) => {
    // console.log(data)
    
    return (
        <TouchableOpacity
        onPress={()=>onPress()}
        key={index} style={[styles.card, !vertical &&index === 0 && {marginLeft: 20}, cardStyle&&cardStyle]}>
        <View style={styles.cardImgContainer}>
            <FastImage  source={data.image} style={styles.cardImg} />
        </View>

<View style={{backgroundColor:COLORS.light1, bottom:-10, height:70, paddingTop:10}}>

            <Text style={styles.cardTitle}>{data.name}</Text>

            <View style={styles.ratingContainer}>
                {/* //star-outlined */}
                <ICONS.Entypo name={'star'} size={15} color={COLORS.yellow1}/>
                <ICONS.Entypo name={'star'} size={15} color={COLORS.yellow1}/>
                <ICONS.Entypo name={'star'} size={15} color={COLORS.yellow1}/>
                <ICONS.Entypo name={'star'} size={15} color={COLORS.yellow1}/>
                <ICONS.Entypo name={'star'} size={15} color={COLORS.yellow1}/>
                <Text style={styles.ratingText}>(4.5)</Text>
            </View>
</View>

  </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
     //card style
  
     card: {
        elevation: 10,
        zIndex: 2,
        justifyContent: 'center',
        borderRadius:10,
        // alignItems: 'center',
        width: 170,
        height:200,
        marginRight: 20,
        marginVertical: 20,
        backgroundColor: COLORS.white,
        height: 250,
        overflow:'hidden'
      },
      cardImgContainer:{
        width: '100%',
        height: 180,
        // backgroundColor: COLORS.lightGray1,
      },
      cardImg: {
        resizeMode: 'contain',
        height: 300,
        width: '100%',
        // marginTop:-20,
       
      },
      cardTitle: {
          ...FONTS.body1_m,
        //   paddingTop:5,
          paddingLeft:10
      },
    
      ratingContainer:{
          flexDirection:'row',
          paddingLeft:10,
          paddingBottom:10
      },
    
})
