import React,{Component} from 'react'
import './secondtileright.css'
import Checkmore from './../checkmore/checkmore'

import {Icon} from 'antd';

class Secondtileright extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const tilename=this.props.tilename
        const gohref=this.props.gohref
        return(
            <div className="slider">
                <div className="bartile-c">
                        <Icon type={tilename.icon} />
                        <span>{tilename.text}</span><b className="icon-drop_right"></b>
                </div>
               <div className="checkmore-c">
                   <Checkmore gohref={gohref}/>
               </div>
            </div>
        )
    }
}
export default Secondtileright