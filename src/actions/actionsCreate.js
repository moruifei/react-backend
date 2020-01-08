import * as types from '@/constspace/actionTypes';

export const loadingShow=(loading)=>{
    return {
        type: types.LOADING_SHOW,
        loadingShow: loading
    }
}
export const changeTargetPath=(path)=>{
    return {
        type: types.CHANGE_TARGET_PATH,
        taggetPath: path
    }
}
export const changeAccessMenu=(data)=>{
    return {
        type: types.CHANGE_ACCESS_MENU,
        ...data
    }
}
export const changeModule=(modules)=>{
    console.log(modules,'modules')
    return {
        type: types.CHANGE_MODULE,
        ...modules
    }
}