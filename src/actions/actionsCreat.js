import * as types from '@/constspace';

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
export const changeModule=(module)=>{
    return {
        type: types.CHANGE_MODULE,
        ...module
    }
}