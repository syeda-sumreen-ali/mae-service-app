import React, {Component} from 'react'
import {Auth} from '../screens'

export class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    isHaveAnAccount: true,
    forgotPassword: false,
  }

  onChangeHandler = (name, val) =>{
    console.log("zzzzzzzzzz",name,val);  
    this.setState({[name]: val})}

  onAuthChangeHandler = () =>
    this.setState({isHaveAnAccount: !this.state.isHaveAnAccount})

  onAuthSubmit = () => {
    console.log('auth handler called')
  }
  onAuthWithFacebook = () => {}
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

export default AuthContainer
