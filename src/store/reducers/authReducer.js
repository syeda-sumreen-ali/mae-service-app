import {types} from '../actionTypes'

const initialState= {
    isLoading:false,
    isUserExist:false,
    isFetchingUser:true,
    user:{},

}

export const authReducer=(state=initialState, {type,payload})=>{
        switch(type){
            case types.AUTH_START:
                return {...state, isLoading:true}
            case types.AUTH_SUCCESS:
                return {...state, isLoading:false, isFetchingUser:false, isUserExist:true, user:payload};
            case types.AUTH_FAILED:
                return {...state, isLoading:false,isFetchingUser:false, user:{}};
            case types.FETCH_USER_START:
                return{...state, isFetchingUser:true}
            case types.FETCH_USER_SUCCESS:
                return{...state, isFetchingUser:false}
            case types.FETCH_USER_FAILED:
                return{...state, isFetchingUser:false}
            case types.SIGN_OUT:
                return {...state, isLoading:false, isUserExist:false, user:{}}    
            default:
                return state;
        }
}