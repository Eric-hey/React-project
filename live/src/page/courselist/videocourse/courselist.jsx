import React,{Component} from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd'
import Courselistcon from './content/courselistcon'
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
                <Courselistcon/>
                <MyFooter/>
            </div>
        )
    }
}
export default Courselist