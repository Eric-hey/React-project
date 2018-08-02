import React,{Component} from 'react'
import {withRouter} from 'react-router-dom';
import './clickplay.css'
import Top1 from './cliclplayimg/top1.png'
import Top2 from './cliclplayimg/top2.jpg'
import Top3 from './cliclplayimg/top3.jpg'
import Top4 from './cliclplayimg/top4.jpg'
import Top5 from './cliclplayimg/top5.jpg'

class Clickplay extends Component{
    constructor(props){
        super(props)
    }
    govideodetil(key){
        this.props.history.push('/cdetail'+'/'+key)
    }
    render(){
        return(
            <div className="clickplay-c">
                <div className="top1-c" onClick={this.govideodetil.bind(this,'java')}>
                    <img src={Top1} alt=""/>
                    <ul className="info-list">
                        <li className="title short-title">
                           java课程
                        </li>
                        <li className="subtitle"><span>解密spring/springBoot框架开发</span></li>
                    </ul>
                </div>
                <div className="middle-c">
                    <div className="top2-c" onClick={this.govideodetil.bind(this,'rect')}>
                        <img src={Top2} alt=""/>
                        <ul className="info-list">
                            <li className="title short-title">
                               react精讲
                            </li>
                            <li className="subtitle"><span>解密react/redux/react-touter/fetch</span></li>
                        </ul>
                    </div>
                    <div className="top45-c" >
                        <div className="top4-c" onClick={this.govideodetil.bind(this,'reactnative')}>
                            <img src={Top4} alt=""/>
                            <ul className="info-list">
                                <li className="title short-title">
                                    ReactNative精讲
                                </li>
                                <li className="subtitle"><span>解密如何快速跨平台的端开发</span></li>
                            </ul>
                        </div>
                        <div className="top5-c" onClick={this.govideodetil.bind(this)}>
                            <img src={Top5} alt=""/>
                            <ul className="info-list">
                                <li className="title short-title">
                                    MongoDB精讲
                                </li>
                                <li className="subtitle"><span>配合nodeJS让你成为全栈工程师</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="top3-c" onClick={this.govideodetil.bind(this,'android')}>
                    <img src={Top3} alt=""/>
                    <ul className="info-list">
                        <li className="title short-title">
                            Android开发精讲
                        </li>
                        <li className="subtitle"><span>解密安卓开发高手秘诀</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Clickplay)