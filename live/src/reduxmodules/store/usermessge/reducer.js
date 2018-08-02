import  Initactions from './action';
import  ActionsType from './actionType'
import {combineReducers} from 'redux'
//初始化数据store数据
let defaultState = Initactions.initloginData()
// 登录登出状态数据
const Login = (state = defaultState , action = {}) => {
    switch(action.type){
        case ActionsType.loginAttud.LOGIN:
            return {
                isLogin: action.isLogin
            }
        case ActionsType.loginAttud.LOGOUT:
            return {
                isLogin: action.isLogin
            }
        default:
            return state;
    }
}
//初始化数据store数据
let defaultStateurl = Initactions.InitToken()

const Token = (state = defaultStateurl , action = {}) => {
    switch(action.type){
        case ActionsType.TOKEN.token:
            return {
                token: action.token
            }
        default:
            return state;
    }
}
//初始化数据store数据
let defaultStateusermess = Initactions.InitUserMes()

const UserMessage = (state = defaultStateusermess , action = {}) => {
    switch(action.type){
        case ActionsType.USERMES.usermes:
            return {
                usermessage: action.usermessage
            }
        default:
            return state;
    }
}
export default combineReducers({
    Login,
    Token,
    UserMessage
})