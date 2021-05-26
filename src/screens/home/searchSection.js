import React from 'react'
import { Text,TextInput, Image, View } from 'react-native'
import {ICONS,COLORS,IMAGES}from '../../constants' 
import {styles} from './style'

const SearchSection = () => {
    return (
        <View style={styles.searchSection}>
        <View style={styles.searchSectionLeft}>
          <Text style={styles.h1}>Good evening, Sumreen...</Text>
          <Text style={styles.txt1}>
            What do you want to book today? There are 240 vendors in your area{' '}
          </Text>

          <View style={styles.textInput}>
            <ICONS.Feather
              name={'search'}
              size={22}
              color={COLORS.lightGray1}
            />
            <TextInput
              placeholder={'Search for searvices'}
              onChangeText={val => console.log(val)}
            />
          </View>
        </View>
        <View style={styles.searchSectionRight}>
          <Image source={IMAGES.worker3} style={styles.sideImage} />
        </View>
      </View>
    )
}

export default SearchSection
