import * as types from '@/constspace/actionTypes';
const initialState = {
    loadingShow: false,
    targetPath: '/',
    accessMenu: [],
    openAccessMenu: [],
    moduleList: [],
    moduleMenu: [],
    currentModule: ''
}
export default function (state=initialState, action){
    switch(action.type){
        case types.LOADING_SHOW :
            return {...state, loadingShow: action.loadingShow}
            break;
        case types.CHANGE_TARGET_PATH:
            return {...state, targetPath: action.targetPath}
            break;
        // case types.CHANGE_ACCESS_MENU:
        //     return {
        //         ...state,
        //         currentModule: action.currentModule,

        //     }
        default: 
            return state;
    }
}