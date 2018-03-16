import types from '../types';
import store from '../store';
import {
	getCategoriesAPI,
	RegisterAPI,
	LoginAPI,
	ForgotAPI,
	GetUserProfile,
	changePasswordAPI
} from '../api/auth';
import {
	updateProfileAPI,
	updateProfilePicAPI
} from '../api/user';

const {dispatch} = store;

const getCategories = (payload) => {
	dispatch({
		type: types.GET_CATEGORIES
	})

	return new Promise ((response, rej) => getCategoriesAPI(payload)
		.then(res => {
			dispatch({
				type: types.GET_CATEGORIES_SUCCESS,
				payload: res
			})

			return response(res)
		})
		.catch(err => {
			dispatch({
				type: types.GET_CATEGORIES_FAILED
			})

			return rej(err)
		})
	)

}

const registerUser = (payload) => {
	dispatch({
		type: types.REGISTER_USER
	})

	return new Promise ((response, rej) => RegisterAPI(payload)
		.then(res => {
			dispatch({
				type: types.REGISTER_USER_SUCCESS,
				payload: res
			})

			return response(res)
		})
		.catch(err => {
			dispatch({
				type: tyloginUserpes.REGISTER_USER_FAILED
			})

			return rej(err)
		})
	)
 }

 const loginUser = (payload) => {
	 dispatch({
	   type: types.LOGIN_USER
	 })
    return new Promise ((response,rej) => LoginAPI(payload)
     .then(res => {
		 dispatch({
			 type:types.LOGIN_USER_SUCCESS,
			 payload:res
		 })
		 return response(res)
	 })
	 .catch(err => {
		 dispatch({
			 type:types.LOGIN_USER_FAILED,
		 })
		 return rej(err)
	 })
   )
 }

 const forgotPassword = (payload) => {
	 dispatch({
        type:types.FORGOT_PASSWORD
	 })

	 return new Promise ((response,rej) => ForgotAPI(payload)
	 .then(res => {
         dispatch({
			 type:types.FORGOT_PASSWORD_SUCCESS,
			 payload:res
		 })
		 return response(res)
	 }).catch(err => {
          dispatch({
			  type:FORGOT_PASSWORD_FAILED
		  })

		  return rej(err)
	 })
   )
 }

 const getUserProfile = (payload) =>{
	 dispatch({
		 type:types.GET_USER_PROFILE
	 })

	 return new Promise((response,rej) => GetUserProfile(payload)
	 .then(res =>{
            dispatch({
				type:types.GET_USER_PROFILE_SUCCESS,
				payload:res
			})
			return response(res)
	   }).catch(err => {
		  dispatch({
			  type:types.GET_USER_PROFILE_FAILED
		  })
		  return rej(err)
	  })
   )
 }

 const updateProfileUser = (payload) => {
    dispatch({
		type:types.UPDATE_USER_PROFILE
	})

	return new Promise((response,rej) => updateProfileAPI(payload)
	.then(res => {
		   dispatch({
			   type:types.UPDATE_USER_PROFILE_SUCCESS,
			   payload:res
		   })
		   return response(res)
	  }).catch(err => {
		 dispatch({
			 type:types.UPDATE_USER_PROFILE_FAILED
		 })
		 return rej(err)
	 })
  )
}


const updateProfilePicUser = (payload) => {
	dispatch({
		type:types.UPDATE_USER_PROFILE_PIC
	})

	return new Promise((response,rej) => updateProfilePicAPI(payload)
	.then(res => {
         dispatch({
			 type:types.UPDATE_USER_PROFILE_SUCCESS,
			 payload:res
		 })
         return response(res)
    }).catch(err => {
		dispatch({
			type:types.UPDATE_USER_PROFILE_SUCCESS,
		})
		return rej(err)
	})
  )
}

const changePasswordUser = (payload) => {
    dispatch({
		type:types.CHANGE_USER_PASSWORD
	})

	return new Promise((response,rej) => changePasswordAPI(payload)
     .then(res => {
		 dispatch({
            type:types.CHANGE_USER_PASSWORD_SUCCESS,
			payload:res
		 })
		    return response(res)
	 }).catch(err => {
		 dispatch({
			 type:types.CHANGE_USER_PASSWORD_FAILED
		 })

		 return rej(err);
	 })
   )
}

module.exports = {
  getCategories,
  registerUser,
  loginUser,
  forgotPassword,
  getUserProfile,
  updateProfileUser,
  updateProfilePicUser,
  changePasswordUser
}
