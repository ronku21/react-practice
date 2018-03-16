import types from '../types';


let initState = {
    fetching:false,
    upadateUserData:{}
    profilepic:{}
}


export default function(state = initState , action){
    switch(action.type){

        case types.UPDATE_USER_PROFILE :
             return {...state, fetching: true}
        case  types.UPDATE_USER_PROFILE_SUCCESS :
            return {...state, fetching: false, upadateUserData : ...action.payload.res}
        case types.UPDATE_USER_PROFILE_FAILED :
            return {...state, fetching: false}


        case types.UPDATE_USER_PROFILE_PIC:
          return {...state, fetching: true}
        case types.UPDATE_USER_PROFILE_PIC_SUCCESS:
          return {...state, fetching:false , profilepic : ...action.payload.res}
        case types.UPDATE_USER_PROFILE_FAILED:
           return {...state , fetching:false }


        case types.CHANGE_USER_PASSWORD:
           return {...state, fetching:true}
        case types.CHANGE_USER_PASSWORD_SUCCESS:
          return {...state, fetching:false}
        case types.CHANGE_USER_PASSWORD_FAILED:
          return {...state, fetching:false}

       default :
  			return {...state}

     }
}
