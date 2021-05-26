import React ,{useState, useEffect} from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native'
import {styles} from './style'
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



    return (
        <View>
             <Text style={styles.h1dark}>Categories</Text>

             <View style={styles.tabContainer}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal>

                    {tab.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => setactiveTab(index)}
                            style={activeTab === index ? styles.activeTab : styles.inactiveTab}
                            key={index}>
                            <Text style={styles.categoryListItems}>{item}</Text>
                        </TouchableOpacity>
                    ))}
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

