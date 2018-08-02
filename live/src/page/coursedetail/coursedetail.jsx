import React,{Component} from 'react'
import './coursedetail.css'
import Navbar from'./../../components/navbar/navbar'
import Cdetailcontent from './content/cdetailcontent'
import MyFooter from './../../components/footer/myfooter'

class Coursedetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const navson=[
            {key:'nav1',text:'课程'},
            {key:'nav2',text:'消息'}
        ]
        const userurl='/scenter'
       return(
           <div>
               <Navbar navson={navson} userurl={userurl}/>
               <Cdetailcontent/>
               <MyFooter/>
           </div>
        )
    }
}
export default Coursedetail