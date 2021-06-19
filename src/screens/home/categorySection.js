import React ,{useState, useEffect} from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native'
// import {styles} from './style'
import { COLORS, FONTS, ICONS,IMAGES } from '../../constants'
import Card from './card'

const CategorySection = ({data}) => {
    const [activeTab, setactiveTab] = useState(0);
    const [tab, setTab] = useState([])
    const [catgList, setCatgList] = useState([])
    console.log(data)
   
    
    useEffect(() => {
        let catgArr =[]
        let catgTypeArr=[]
      if(data.length){
          data.map(item=>(
              item.categories.map(catg=>{
                  if(catgTypeArr.indexOf(catg)=== -1){
                      catgTypeArr.push(catg)
                  }
              })
          ))
        setTab(catgTypeArr)   
        console.log(catgTypeArr)
    }

    data.map(item=>(
        item.categories.map(catg=>{
          console.log("catgArr.indexOf(catg)=== -1",catgArr.indexOf(item)=== -1)
            if(catg=== tab[activeTab] 
                // && catgArr.indexOf(catg)=== -1
                ){
               catgArr.push(item)
            }
        })
    ))
    console.log(catgArr)
    setCatgList(catgArr)
},[activeTab, data])


console.log(tab)
    return (
        <View style={styles.section1}>
             <Text style={styles.titleBlue}>Categories</Text>

             <View style={styles.tabContainer}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>

                    {/* {tab.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => setactiveTab(index)}
                            style={activeTab === index ? styles.activeTab : styles.inactiveTab}
                            key={index}>
                            <Text style={styles.categoryListItems}>{item}</Text>
                        </TouchableOpacity>
                    ))} */}
                </ScrollView>
            </View>

        <ScrollView 
        nestedScrollEnabled={true}
        horizontal={true} showsHorizontalScrollIndicator={false}>
          {catgList.map((item, index) => <Card data={item} index={index} />)}
        </ScrollView>
  
        </View>
    )
}

export default CategorySection

const styles= StyleSheet.create({
    section1:{
        paddingTop:'10%',
        paddingLeft:'10%'
    },
    titleBlue:{
        color:COLORS.primary,
        ...FONTS.title_r,
        letterSpacing:2,
        marginBottom:30
    },
    activeTab:{
        borderBottomWidth:4,
        borderBottomColor:COLORS.secondary,
        marginRight:'2%',
        paddingBottom:'1%',
        alignItems:'flex-start'
    },
    categoryListItems:{
        color:COLORS.primary,
        ...FONTS.h1_m,
        letterSpacing:1.8,
        textTransform:'capitalize'
    }
})
