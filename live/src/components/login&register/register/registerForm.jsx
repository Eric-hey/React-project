import React,{Component} from 'react'
import './registerForm.css'
import { HttpPost } from './../../../server/post'
import { connect } from 'react-redux'
import { Form, Input, Icon, Select, Row, Col, Checkbox, Button,message } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;
function noop() {
    return false;
}
class Register extends Component{
    constructor(props){
       super(props)
        this.state={
            confirmDirty: false,
            obtainCodetext:'获取验证码',
            obtionCodebtnabled:false,
            obtionCodeTime:60,
            yanzhencodewidth:14,
            obtionBtnwidth:10,
            phoneNumber:'',
            initPassword:''

        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleConfirmBlur=this.handleConfirmBlur.bind(this)
        this.compareToFirstPassword=this.compareToFirstPassword.bind(this)
        this.validateToNextPassword=this.validateToNextPassword.bind(this)
        this.obtionCodeBtnMesage=this.obtionCodeBtnMesage.bind(this)
        this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this)
        this.userRegister=this.userRegister.bind(this)
        this.checkPhone=this.checkPhone.bind(this)
        this.checkPassword=this.checkPassword.bind(this)
        this.alertmessage=this.alertmessage.bind(this)
        this.callback=this.callback.bind(this)
    }
    alertmessage (type,message){
        message[type](message);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.userRegister(values)
            }else{
                console.log("当前服务器出错！")
            }
        });
    }
    obtionCodeBtnMesage(){
       this.setState({
           obtionCodebtnabled:true,
           obtionBtnwidth:12,
           yanzhencodewidth:12
       })
        var senmessageobj={
            cellphone: eval(this.state.phoneNumber),
            platformType: this.props.radioValueforregister,
            type: "Register"
        }
        HttpPost('/auth-service/api/auth/unAuth/sendCode',senmessageobj,'')
            .then((res) => {
                console.log(res)
               if(res.status===200){
                   this.alertmessage('success','短信验证码发送成功！')
               }else{
                   this.alertmessage('warning','短信验证码发送失败！')
               }
            })
            .catch((err)=>{

            })

        let obtionCodeInterval=setInterval(()=>{
            if(this.state.obtionCodeTime!==0){
                this.setState((prevState) => ({
                        obtionCodeTime: prevState.obtionCodeTime -1
                }))
            }else {
                clearInterval(obtionCodeInterval)
                this.setState({
                    obtionCodebtnabled:false,
                    obtionBtnwidth:10,
                    yanzhencodewidth:14,
                    obtionCodeTime:60
                })
            }
        },1000)
    }
    handlePhoneNumberChange(e){
        this.setState({
            phoneNumber:e.target.value
        })
    }
    checkPhone(rule, value, callback){
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
    checkPassword(rule, value, callback){
        if (!value) {
            callback([new Error('密码不能为空！')])
        } else {
            setTimeout(() => {
                let reg = /^(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,10}$/
                if (!reg.test(value)) {
                    callback([new Error('密码输入为6至10字符！')])
                } else {
                    callback()
                }
            }, 800);
        }
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    registerFunction(url,data){
        let currentTypeUrl=url
        HttpPost(currentTypeUrl,data,'')
            .then((res) => {
                if(res.status===201){
                    this.alertmessage('success','注册成功！')
                }else{
                    this.alertmessage('warning','注册失败！')
                }
            })
            .catch((err)=>{
                let alert=decodeURI(err.response.headers['x-alert'])
                this.alertmessage('error',alert)
            })
    }
    userRegister(value){
        var userRegisterData = {
            cellphone: value.phoneNumber,
            password: value.password,
            verificationCode: value.confirm
        }
        let startUrlPar='/auth-service/api/auth/unAuth/'
        let parentPropsData=this.props.radioValueforregister
        if(parentPropsData==='STUDENT'){
            let urlStudent=startUrlPar+'studentRegister'
            this.registerFunction(urlStudent,userRegisterData)
        }else if(parentPropsData==='TEACHER'){
            let urlTeacher=startUrlPar+'teacherRegister'
            this.registerFunction(urlTeacher,userRegisterData)
        }
    }
    callback(key) {
        console.log(key);
    }
    render(){
        const { getFieldError, isFieldValidating, getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    hasFeedback
                    wrapperCol={{span: 20, offset: 2}}
                    help={isFieldValidating('phoneNumber') ? '校验中...' : (getFieldError('phoneNumber') || []).join(', ')}
                >
                    {getFieldDecorator('phoneNumber', {
                        initialValue:this.state.phoneNumber,
                        rules: [
                            { validator: this.checkPhone},
                            ],
                    })(
                        <Input
                            placeholder="请使用手机号注册"
                            autoComplete="off"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            onChange={this.handlePhoneNumberChange}
                        />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    wrapperCol={{span: 20, offset: 2}}
                    help={isFieldValidating('password') ? '校验中...' : (getFieldError('password') || []).join(', ')}
                >
                    {getFieldDecorator('password', {
                        initialValue:this.state.initPassword,
                        rules: [{
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password"
                               placeholder="支持6-10位字符数字"
                               prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    wrapperCol={{span: 20, offset: 2}}
                >
                    <Row  gutter={16}>
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请输入验证码',
                            }],
                        })(
                            <Col span={this.state.yanzhencodewidth}>
                                <Input type="" onBlur={this.handleConfirmBlur} placeholder="手机验证码" prefix={<Icon type="mobile" style={{color: 'rgba(0,0,0,.25)'}}/>} />
                            </Col>
                        )}
                            <Col span={this.state.obtionBtnwidth}>
                                <Button  onClick={this.obtionCodeBtnMesage} type="primary" disabled={this.state.obtionCodebtnabled}>
                                    {
                                        this.state.obtionCodebtnabled===false?<span>{this.state.obtainCodetext}</span>:<span><span>{this.state.obtionCodeTime}</span>秒后获取验证码</span>
                                    }
                                </Button>
                            </Col>
                    </Row>
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                    wrapperCol={{span: 20, offset: 2}}
                >
                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>注册</Button>
                </FormItem>
            </Form>
        );
    }
}
const mapStateToProps=(state)=>{
    return state
}

const mapDispatchToProps=(dispatch)=> {
    return {
        login () {
            dispatch({
                type: 'url',
                severUrl:'xxxx.xxx.xx'
            })
        }
    }
}
var strongRegister=Form.create()(Register)
export default connect(mapStateToProps,mapDispatchToProps)(strongRegister)




