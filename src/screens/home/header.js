import React from 'react'
import { View } from 'react-native'
import{ICONS, COLORS} from '../../constants'
import {styles} from './style'

const Header = () => {
    return (
        <View style={styles.header}>
        <View>
          <ICONS.Entypo name={'menu'} size={30} color={COLORS.dark1} />
          {/* //heart-outlined */}
        </View>
        <View style={styles.headerRight}>
          <ICONS.Entypo name={'heart'} size={30} color={COLORS.dark1} />
          <ICONS.Fontisto name={'filter'} size={22} color={COLORS.dark1} />
        </View>
      </View>
    
    )
}

export default Header
