import types from '../types';
import store from '../store';
import {
	getCategoriesAPI,
	RegisterAPI,
	LoginAPI
} from '../api/auth';

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

module.exports = {
  getCategories,
  registerUser,
  loginUser
}
