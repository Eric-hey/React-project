import actionsType from './actionType'

const Initactions={
    // 保存登录状态数据
    initloginData : () => {
        return {
            type: actionsType.loginAttud.LOGIN,
            isLogin:false,
        }
    },
    // 保存后端服务主机名端口号数据
    InitToken:() => {
        return {
            type: actionsType.TOKEN.token,
            token:'',
        }
    },
    // 保存登录后个人数据
    InitUserMes:()=>{
       return {
           type:actionsType.USERMES.usermes,
           usermessage:{
               birthday: '',
               cellphone: '',
               createTime:0,
               gender: '',
               headPic: '',
               hobby: '',
               lastLoginTime: 0,
               name: '',
               nickName: '',
               profession: '',
               residence: '',
               state: '',
               type: '',
               username: ''
           }
       }
    }
}


export default Initactions