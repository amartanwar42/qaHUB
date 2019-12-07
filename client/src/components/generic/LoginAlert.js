import React, {Component} from 'react'
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';

class LoginAlert extends Component{
    render(){
        return(
            <Result
                status="403"
                title="Require Login"
                subTitle="Please Login to access this page"
                extra={<Button type="primary">
                        <a href="/auth/google">Login With Google</a>
                    </Button>}
            />
        )
    }
}
export default LoginAlert;