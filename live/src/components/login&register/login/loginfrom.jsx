import React ,{Component} from 'react'
import { Button,Form,Input,Icon,Checkbox,message} from 'antd'
import { HttpPost } from './../../../server/post'
import './login.css'
import { connect } from 'react-redux'
const createForm = Form.create;
const FormItem = Form.Item;
function noop() {
    return false;
}
class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            horizontal:'true',
            phoneNumber:'',
            initPassword:'',
            initialremember:'checked'
        }
        this.handleReset=this.handleReset.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.phoneNumberTest=this.phoneNumberTest.bind(this)
        this.checkPass=this.checkPass.bind(this)
        this.callback=this.callback.bind(this)
        this.putLogindata=this.putLogindata.bind(this)
        this.alertmessage=this.alertmessage.bind(this)
    }
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    }
    alertmessage (type,message){
        message[type](message);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (errors) {
                this.alertmessage('warning','账号或密码不正确或不完整！')
            }else{
                this.putLogindata(values)
            }
        });
    }
    putLogindata(submitvalue){
        let obj={
            cellphone: submitvalue.phoneNumber,
            password: submitvalue.passwd,
            platformType: this.props.radioValueforlogin
        }
        HttpPost('/auth-service/api/auth/login',obj,'')
            .then((res)=>{
               if(res.status===200){
                   console.log(res)
                   this.alertmessage('success','登录成功！')
                   this.props.setModal1Visible()//关闭modal框
                   this.props.setLogin()//重置redux的登录状态
                   this.props.setToken(res.data.token)//重置redux的axios状态
                   sessionStorage.setItem('token',res.data.token)//保存在session中
                   this.props.setUserMessage(res.data.user)////重置redux的返回的个人信息状态
                   console.log(this.props)
               }else{
                   this.alertmessage('warning','登录失败！')
               }
            })
            .catch((err)=>{
                let alert=decodeURI(err.response.headers['x-alert'])
                this.alertmessage('error',alert)
            })
    }
    phoneNumberTest(rule, value, callback) {
        if (!value) {
            callback([new Error('登录账号不能为空！')])
        } else {
            setTimeout(() => {
                let reg = /^1[3|4|5|7|8][0-9]{9}$/
                if (!reg.test(value)) {
                    callback([new Error('手机号不合法')])
                } else {
                    callback()
                }
            }, 800);
        }
    }
    checkPass(rule, value, callback) {
        if (!value) {
            callback([new Error('密码不能为空！')])
        } else {
            callback()
        }
    }
    callback(key) {
        console.log(key);
    }
    render() {
        const { getFieldError, isFieldValidating, getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 7},
            wrapperCol: {span: 12},
        };
        return (
               <Form horizontal={this.state.horizontal} form={this.props.form}>
                   <FormItem
                       {...formItemLayout}
                       hasFeedback
                       wrapperCol={{span: 20, offset: 2}}
                       help={isFieldValidating('phoneNumber') ? '校验中...' : (getFieldError('phoneNumber') || []).join(', ')}
                   >
                       {
                           getFieldDecorator('phoneNumber',{
                               initialValue:this.state.phoneNumber,
                               rules: [
                                   {validator: this.phoneNumberTest},
                               ]
                           })(
                               <Input
                                   style={{width: '100%'}}
                                   prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入手机号"/>
                           )
                       }
                   </FormItem>
                   <FormItem
                       {...formItemLayout}
                       hasFeedback
                       wrapperCol={{span: 20, offset: 2}}
                   >
                       {
                           getFieldDecorator('passwd', {
                               initialValue: this.state.initPassword,
                               rules: [
                                   {validator: this.checkPass},
                               ]
                           })(
                               <Input
                                   prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password" autoComplete="off"
                                   placeholder="密码"
                                   onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                               />
                           )
                       }
                   </FormItem>
                   <FormItem wrapperCol={{span: 20, offset: 2}} style={{textAlign: 'center'}}>
                       {getFieldDecorator('remember', {
                           valuePropName: this.state.initialremember,
                           initialValue: true,
                       })(
                           <Checkbox style={{float:'left'}}>记住密码</Checkbox>
                       )}
                       <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码</a>
                       <Button type="primary" style={{width: '100%'}} onClick={this.handleSubmit}>登录</Button>
                   </FormItem>
               </Form>
        )

    }
}
const mapStateToProps=(state)=>{
    return state
}

const mapDispatchToProps=(dispatch)=> {
    return {
        setLogin () {
            dispatch({
                type: 'isLogin',
                isLogin:true
            })
        },
        setToken(token){
            dispatch({
                type:'token',
                token:token
            })
        },
        setUserMessage(usermessage){
            dispatch({
                type:'user',
                usermessage:usermessage
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Login))
