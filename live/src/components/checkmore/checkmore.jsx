import React ,{Component} from 'react'
import {Link} from 'react-router-dom';
import {Icon} from 'antd'
import './checkmore.css'

class Checkmore extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const href=this.props.gohref
        return(
                <Link to={href} className="types-title-more" target="_blank">
                    <span>查看更多</span>
                    <Icon type="right" />
                </Link>
        )
    }
}
export default Checkmore