import React, {Component} from 'react'
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import 'antd/dist/antd.css';

class SuccessResult extends Component{
    render(){
        return(
            <Result
                status="success"
                title="Thank's For Sharing Knowledge!!"
                subTitle="Your submission is under review, will update you soon"
                extra={[
                <Button type="primary" key="console">
                    <Link to="/">
                        Go to qaHUB
                    </Link>
                </Button>,
                <Button key="buy">
                    <Link to={this.props.auth ? "/shareKnowledge": "/"}>
                        Share Again
                    </Link>
                </Button>,
                ]}
            />
        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
  }
  
  export default connect(mapStateToProps)(SuccessResult);