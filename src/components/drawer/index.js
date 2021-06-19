import React,{useState, useEffect} from 'react'
import { StyleSheet,Image, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { COLORS, SIZES, IMAGES, FONTS } from '../../constants'
import * as Animatable from 'react-native-animatable';
import {navigationRef} from '../../route/rootNavigation'

const Drawer = ({toggleDrawer}) => {
    let tab=['home', 'profile', 'become A Vendor', 'order', 'see All Categories', 'setting']
 

	const [animationStyle, setanimationStyle] = useState('slideInLeft')

    useEffect(() => {
	
		return () => {
			setExitAnimation(true);
		};
	}, [animationStyle.length]);


	const setExitAnimation = (reset) => {
		let timer;
		if (!reset) {
			timer=setTimeout(() => {
				timer = setanimationStyle('slideOutLeft')
			}, 1000)
      
		} 
    else {
      
			clearTimeout(timer) 
      toggleDrawer()
		
		}
	}

    const handleCloseDrawer = ()=>{
        setExitAnimation()
        
    }
    return (
        <Animatable.View
        animation={animationStyle}
        iterationCount={1}
        // duration={300}
        style={styles.backdrop} 
       >


    <TouchableOpacity 
        onPress={()=>handleCloseDrawer()}
    >
        
      <View style={styles.drawer}>
          <View style={styles.imgContainer}>
            <Image source={IMAGES.profile_dummy_image} style={styles.img}/>
          </View>
          <View style={{paddingTop:'5%', paddingBottom:'20%', paddingHorizontal:'7%'}}>

          <Text style={{...FONTS.h1_m, letterSpacing:0.32}}>Robert Wickson..</Text>
            <Text style={{...FONTS.body3_r, letterSpacing:0.32}}>robertwickson@gm...</Text>
          </View>


        {tab.map((item,index)=>(
            <TouchableHighlight
            
            onPress={()=>{
                handleCloseDrawer()            
                navigationRef.current.navigate(item==='profile'? 'customerProfile': item.replace(/\s/g,''))
            }}
            key={index}
            underlayColor={COLORS.yellow3}
            style={styles.tabLink}>
                <Text style={styles.tabText}>{item}</Text>
            </TouchableHighlight>
        ))}

            <TouchableOpacity style={styles.tabLink}>
                <Text style={styles.tabText}>logout</Text>
            </TouchableOpacity>
      </View>
    </TouchableOpacity>
    </Animatable.View>
  )
}

export default Drawer

const styles = StyleSheet.create({
  backdrop: {
      position:'absolute',
      zIndex:300,
    //   top:80,
    width: SIZES.width,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: SIZES.height
  },
  drawer: {
    width: SIZES.width * 0.65,
    height: SIZES.height,
    backgroundColor: COLORS.light1,
   
    paddingTop:'5%'
  },
  imgContainer:{
      borderRadius:50,
      width:60,
      height:60,
    //   borderWidth:1,
      overflow:'hidden',
      borderColor:COLORS.light,
      marginHorizontal:'7%',
  },
  img:{
      resizeMode:'contain',
      width:60,
      height:60,
  },
  
  tabText:{
      ...FONTS.h1_r,
      lineHeight:42,
      textTransform:'capitalize'
  },
  tabLink:{
      width:'100%',
      height:'auto',
      paddingHorizontal:'7%',
      
  }
})
