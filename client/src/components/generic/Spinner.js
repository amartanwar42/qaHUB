import React,{Component} from 'react'
import 'antd/dist/antd.css';
import { Spin, Alert } from 'antd';

class Spinner extends Component{
    render(){
        return(
            <Spin tip="Loading..."></Spin>
        )
    }
}

export default Spinner;