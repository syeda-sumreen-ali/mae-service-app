import {types} from '../actionTypes'
import {Platform} from 'react-native'
import {httpRequst} from '../../config'
import axios from 'axios'
import {LoginManager, AccessToken} from 'react-native-fbsdk'
import {setToast} from './toastAction'
import * as RootNavigation from '../../route/rootNavigation';

export const signout = headers => async(dispatch)=>{

}

export const signup = headers => async(dispatch)=>{
    
}

export const signin = headers => async(dispatch)=>{
    
}

export const authWithFacebook = goBackFromHome => async dispatch=>{
    try {
        if(Platform.OS==='android'){
            LoginManager.setLoginBehavior('web_only')
        }
        LoginManager.logOut()
        const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
        ])

        if (result.isCancelled) {
        console.log('User cancelled the login process')
        }
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken()

        if (!data) {
        console.log('Something went wrong obtaining access token')
        }

        // console.log('data after geting access token from fb ', data)
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
        )

    } catch (error) {
        
    }
}
