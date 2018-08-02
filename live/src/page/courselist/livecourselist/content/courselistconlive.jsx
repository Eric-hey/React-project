import React,{Component} from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd'
import  Deskimg from './../../../../utils/conmimg/videoimg.png'
import Livecard from './../../../../components/livecard/livecard'
import Mysearchbtn from './../../../../components/mysearchbtn/mysearchbtn'
import Myselect from './../../../../components/myselect/myselect'
import './courselistcontent.css'

class Courselistcontent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const livecardlist=[
            {key:'car1',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car2',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car3',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car4',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car5',src:Deskimg,author:'rose',price:20,flag:false}
        ]
        const godetil='/cdetail'
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
            <div className="livecourselist-c">
                <div>
                   <div style={{width:'300px',margin:'0 auto'}}> <Mysearchbtn/></div>
                    <div>
                        <div className="search-advice-c">
                            <span style={{fontSize:'12px',}}>全部课程：</span>
                            <span className="advice-list">react</span>
                            <span className="advice-list">mangdb</span>
                            <span className="advice-list">java</span>
                        </div>
                    </div>
                    <div className="myselect-c">
                        <div>
                            <span style={{margin:'10px',fontSize:'20px',color:'#5cd5dd'}}><Icon type="filter"/></span>
                            <Myselect selectMes={selectMes}/>
                        </div>
                    </div>
                </div>
                <Livecard livecardlist={livecardlist} gopath={godetil}/>
                <Livecard livecardlist={livecardlist} gopath={godetil}/>
                <Livecard livecardlist={livecardlist} gopath={godetil}/>
            </div>
        )
    }
}
export default Courselistcontent