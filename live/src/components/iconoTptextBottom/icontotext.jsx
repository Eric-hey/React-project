import React,{Component} from 'react'
import {Icon } from 'antd'
import './icontotext.css'

class Icontotext extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const cardListicon=this.props.cardListicon
        return(
            <div className="path-banner clearfix">
                {
                    cardListicon.map((item,index)=>{
                        return(
                            <div className={index===0?'active':'' }
                                key={item.key}>
                                <i className="i-web">
                                    <Icon type={item.icon} style={item.color}/>
                                </i>
                                <p className="tit">{item.title}</p>
                                <p className="desc">{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Icontotext