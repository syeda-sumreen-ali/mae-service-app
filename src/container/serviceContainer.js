import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Services } from '../screens'
import { IMAGES } from '../constants'
import ServiceDetails from '../screens/serviceDetails'

export class ServiceContainer extends Component {
  state = {
    category: '',
    categoryData: [],
    showServiceDetails: false,
    selectedService: {}
  }
  static getDerivedStateFromProps (props, state) {
    let category = state.category,
      catgArr = []

    const { categoryData, selectedCategory } = props.route.params
    if (selectedCategory) {
      category = selectedCategory
    }
    if (categoryData) {
      categoryData.map(item =>
        item.categories.map(catg => {
          console.log(
            'catgArr.indexOf(catg)=== -1',
            catgArr.indexOf(item) === -1
          )
          if (catg === selectedCategory) {
            catgArr.push(item)
          }
        })
      )
    }
    return { category: category, categoryData: catgArr }
  }

  handleSelectedService = obj => {
    this.setState({ selectedService: obj, showServiceDetails: true })
  }
  render () {
    const { category, categoryData, showServiceDetails, selectedService } = this.state
    console.log(categoryData)
    return (
      showServiceDetails?
      <ServiceDetails data={selectedService} closeModal={()=>this.setState({showServiceDetails:false})}/>
      :
      <Services
        category={category}
        categoryData={categoryData}
        handleSelectedService={this.handleSelectedService.bind(this)}
      />
    )
  }
}

export default ServiceContainer
