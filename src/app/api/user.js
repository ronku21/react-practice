import {apiReq,apiGet,apiPut,apiPost} from '../utils';
import { formTypes } from '../constants';


export function updateProfileAPI(user){
    return apiPut('User/UpdateUserProfile',user);
}

export function updateProfilePicAPI(file){
    return apiPost('User/Profile_Pic',file, {
            'content-type': 'multipart/form-data'
        })
}

export function changePasswordAPI(user){
    return apiPut('User/changePassword',user);
}
