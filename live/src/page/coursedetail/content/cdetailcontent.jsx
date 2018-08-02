import React,{Component} from 'react'
import {Icon,Button,Avatar } from 'antd'
import {withRouter} from 'react-router-dom';
import './cdetailcontent.css'
import Teachheaderimg from './../../../utils/conmimg/qiyue.jpg'
import Deskimg from './../../../utils/conmimg/desk.jpg'
import Mytabs from "../../../components/tabs/tabs";

class Cdetailcontent extends Component{
    constructor(props){
        super(props)
    }
    goPlayer(path){
        let parms=this.props.match.params.videoid
        this.props.history.push(path+'/'+parms)
    }
    render(){
        return(
            <div>
                <div className="detail-c">
                    <div className="courdetail-c">
                        <div className="bordcast-c">
                            <b className="play-c"><Icon type="play-circle-o" /></b>
                            <img src={Deskimg} alt=""/>
                        </div>
                        <div className="currentcur-c">
                            <div className="detail-con">
                                <div className="bigtile">React高手进阶</div>
                                <h3>从这里体会react组件化编程的优美</h3>
                                <div className="introduce-c">
                                    <span className="list-son"><span className="firstspan"><strong>讲师</strong></span><span>Jack</span><span className="alow-bar">|</span></span>
                                    <span className="list-son"><span className="firstspan"><strong>难度</strong></span><span>中级</span><span className="alow-bar">|</span></span>
                                    <span className="list-son"><span className="firstspan"><strong>时长</strong></span><span>20小时</span><span className="alow-bar">|</span></span>
                                    <span className="list-son"><span className="firstspan"><strong>学习人数</strong></span><span>860人</span><span className="alow-bar">|</span></span>
                                    <span className="list-son"><span className="firstspan"><strong>9.2</strong></span>
                                        <span className="start-c"><Icon type="star" />
                                            <Icon type="star" />
                                            <Icon type="star" />
                                            <Icon type="star" />
                                            <Icon type="star" />
                                        </span>
                                    </span>
                                </div>
                                <div className="price-i-c">
                                         <span><Icon type="pay-circle-o" /></span>
                                         <span>336.9</span>
                                         <span className="unit-c">元</span>
                                </div>
                                <div className="payButton">
                                    <Button type="primary" icon="shopping-cart" onClick={this.goPlayer.bind(this,'/vplay')}>立即购买</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="cueserdetail-c">
                        <li className="curseintroduce-c"> <Mytabs/></li>
                        <li className="teachintroduce">
                             <div className="teacher-img-c">
                                 <div>
                                     <img src={Teachheaderimg} alt=""/>
                                 </div>
                             </div>
                             <div className="introduce-teach">
                               <div className="teachname-c">JACK</div>
                                 <p>web前端工程师</p>
                             </div>
                            <div className="studing-c">
                                <div className=""><span style={{fontSize:'20px',color:'#cc0c0c'}}>200</span>人正在学习</div>
                                <div className="studing-header">
                                    <Avatar icon="user" />
                                    <Avatar>U</Avatar>
                                    <Avatar>USER</Avatar>
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                    <Icon type="ellipsis" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Cdetailcontent)