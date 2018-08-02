import React,{Component} from 'react'
import { Modal,Tabs} from 'antd'
import './login&register.css'
import MyLoginfrom from './login/loginfrom'
import MyRegister from './register/registerForm'
import MyRadiobox from './../../components/radiobox/radiobox'
const TabPane = Tabs.TabPane;

class LoginRegister extends Component{
   constructor(props){
         super(props)
         this.state={
             horizontal:'true',
             radioValueforlogin:'STUDENT',
             radioValueforregister:'STUDENT',
             activekey:this.props.clickType
         }
         this.setModal1Visible=this.setModal1Visible.bind(this)
         this.setRadioValue=this.setRadioValue.bind(this)
       this.changeTabState=this.changeTabState.bind(this)
   }
    setModal1Visible() {
        this.props.closeLoginModal()
    }
    setRadioValue(rediovalue,type){
        if(type==='login'){
            this.setState({
                radioValueforlogin:rediovalue
            })
        }else{
            this.setState({
                radioValueforregister:rediovalue
            })
        }

    }
    changeTabState(key){
       this.setState({
           activekey:key
       })
    }
   render(){
        return (
            <div>
                <Modal
                    title=""
                    footer={null}
                    size="small"
                    width={400}
                    wrapClassName="vertical-center-modal"
                    visible={this.props.showOrHidden}
                    onOk={this.setModal1Visible}
                    onCancel={this.setModal1Visible}
                    destroyOnClose
                >
                    <div>
                        <Tabs
                             defaultActiveKey={this.props.clickType}
                             onChange={this.callback}
                        >
                            <TabPane
                                tab="登录"
                                key="1"
                            >
                                <div style={{textAlign:'center',marginBottom:'15px'}}>
                                    <MyRadiobox radioValue={this.state.radioValueforlogin} componentType={'login'} setRadioValue={this.setRadioValue}/>
                                </div>
                                <MyLoginfrom radioValueforlogin={this.state.radioValueforlogin} setModal1Visible={this.setModal1Visible}/>
                            </TabPane>
                            <TabPane tab="注册" key="2">
                                <div style={{textAlign:'center',marginBottom:'15px'}}>
                                    <MyRadiobox radioValue={this.state.radioValueforregister} componentType={'register'} setRadioValue={this.setRadioValue}/>
                                </div>
                                <MyRegister changeTabState={this.changeTabState} radioValueforregister={this.state.radioValueforregister}/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default LoginRegister