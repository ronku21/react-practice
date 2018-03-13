import React from 'react'
import axios from 'axios';
import {apiKey, apiUrl} from './constants';

export function logOut () {
	return new Promise ((res, rej) => {
		saveObject('user', {});
		localStorage.removeItem('user')
		res(true);
	})
}

export function isLoggedIn() {
	let session = getObject('user');

	let accessToken = session && session.accessToken;

	return accessToken;
}

export function logout() {
	saveUser(null);
	return new Promise ((res, rej) => res(true))
}

export function getHeaders () {
	let user = getUser();
	return {
		Authorization: `Token ${user && user.accessToken || null}`
	}
}


export function getUser(){
	if(window && window.localStorage) {
		return window.localStorage.getObject('user');
	}

	return null;
}

export function saveUser(value){
	if(window && window.localStorage) {
		return window.localStorage.saveObject('user', value);
	}

	return null;
}

export function saveObject (key, value) {
	if(window && window.localStorage) {
		window.localStorage.saveObject(key, value);
	}
}

export function removeObject (key) {
	if(window && window.localStorage) {
		window.localStorage.removeItem(key);
	}
}

export function getObject(key) {
	if(window && window.localStorage) {
		return window.localStorage.getObject(key);
	}

	return null;
}

export function generateUrl (path) {

	return apiUrl + path;
}

export function apiReq (endPoint, data, method, headers) {
  return new Promise ((res, rej) => {

  	headers = {
  		...getHeaders(),
		...headers
  	}
  	if(method == 'get' || method == 'delete') {
  		data = {
  			params: data,
  			headers
  		}
  	}

  	axios[method](endPoint, data, {headers}).then((result) => {
	  let {data} = result;

	  if(data.status === false) {
		return rej(data);
	  }

	  return res(data);
	}).catch((err) => {
	  return rej(err);
	});
  })
}

export function apiPost (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'post', headers);
}

export function apiDelete (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

export function apiGet (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'get', headers);
}

export function apiPut (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'put', headers);
}

export function multiPartData(data) {

	let multiPart = new FormData();

	for (let prop in data) {
		multiPart.append(prop, data[prop]);
	}

	return multiPart;
}

export function randomString(len = 5) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
