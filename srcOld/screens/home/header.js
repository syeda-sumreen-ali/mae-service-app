import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import{ICONS, COLORS} from '../../constants'
import {styles} from './style'

const Header = ({toggleDrawer}) => {
    return (
        <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={()=>toggleDrawer()}>

          <ICONS.Entypo name={'menu'} size={30} color={COLORS.dark1} />
          </TouchableOpacity>
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
