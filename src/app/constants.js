import Config from './config';
export const host = Config.host;
//export const apiUrl = Config.apiUrl;
export const apiUrl = 'http://localhost:7500/v1/';
export const apiUrlTask = 'https://taskmanager2018.herokuapp.com/v1/';
export const formTypes = {
	urlencoded: 'application/x-www-form-urlencoded',
	json: 'application/json',
	multipart: 'multipart/form-data'
}
