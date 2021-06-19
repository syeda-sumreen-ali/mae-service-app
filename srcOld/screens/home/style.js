import {StyleSheet} from 'react-native'
import {COLORS, FONTS} from '../../constants'


export const styles = StyleSheet.create({
    container: {
      // backgroundColor:COLORS.white,
      flex:1
    },
    header: {
      // flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '5%',
      height: 80,
      overflow: 'hidden',
      alignItems: 'center',
      backgroundColor: COLORS.yellow1,
    },
    headerRight: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0.22,
    },
    sideImage: {
      resizeMode: 'contain',
      width: 250,
      height: 250,
      alignSelf: 'flex-end',
      marginRight: -70,
      justifyContent: 'flex-end',
    },
    searchSection: {
      height: 220,
      padding: '5%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: COLORS.yellow,
      // overflow:'hidden'
    },
  
    h1: {
      ...FONTS.title_b,
      width: '70%',
      marginBottom: '5%',
      letterSpacing: 0.32,
      color: COLORS.white,
    },
    txt1: {
      width: '80%',
      letterSpacing: 0.32,
      ...FONTS.h2_r,
      lineHeight: 20,
      color: COLORS.dark,
      marginBottom: '5%',
    },
    searchSectionRight: {
      flex: 0.2,
    },
    searchSectionLeft: {flex: 1},
  
    textInput: {
      backgroundColor: COLORS.white,
      width: '78%',
      elevation: 10,
      borderRadius: 10,
      marginVertical: '5%',
      paddingHorizontal: '4%',
      alignItems: 'center',
      flexDirection: 'row',
    },
    promoSection: {
      width: '100%',
      // flex:1,
      // height:100,
      marginTop: '8%',
      backgroundColor: COLORS.white,
      paddingVertical:'5%',
      elevation: 4,
    },
    h1dark: {
      width: '80%',
      letterSpacing: 0.32,
      ...FONTS.title_m,
      color: COLORS.dark,
      paddingHorizontal: '5%',
      paddingVertical:'2%'
    },
  
    //card style
  
    card: {
      elevation: 10,
      zIndex: 2,
      justifyContent: 'center',
      borderRadius:10,
      // alignItems: 'center',
      width: 170,
      height:200,
      marginRight: 20,
      marginVertical: 20,
      backgroundColor: COLORS.white,
      height: 250,
      overflow:'hidden'
    },
    cardImgContainer:{
      width: '100%',
      height: 180,
    },
    cardImg: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%',
      marginTop:-20,
      backgroundColor: COLORS.lightGray4,
    },
    cardTitle: {
        ...FONTS.body1_m,
      //   paddingTop:5,
        paddingLeft:10
    },
  
    ratingContainer:{
        flexDirection:'row',
        paddingLeft:10,
        paddingBottom:10
    },
  
  
    //card2
  
  
    card2: {
      elevation: 10,
      zIndex: 2,
      justifyContent: 'center',
      borderRadius:10,
      // alignItems: 'center',
      width: 250,
      height:200,
      marginRight: 20,
      marginVertical: 20,
      backgroundColor: COLORS.white,
      height: 250,
      overflow:'hidden'
    },
    card2ImgContainer:{
      width: '100%',
      height: 190,
      // paddingTop:10,
      backgroundColor: COLORS.yellow1,
    },
    card2Img: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%',
    
      
    },
    card2Title: {
        ...FONTS.body1_m,
        paddingTop:10,
        paddingLeft:10
    },
  

    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '5%',
        paddingHorizontal:'4%'
    },
    activeTab: {
        backgroundColor: COLORS.yellow,
        borderRadius: 50,
        // marginRight: 10,
        // minWidth: '30%',
        // width: 'auto',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveTab: {
        // marginRight: 10,
        // minWidth: '30%',
        // width: 'auto',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
  })
  