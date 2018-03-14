import { apiPost, apiGet, apiReq, apiPut , apiPostTask } from '../utils';
import { formTypes } from '../constants';

export function getCategoriesAPI() {
    return apiGet('Dashboard/getCategory');
}

export function RegisterAPI(user) {
    return apiPost('User/register',user);
}

export function LoginAPI(user){
    return apiPost('User/login',user);
}

export function ForgotAPI(user){
    return apiPostTask('User/forgotPassword',user);
}


export function GetUserProfile(payload){
    return apiGet('User/getProfile',payload);
}
