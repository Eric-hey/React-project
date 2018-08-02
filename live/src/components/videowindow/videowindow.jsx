import React,{Component} from 'react'
import './videowindow.css'

import Demo from './../../utils/testvideo/demo.mp4'
class Videowindow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="xx">
                <video src={Demo} width="320" height="240" controls></video>
            </div>
        )
    }
}
export default Videowindow