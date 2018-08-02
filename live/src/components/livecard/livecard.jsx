import React,{Component} from 'react'
import {withRouter} from 'react-router-dom';

import './livecard.css'
import {Icon } from 'antd'

class Livecard extends Component{
    constructor(props){
        super(props)
    }
    govideodetil(key){
     //this.props.history.push(this.props.gopath+"/"+key)
        const w=window.open('about:blank');
        w.location.href=this.props.gopath+"/"+key
}
    render(){
        const livecardlist=this.props.livecardlist
        return(
            <ul className="livecardwindow-c">
                {
                    livecardlist.map((item)=>{
                        return(
                            <li key={item.key} onClick={this.govideodetil.bind(this,item.key)}>
                                <b className="play-c"><Icon type="play-circle-o" /></b>
                                <img className="live-list-img" src={item.src} alt=""/>
                               <div className="livecard-foot">
                                  <div className="hert-c"><Icon type="heart-o" /></div>
                                  <div className="share-c"><Icon type="share-alt" /></div>
                               </div>
                                <div className="carudetail" >
                                    <div className="user-c"><Icon type="user" />{item.author}</div>
                                    <div className="pay-circle-o"><Icon type="pay-circle-o" />{item.price}元</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default withRouter(Livecard)