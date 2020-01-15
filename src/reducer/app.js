import * as types from '@/constspace/actionTypes';
const initialState = {
    loadingShow: false,
    targetPath: '/',
    accessMenu: [], // 可访问的权限菜单
    openAccessMenu: [], // 展开的可访问的权限菜单
    moduleList: [], // header 模块列表
    moduleMenu: [], // sider菜单
    currentModule: '' // 当前模块
}
export default function (state=initialState, action){
    switch(action.type){
        case types.LOADING_SHOW :
            return {...state, loadingShow: action.loadingShow}
            break;
        case types.CHANGE_TARGET_PATH:
            return {...state, targetPath: action.targetPath}
            break;
        case types.CHANGE_ACCESS_MENU:
            return {
                ...state,
                currentModule: action.currentModule,
                moduleList: action.moduleList,
                moduleMenu: action.moduleMenu
            }
            break;
        default: 
            return state;
    }
}