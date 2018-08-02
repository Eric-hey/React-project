import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import React,{Component} from 'react'

import Index from './../page/index/index'
import Livecourselist from './../page/courselist/livecourselist/courselist'
import Videocourselist from './../page/courselist/videocourse/courselist'
import Coursedetail from './../page/coursedetail/coursedetail'
import Notfound from './../page/notfound/notfound'
import Studentcenter from './../page/usercenter/studentcenter/studentcenter'
import Teachercenter from './../page/usercenter/teachercenter/teachcenter'
import Videoplayer from './../page/videoplayer/videoplay'
import StudentStudyCourse from './../page/coursecontent/studentstudycourse/studentstudycourse'
import TearcherUpCourse from './../page/coursecontent/tearcherupcourse/tearcherupcourse'

class SwitchCom extends Component{
    render(){
        return(
                <Router>
                    <Switch>
                        <Route  exact path="/" component={Index}></Route>
                        <Route path="/livelist" component={Livecourselist}></Route>
                        <Route path="/videolist" component={Videocourselist}></Route>
                        <Route path="/cdetail/:videoid" component={Coursedetail}></Route>
                        <Route path="/vplay/:videoid" component={Videoplayer}></Route>
                        <Route path="/tcenter" component={Teachercenter}></Route>
                        <Route path="/scenter" component={Studentcenter}></Route>
                        <Route path="/tcourse" component={TearcherUpCourse}></Route>
                        <Route path="/scourse" component={StudentStudyCourse}></Route>
                        <Route component={Notfound}></Route>
                    </Switch>
                </Router>
        )
    }
}
export default SwitchCom