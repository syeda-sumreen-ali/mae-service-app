import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { Card } from '../../components'
import { COLORS, SIZES, IMAGES, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const Services = ({ category, categoryData , handleSelectedService}) => {
  const navigation = useNavigation()
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray5,
          backgroundColor: COLORS.white
        }}
      >
        <View
          style={{
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.headerRightImage}
              source={IMAGES.icons_actions_left}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '75%' }}>
          <Text style={styles.h}>{category} Services</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.listContainer}>
          {categoryData.map((item, index) => (
              <View key={index}>
            <Card
            onPress={()=>{handleSelectedService(item)}}
              data={item}
              index={index}
              cardStyle={styles.card}
              vertical={true}
            />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default Services

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.white },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '5%'
  },
  card: { width: SIZES.width - 40, marginLeft: '4%' },
  h: {
    ...FONTS.subTitle_m,
    alignSelf: 'center',
    textTransform: 'capitalize',
    marginVertical: '5%'
  }
})
