import React,{Component} from 'react'
import { Layout,message} from 'antd';
import {HttpGet} from './../../../server/get'
import {HttpPost} from './../../../server/post'
import Deskimg from './../../../utils/conmimg/desk.jpg'
import Mycarousel from './../../../components/carousel/carousel'
import Centertile from './../../../components/centertitle/centertile'
import Mousemenum from './../../../components/mousemenum/mousemenum'
import Icontotext from './../../../components/iconoTptextBottom/icontotext'
import Secondtileright from './../../../components/secondtileright/secondtileright'
import Livecard from './../../../components/livecard/livecard'
import Clickplay from './privatecomponent/clickplay/clickplay'
import './indexcontent.css'



const { Content} = Layout;
class Indexcontent extends Component{
    constructor(props){
        super(props)
        this.state={
            detailflag:false,
            currentindex:'',
            courseList:[],
            carimglist:[],
            cardListicon:[]
        }
        this.alertmessage=this.alertmessage.bind(this)
        this.getBigTiledata=this.getBigTiledata.bind(this)
        this.getDefaultCarouse=this.getDefaultCarouse.bind(this)
    }
    getBigTiledata(){
        HttpGet('/business-service/api/homePage/unAuth/allCourse','')
            .then((res)=>{
                if(res.status===200){
                    this.setState({
                        courseList:res.data
                    })
                }else{
                    this.alertmessage('warning','请求失败')
                }
            })
            .catch((err)=>{
                let alert=decodeURI(err.response.headers['x-alert'])
                this.alertmessage('error',alert)
            })
    }
    getCarouseImageUrl(){
        HttpGet('/business-service/api/homePage/unAuth/banner','')
            .then((res)=>{
                if(res.status===200){
                    this.setState({
                        carimglist:res.data
                    })
                }else{
                    this.alertmessage('warning','请求失败')
                }
            })
            .catch((err)=>{
                let alert=decodeURI(err.response.headers['x-alert'])
                this.alertmessage('error',alert)
            })
    }
    getDefaultCarouse(){
        HttpGet('/business-service/api/homePage/unAuth/defaultCategory','')
            .then((res)=>{
                if(res.status===200){
                    console.log('defaut')
                    console.log(res.data)
                    let cardListicon=[
                        {key:'car1',icon:'like-o',desc:'关注度最高的课程',color:{color:'#ff7d09'},title:'推荐'}
                    ]
                    let colorArray=[
                        {color:'#ff7d09'},
                        {color:'#ff4092'},
                        {color:'#08c'},
                        {color:'#4cca75'},
                        {color:'#5cd5dd'},
                        {color:'#ae3a3b'},
                        {color:'#2a3344'}
                    ]
                    for(let i=0;i<res.data.length;i++){
                        cardListicon.push({
                            key:res.data[i].id,
                            icon:res.data[i].icon,
                            desc:res.data[i].categoryDescription,
                            color:colorArray[i],
                            title:res.data[i].secondCategoryName,
                            parentName:res.data[i].secondCategory
                        })
                    }
                    this.setState({
                        cardListicon:cardListicon
                    })

                }else{
                    this.alertmessage('warning','请求失败')
                }
            })
            .catch((err)=>{
                let alert=decodeURI(err.response.headers['x-alert'])
                this.alertmessage('error',alert)
            })
    }
    componentDidMount(){
     this.getBigTiledata()
     this.getCarouseImageUrl()
     this.getDefaultCarouse()
    }
    alertmessage (type,mes){
        message[type](mes);
    }
    fatherHandleClick(index,flag){
        this.setState({
            detailflag:flag,
            currentindex:index
        })
    }
    mouseHandleleave(){
        this.setState({
            detailflag:false,
            currentindex:''
        })
    }
    render(){
        const centerTitle="精品课程"
        const firsttile={
            icon:'video-camera',
            text:'直播好课'
        }
        const secondtile={
            icon:'play-circle',
            text:'点播好课'
        }
        const cardListicon=[
            {key:'car1',icon:'like-o',desc:'关注度最高的课程',color:{color:'#ff7d09'},title:'推荐'},
            {key:'car2',icon:'coffee',desc:'设备支持最多的技术',color:{color:'#ff4092'},title:'Java'},
            {key:'car3',icon:'facebook',desc:'feacebook革命的web技术',color:{color:'#08c'},title:'React'},
            {key:'car4',icon:'android',desc:'移动份额占有第一的技术',color:{color:'#4cca75'},title:'Android开发'},
            {key:'car5',icon:'apple',desc:'可能是世界上最好的系统',color:{color:'#5cd5dd'},title:'Ios开发'},
            {key:'car6',icon:'code',desc:'web最火爆的技术',color:{color:'#ae3a3b'},title:'Web前端开发'},
            {key:'car7',icon:'html5',desc:'全新web移动端技术',color:{color:'#2a3344'},title:'Html5'}
        ]
        const livecardlist=[
            {key:'car1',src:Deskimg,author:'李明',price:10,flag:false},
            {key:'car2',src:Deskimg,author:'王磊',price:50,flag:false},
            {key:'car3',src:Deskimg,author:'小花',price:70,flag:false},
            {key:'car4',src:Deskimg,author:'jack',price:10,flag:false},
            {key:'car5',src:Deskimg,author:'rose',price:20,flag:false}
        ]
        const gohrefVideocoueselist="/videolist"
        const gohrefLivecoueselist="/livelist"
        const godetil='/cdetail'
        return(
            <Layout>
                <Content>
                    <div onMouseLeave={this.mouseHandleleave.bind(this)} style={{ background: '#f8fafc !important', padding: 24 }} className="cour-log-c">
                            <div style={{width:'20%',float:'left'}}>
                                <Mousemenum courseList={this.state.courseList} fatherHandleMouse={this.fatherHandleClick.bind(this)} />
                            </div>
                        {
                            this.state.detailflag===true?
                                <div className="Mainnavigation-c" onMouseLeave={this.mouseHandleleave.bind(this)}>
                                    {
                                        this.state.courseList[this.state.currentindex].secondCategoryBeans.map((item)=>{
                                            return (
                                                <p key={item.secondCategory}>
                                                    {item.secondCategoryName}
                                                </p>
                                            )
                                        })
                                    }
                                </div> :
                                ''
                        }
                            <div className="carousel-c">
                                <Mycarousel carimglist={this.state.carimglist}/>
                            </div>
                    </div>
                    <div>
                        <Centertile centerTitle={centerTitle}/>
                    </div>
                    <div className="lensonlist">
                        <Icontotext cardListicon={this.state.cardListicon}/>
                    </div>
                    <div className="livecurcontainer">
                        <Secondtileright tilename={firsttile} gohref={gohrefLivecoueselist}/>
                        <Livecard livecardlist={livecardlist} gopath={godetil}/>
                        <Secondtileright tilename={secondtile} gohref={gohrefVideocoueselist}/>
                        <Clickplay/>
                    </div>
                </Content>
            </Layout>
        )
    }
}
export default Indexcontent