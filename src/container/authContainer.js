import React, {Component} from 'react'
import {Auth} from '../screens'
import {connect} from 'react-redux'
import {setToast, authWithFacebook} from '../store/actions'

export class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    isHaveAnAccount: true,
    forgotPassword: false,
  }

  onChangeHandler = (name, val) =>{

    this.setState({[name]: val})}

  onAuthChangeHandler = () =>
    this.setState({isHaveAnAccount: !this.state.isHaveAnAccount})

  onAuthSubmit = () => {
    const{email, password}= this.state
    console.log('auth handler called')
    if(email && password){
      this.props.navigation.navigate('customerProfile')
    }else{
        this.props.setToast('error', 'required Fields are empty')
    }
  }
  onAuthWithFacebook = () => {
    console.log('anythinggg????')
    this.props.authWithFacebook()
  }
  changePasswordResetState = () => {}



  render () {
    const {email, password, isHaveAnAccount} = this.state
    return (
      <Auth
        email={email}
        password={password}
        isHaveAnAccount={isHaveAnAccount}
        onChangeHandler={this.onChangeHandler.bind(this)}
        onAuthSubmit={this.onAuthSubmit.bind(this)}
        onAuthChangeHandler={this.onAuthChangeHandler.bind(this)}
        onAuthWithFacebook={this.onAuthWithFacebook.bind(this)}
        changePasswordResetState={this.changePasswordResetState.bind(this)}
      />
    )
  }
}

export default connect(null,{setToast, authWithFacebook})(AuthContainer)
