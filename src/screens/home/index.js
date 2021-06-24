import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components'
import TextFieldComponent from '../../components/formFields/textInput'
import { COLORS, FONTS, ICONS,IMAGES } from '../../constants'
import CategorySection from './categorySection'

const Home = () => {
  const categoryData=[
    {name: 'David Levis', image: IMAGES.worker3, categories:['air conditioning','electrical',]},
    {name: 'Harry Victor', image: IMAGES.worker3, categories:['satelite','plumber']},
    {name: 'Louis Green Tree', image: IMAGES.worker3, categories:['air conditioning','gardener','car wash', 'house cleaning']},
    {name: 'Cleaning Service', image: IMAGES.worker3, categories:['pest control','sanitization', 'swimming pool']},
    {name: 'Rophsom Cleaning', image: IMAGES.worker3, categories:['cleaning']},
    {name: 'Electros', image: IMAGES.worker3, categories:['air conditioning','cleaning']},
    {name: 'Wavy', image: IMAGES.worker3, categories:['air conditioning','cleaning']},
   
  ]
  return (
    <View style={styles.container}>
      <Header onPressRight={() => {}} onPressLeft={() => {}} />
      <View style={styles.section1}>
        <Text style={styles.title}>Find Your vendor</Text>
        <View style={styles.flexRow}>
          <ICONS.Ionicons
            name={'md-location-sharp'}
            color={COLORS.secondary}
            size={25}
          />
          <Text style={styles.h3}>City, <Text style={{fontWeight:"bold"}}>Province</Text></Text>
        </View>
      <TextFieldComponent style={styles.searchInput} label="" placeholder="search profession"/>
      </View>
      {/* <View style={styles.section2}> */}
          {/* <Text style={styles.titleBlue}>Services</Text> */}
          <CategorySection data={categoryData}/>
      {/* </View> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{backgroundColor:COLORS.base},
    section1:{
        backgroundColor:COLORS.primary,
        height:200,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        alignItems:'center'
    },
    title:{
        color:COLORS.base,
        ...FONTS.title_b,
        letterSpacing:2,
        marginBottom:30
    },
    flexRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    h3:{
        color:COLORS.base,
        marginLeft:5,
        ...FONTS.body1_r,
        letterSpacing:1.2
    },
    searchInput:{

        marginTop:80,
        width:'85%',
        marginLeft:"8%",
        backgroundColor:COLORS.lightGray4,
        // alignSelf:"center"

        zIndex:200
    },
    

})
