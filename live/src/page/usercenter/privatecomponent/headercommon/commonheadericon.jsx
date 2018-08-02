import React,{Component} from 'react'
import './commonheadericon.css'
import { icon,Avatar,Icon,Button,Modal } from 'antd';
import {Link} from 'react-router-dom';
import currentPersonHeaderPic from "./image/b358.jpg"

export default class Commonheadericon extends Component{
    constructor(props){
        super(props)
        this.state={
            currentData:props.currentStateLabel,
            currentNameValue:'jike_7v31egrs',
            initState:true
        }
        this.editUserName = this.editUserName.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }
    state = {
        size: 'large',
        visible: false
    }
    render(){
        const currentlongValue="251"
        const size = this.state.size;
        const href='tcenterDatail'
        return(
            <div className="content">
                <div className="personCenterContent">
                    <div className="personCenter_topOne">
                        <div className="personHeaderPic">
                            <div className="perHeaderPicImg">
                                <img src={currentPersonHeaderPic}/>
                            </div>
                        </div>
                        <div className="personDetail">
                            <p className="nameLabel">
                                {
                                    this.state.initState===true?
                                        <span>
                                            <span>{this.state.currentNameValue}</span>
                                            <Icon type="edit"  onClick={this.editUserName} />
                                        </span>:
                                        <span>
                                            <input type="text" id="editInput" className="editInput"/>
                                            <Icon type="check" onClick={this.changeContent} />
                                        </span>
                                }
                            </p>
                            <p className="longLabel">经验值：
                                {/*<input className="readyOnlyInpt" type="text" value={} readOnly="readOnly"/>*/}
                                <span className="readyOnlyInpt">{currentlongValue}</span>
                            </p>
                            <p>
                                <label className="leftText" htmlFor="">
                                    {this.state.currentData}
                                    <span>2500.00</span>元
                                </label>
                                {
                                    this.props.userType==='teacher'?
                                        <span class="checkDetail">查看详情</span>:
                                        <label className="studentCenter">
                                            <span className="rechangeMoney">充值</span>
                                            <span className="checkDetail">查看详情</span>
                                        </label>

                                }
                            </p>
                        </div>
                        <div className="downloadApp">
                            <div className="downloadDiv" onClick={this.showModal}>
                                <Icon type="youtube" />
                                下载直播客户端
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal_Content">
                    <Modal className="modal_Con"
                        title="下载直播客户端"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <div className="downloadContent">
                            <div className="download-top">
                                <h1 className="h1One">学习成就梦想</h1>
                                <h1 className="h1Two">遇见都市新生活</h1>
                            </div>
                            <div className="infoPic">
                                <p>OBS 介绍图</p>
                            </div>
                            <div className="downloadBtn">
                                <Button type="primary" className="currentDownKe" icon="download" size={size}>立即下载</Button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>


        )
    }
    editUserName () {
        this.setState({
            initState:false
        })
    }
    changeContent () {
        this.setState({
            initState:true,
            currentNameValue:document.getElementById('editInput').value
        })
    }
    // changeContent = (e) => {
    //     console.log(e)
    //     this.setState({
    //         initState:true,
    //         currentNameValue: e.target.value
    //     });
    // }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
}
