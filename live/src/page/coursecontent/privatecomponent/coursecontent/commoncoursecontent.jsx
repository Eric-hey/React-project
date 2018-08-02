import React,{Component} from 'react'
import { Table, Input,Layout,Button, Menu, Dropdown, Icon } from 'antd'
import  './commoncoursecontent.css'
import LiveCard from './../../../../components/livecard/livecard'
import Myselect from './../../../../components/myselect/myselect.jsx'

const { Header, Footer, Sider, Content } = Layout

class Studentstudycourse extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const selectMes={
            defaultValue:"综合",
            width:'',
            options:[
                {
                    key:'option1',
                    value:'综合',
                    text:'综合'
                },
                {
                    key:'option2',
                    value:'好评',
                    text:'好评'
                },
                {
                    key:'option3',
                    value:'人气',
                    text:'人气'
                },{
                    key:'option4',
                    value:'价格',
                    text:'价格'
                },
                {
                    key:'option5',
                    value:'免费',
                    text:'免费'
                },
                {
                    key:'option6',
                    value:'付费',
                    text:'付费'
                }
            ]
        }
        return(
            <div className="rightContent-con">
                <div className="right-con-top">
                    <div className="searchByCondition">
                        <div>
                            <span style={{margin:'10px',fontSize:'20px',color:'#5cd5dd'}}><Icon type="filter"/></span>
                            <Myselect selectMes={selectMes}/>
                        </div>
                    </div>
                </div>
                <div className="right-con-bottom">
                    <LiveCard livecardlist={this.props.livecardlist} gopath={this.props.gopath}/>
                </div>
            </div>
        )
    }
}
export default Studentstudycourse