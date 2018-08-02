import React,{Component} from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd'
import Courselistcontent from './content/courselistconlive'
import Navbar from './../../../components/navbar/navbar'
import MyFooter from './../../../components/footer/myfooter'

class Courselist extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Courselistcontent/>
                <MyFooter/>
            </div>
        )
    }
}
export default Courselist