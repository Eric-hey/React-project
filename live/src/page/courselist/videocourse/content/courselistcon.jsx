import React,{Component} from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd'
import deskimg from './../../../../utils/conmimg/desk.jpg'
import './courselistcontent.css'
import Videocard from './../../../../components/videocard/videocard'
import Mysearchbtn from './../../../../components/mysearchbtn/mysearchbtn'
import Myselect from './../../../../components/myselect/myselect'

class Courselistcon extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const videoAllList=[
            {key:'video1',imgsrc:deskimg,title:'react高手进阶',description:'让你和大师一起体会react之美。'},
            {key:'video2',imgsrc:deskimg,title:'react高手进阶',description:'让你和大师一起体会react之美。'},
            {key:'video3',imgsrc:deskimg,title:'react高手进阶',description:'让你和大师一起体会react之美。'},
            {key:'video4',imgsrc:deskimg,title:'react高手进阶',description:'让你和大师一起体会react之美。'},
            {key:'video5',imgsrc:deskimg,title:'react高手进阶',description:'让你和大师一起体会react之美。'},
        ]
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
        const godetil='/cdetail'
        return(
            <div className="videoCardList-c">
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
                <Videocard videoAllList={videoAllList} gopath={godetil}/>
                <Videocard videoAllList={videoAllList} gopath={godetil}/>
                <Videocard videoAllList={videoAllList} gopath={godetil}/>
            </div>
        )
    }
}
export default Courselistcon