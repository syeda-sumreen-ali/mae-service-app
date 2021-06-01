import React ,{useState}from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {COLORS, FONTS, ICONS, IMAGES} from '../../constants'
import SearchSection from './searchSection'
import CategorySection from './categorySection'
import Header from './header'
import {styles} from './style'
import { Drawer } from '../../components'

const Card = (data, index) => (
  <TouchableOpacity key={index} style={[styles.card, index === 0 && {marginLeft: 20}]}>
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


const Card2 = (data, index) => (
    <TouchableOpacity key={index} style={[styles.card2, index === 0 && {marginLeft: 20}]}>
     <View style={styles.card2ImgContainer}>
      <Image source={data.image} style={styles.card2Img} />
     </View>
  
      <Text style={styles.card2Title}>{data.name}</Text>
  
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

const Home = () => {
  const [toggleDrawer, settoggleDrawer] = useState(false)
  const data = [
    {name: 'David Plumber', image: IMAGES.worker3},
    {name: 'Daisy Gardening Serices', image: IMAGES.worker2},
    {name: 'Home Decorators', image: IMAGES.worker1},
    {name: 'David Plumber', image: IMAGES.worker3},
    {name: 'Daisy Gardening Serices', image: IMAGES.worker2},
  ]
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
     <Header toggleDrawer={()=>settoggleDrawer(!toggleDrawer)}/>
   {toggleDrawer&&  <Drawer toggleDrawer={()=>settoggleDrawer(!toggleDrawer)}/>}
    <ScrollView>
        <SearchSection/>
     
      <View style={styles.promoSection}>
        <Text style={styles.h1dark}>Top Featured</Text>
        <ScrollView 
        nestedScrollEnabled={true}
        horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => Card(item, index))}
        </ScrollView>
  

        <CategorySection data={categoryData}/>
     
        <Text style={styles.h1dark}>Your Ussuals</Text>
        <ScrollView 
        nestedScrollEnabled={true}
        horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => Card2(item, index))}
        </ScrollView>
      </View>
      
    </ScrollView>
    </View>
  )
}

export default Home
