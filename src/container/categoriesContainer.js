import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IMAGES } from '../constants'
import { Categories } from '../screens'

const categoryData = [
  {
    name: 'David Levis',
    image: IMAGES.worker6,
    profileImg:IMAGES.worker5,
    
    categories: ['air conditioning', 'electrical'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'300',
    rating:5,
    review:46
  },
  {
    name: 'Harry Victor',
    image: IMAGES.worker2,
    profileImg:IMAGES.worker3,
    categories: ['satelite', 'plumber'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'600',
    rating:5,
    review:85
  },
  {
    name: 'Louis Green Tree',
    image: IMAGES.worker3,
    profileImg:IMAGES.worker2,
    categories: ['air conditioning', 'gardener', 'car wash', 'house cleaning'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'300',
    rating:5,
    review:46
  },
  {
    name: 'Cleaning Service',
    image: IMAGES.worker6,
    profileImg:IMAGES.worker3,
    categories: ['pest control', 'sanitization', 'swimming pool'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'300',
    rating:5,
    review:46
  },
  { 
    name: 'Rophsom Cleaning',
    image: IMAGES.worker6,
    profileImg:IMAGES.worker5,
    categories: ['cleaning'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'300',
    rating:5,
    review:46 
},
  {
    name: 'Electros',
    image: IMAGES.worker6,
    profileImg:IMAGES.worker5,
    categories: ['air conditioning', 'cleaning'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'300',
    rating:5,
    review:46
  },
  {
    name: 'Wavy',
    image: IMAGES.worker6,
    profileImg:IMAGES.worker5,
    categories: ['air conditioning', 'cleaning'],
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    visitCharges:'300',
    rating:5,
    review:46
  }
]

const categories = [
    
  'air conditioning',
  'electrical',
  'satelite',
  'plumber',
  'gardener',
  'car wash',
  'house cleaning',
  'pest control',
  'sanitization',
  'swimming pool'
]

export class CategoriesContainer extends Component {
    state={
        selectedCategory:'',
        
    }

  render () {

    return (
    <Categories 
        categories={categories} 
        setCategory={(val)=>{
            this.setState({selectedCategory:val},
             ()=>this.props.navigation.navigate('services', {selectedCategory:this.state.selectedCategory,
                 categoryData:categoryData}) )}}
        />
    )
}
}
export default CategoriesContainer
