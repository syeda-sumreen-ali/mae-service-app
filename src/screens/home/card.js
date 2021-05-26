import React from 'react'
import { View,TouchableOpacity, Image, Text } from 'react-native'
import {styles} from './style'
import {ICONS, COLORS} from '../../constants'

const Card = ({data,index,cardStyle}) => {
    console.log(data)
    
    return (
        <TouchableOpacity key={index} style={[styles.card, index === 0 && {marginLeft: 20}, cardStyle&&cardStyle]}>
        <View style={styles.cardImgContainer}>
            <Image source={data.image} style={styles.cardImg} />
        </View>

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

  </TouchableOpacity>
    )
}

export default Card
