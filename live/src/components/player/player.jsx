import React,{Component}from 'react';
import { Player,BigPlayButton,LoadingSpinner  } from 'video-react';
import './player.css'
import Firstimg from './../../utils/conmimg/videoimg.png'

class Myplayer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const height=this.props.palyerWH.playerheight
        const width=this.props.palyerWH.playerwidth
        const  fluid=false
        return (
            <Player
                fluid={fluid}
                width={width}
                playsInline
                poster={Firstimg}
                height={height}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
                <BigPlayButton position="center"/>
                <LoadingSpinner/>
            </Player>
        );
    }
}
export default Myplayer