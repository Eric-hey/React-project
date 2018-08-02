import React, { Component } from 'react';
import {Provider} from 'react-redux'
import SwitchCom from './router/index'
import './App.css';
import './../node_modules/video-react/dist/video-react.css'
// 创建一个初始化的state
import  Mystore from './reduxmodules/store/index'
class App extends Component {
  render() {
    return (
        <Provider store={Mystore}>
            <div className="App">
                <SwitchCom/>
            </div>
        </Provider>
    );
  }
}

export default App;
