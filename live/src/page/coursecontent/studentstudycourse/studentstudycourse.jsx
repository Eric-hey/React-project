import React,{Component} from 'react'
import { Table, Input,Layout,Button, Menu, Dropdown, Icon,Tabs, Radio } from 'antd'
import  './studentstudycourse.css'
import Navbar from './../../../components/navbar/navbar'
import MyFooter from './../../../components/footer/myfooter'
import CourseContent from '../privatecomponent/coursecontent/commoncoursecontent'
import Deskimg from './../../../utils/conmimg/desk.jpg'

const { Header, Footer, Sider, Content } = Layout
const TabPane = Tabs.TabPane
class Commoncoursecontent extends Component{
    constructor(props){
        super(props)
        this.state = {
            mode: 'left',
        };
    }
    state = {
        mode: 'inline',
        theme: 'light',
    }
    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }

    render(){

        const navson=[
            {key:'nav1',text:'课程'},
            {key:'nav2',text:'消息'}
        ]
        const courseUrl='/scourse'
        const userurl='/scenter'
        const courseList=[
            {key:'title1',tilename:'学习课程'},
            {key:'title2',tilename:'关注课程'},
        ]
        const godetil='/courseDetail'
        const livecardlist=[
            {key:'car1',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car2',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car3',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car4',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car5',src:Deskimg,author:'rose',price:20,flag:false},
            {key:'car6',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car7',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car8',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car9',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car10',src:Deskimg,author:'rose',price:20,flag:false},
            {key:'car11',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car12',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car13',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car14',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car15',src:Deskimg,author:'rose',price:20,flag:false}
        ]
        const tab2cardlist=[
            {key:'car1',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car2',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car3',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car4',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car5',src:Deskimg,author:'rose',price:20,flag:false},
            {key:'car11',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car12',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car13',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car14',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car15',src:Deskimg,author:'rose',price:20,flag:false}
        ]
        const { mode } = this.state
        return(
            <Layout>
                <Navbar navson={navson} courseUrl={courseUrl} userurl={userurl}/>
                <div className="coursePageContent">
                    <div className="courseContent">
                        <div className="sliderCourseBind">
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition={mode}
                            >
                                {/*<Icon type="double-right" />*/}
                                <TabPane tab="学习课程" icon="double-right" key="1">
                                    <CourseContent livecardlist={livecardlist} gopath={godetil}/>
                                </TabPane>
                                <TabPane tab="关注课程" key="2">
                                    <CourseContent livecardlist={tab2cardlist} gopath={godetil}/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </Layout>
        )
    }
}
export default Commoncoursecontent