import types from '../types';

let initState = {
	fetching: false,
 	categories: [],
	user: {},
	userProfile:{}
}


export default function(state = initState, action){

	switch (action.type) {

		case types.GET_CATEGORIES :
			 return {...state, fetching: true}
		case  types.GET_CATEGORIES_SUCCESS :
			return {...state, fetching: false, categories : [...action.payload.res]}
		case types.GET_CATEGORIES_FAILED :
			return {...state, fetching: false}


		case types.REGISTER_USER :
 			 return {...state, fetching: true}
 		case  types.REGISTER_USER_SUCCESS :
 			return {...state, fetching: false}
 		case types.REGISTER_USER_FAILED :
 			return {...state, fetching: false}


	   case types.LOGIN_USER:
	      return {...state,fetching:true}
	   case types.LOGIN_USER_SUCCESS:
	      let newUser = {...action.payload};
	      return {...state,  fetching:false, user : newUser}
	   case types.LOGIN_USER_FAILED:
	      return {...state,fetching:false}


	   case types.FORGOT_PASSWORD:
	     return{...state,fetching:true}
	   case types.FORGOT_PASSWORD_SUCCESS:
	     return{...state,fetching:false}
	   case types.FORGOT_PASSWORD_FAILED:
	     return {...state,fetching:false}


		case types.GET_USER_PROFILE:
		   return{...state,fetching:true}
		case types.GET_USER_PROFILE_SUCCESS:
		  return{...state,fetching:false,userProfile : action.payload.res}
		case types.GET_USER_PROFILE_FAILED:
		   return{...state,fetching:false}

	  default :
			return {...state}
	}

}
