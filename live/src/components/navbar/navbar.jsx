import React, {Component} from 'react'
import './navbar.css'
import { Layout ,Popover,Button,Icon,Avatar } from 'antd';
import {withRouter} from "react-router-dom";
import Mysearchbtn from './../mysearchbtn/mysearchbtn'
import { connect } from 'react-redux'
import LoginAndRegister from '../login&register/login&register'
const { Header } = Layout;


class Navbar extends Component {
    constructor(props){
      super(props)
        this.state = {
            showOrHidden:false,
            clickType:'1'
        };
      this.showLoginModal=this.showLoginModal.bind(this)
      this.closeLoginModal=this.closeLoginModal.bind(this)
    }
    showLoginModal(e){
     this.setState({
         showOrHidden:true,
         clickType:e.target.getAttribute("data-type")
     })
    }
    closeLoginModal(){
        this.setState({
            showOrHidden:false
        })
    }
    gousercenter(type){
        if(type==='STUDENT'){
            this.props.history.push('/scenter')
        }else{
            this.props.history.push('/tcenter')
        }
    }
    gocourseContent(){
        this.props.history.push(this.props.courseUrl)
    }
     render(){
         const phonedowncon=(
             <div>
                 <p>二维码</p>
             </div>
         )
         const usermessage=this.props.UserMessage.usermessage
         const usercentercontent=(
             <div>
                <ul>
                    <li  onClick={this.gousercenter.bind(this,usermessage.type)}><Icon type="user" />{usermessage.username}</li>
                </ul>
             </div>
         )
         const keytilelist=[
             {key:'tile1',tilename:'课程'}
         ]
         return(
             <Layout>
                 <Header>
                     <div className="logo" >
                         中软云课堂
                     </div>
                     <ul className="keytile-c">
                           {
                               keytilelist.map((item)=>{
                                   return(
                                       <li key={item.key} onClick={this.gocourseContent.bind(this)}>{item.tilename}</li>
                                   )
                               })
                           }
                     </ul>
                     {
                         this.props.Login.isLogin===false?
                             <div className="login-register-c">
                                 <span className="lr-c"  data-type="1" onClick={this.showLoginModal}>登录</span><span>/</span><span className="lr-c" data-type="2" onClick={this.showLoginModal}>注册</span>
                             </div>:
                             <div className="userheader_container">
                                 <Popover content={usercentercontent} title="" trigger="hover">
                                     <Avatar icon="user" />
                                 </Popover>
                             </div>
                     }
                     <LoginAndRegister showOrHidden={this.state.showOrHidden} clickType={this.state.clickType} closeLoginModal={this.closeLoginModal}/>
                     <div className="down-container" >
                         <Popover content={phonedowncon} title="" trigger="hover">
                             <Button type="primary" icon="qrcode">App下载</Button>
                         </Popover>
                     </div>
                     <div className="serchcontainer" >
                         <Mysearchbtn/>
                     </div>
                 </Header>
             </Layout>
         )
     }
}
const mapStateToProps=(state)=>{
    return state
}

 const mapDispatchToProps=(dispatch)=>{
    return {
        login () {
            dispatch({
                type: 'isLogin',
                isLogin:true
            })
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar))
