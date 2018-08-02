import React,{Component} from 'react'
import { Icon } from 'antd';
import './mousemenum.css'

class Mousemenum extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    mouseHandleenter(index){
       this.props.fatherHandleMouse(index,true)
    }
    render(){
        const courseList=this.props.courseList
        return(
            <div className="menuContent">
                {
                    courseList.map((item,index)=>{
                        return (
                            <div className="item" key={item.firstCategory}
                                 onMouseEnter={this.mouseHandleenter.bind(this,index)}
                            >
                                <div>
                                    <span className="group">{item.firstCategoryName}</span>
                                    <Icon type="right" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Mousemenum