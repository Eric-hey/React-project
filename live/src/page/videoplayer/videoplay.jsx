import React,{Component} from 'react'
import Navbar from './../../components/navbar/navbar'
import  MyFooter from './../../components/footer/myfooter'
import Videoplaycontent from './content/videoplaycontent'
class Videoplayer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Videoplaycontent/>
                <MyFooter/>
            </div>
        )
    }
}
export default Videoplayer