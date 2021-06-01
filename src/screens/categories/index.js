import React from 'react'
import { StyleSheet, Text, Image, View, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES,IMAGES, ICONS } from '../../constants'
import {useNavigation} from '@react-navigation/native'
const Categories = props => {
  const { categories, setCategory } = props
  const navigation = useNavigation()
  const categoryCard = (item, index) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setCategory(item)}
      style={styles.card}
      key={index}
    >
        <ICONS.AntDesign name='setting' size={40} style={{marginBottom:10, color:COLORS.yellow}}/>
      <Text style={styles.cardText}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View>
            <TouchableOpacity
                style={{ padding: '5%' }}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
            >
                <Image
                style={styles.headerRightImage}
                source={IMAGES.icons_actions_left}
                />
            </TouchableOpacity>

            </View>
            <View>
                <Text style={styles.h}>Select The Category</Text>
            </View>
        </View>
        <View style={styles.listContainer}>
          {categories.map((item, index) => categoryCard(item, index))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.yellow1,
    flex: 1,
    padding: '5%'
  },
  h: { ...FONTS.title_m, alignSelf: 'center', marginVertical: '5%', marginLeft:'4%' },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '5%'
  },
  card: {
    width: SIZES.width / 2.4,
    height: SIZES.width / 2.8,
    margin: 5,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    borderRadius: 10
  },
  cardText: {
    ...FONTS.h_b,

    color: COLORS.dark1,
    textTransform: 'capitalize'
  }
})
