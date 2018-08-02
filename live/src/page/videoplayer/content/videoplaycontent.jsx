import React,{Component} from 'react'
import {Icon,Menu} from 'antd'
import './videoplaycontent.css'
import Myplayer from './../../../components/player/player'
const SubMenu = Menu.SubMenu
class Videoplaycontent extends Component{
    constructor(props){
        super(props)
        this.state={
            palyerWH:{
                playerwidth:0,
                playerheight:0
            },
            openKeys: ['sub1'],
        }
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    componentDidMount(){
        let bodywidth=document.documentElement.clientWidth;
        this.setState({
            palyerWH:{
                playerwidth:bodywidth*0.795,
                playerheight:520
            }
        })
    }
    render(){
        return(
            <div className="videoplay-c">
                <div className=" video-parent">
                    <div className="player-container">
                        <Myplayer palyerWH={this.state.palyerWH}/>
                    </div>
                </div>
                <div className="cuserlist-c">
                    <div className="video-top-bar">
                        <div className="curse-tile">
                            react高手进阶
                        </div>
                        <div className="star-c">
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                        </div>
                        <div className="">
                            <Icon type="user" />jack
                        </div>
                    </div>
                    <div>
                        <div className="curouseList-c">课程目录</div>
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            style={{fontSize:'12'}}
                        >
                            <SubMenu key="sub1" title={<span><span>第一章</span></span>}>
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><span>第二章</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><span>第三章</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}
export default Videoplaycontent