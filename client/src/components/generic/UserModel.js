import React, {Component} from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Modal, Avatar } from 'antd';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import axios from 'axios';
import _ from "lodash";
import Loading from '../Loading'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin-left: 40%;
    margin-top: 10%;
    border-color: red;
    margin-bottom: 5%;
`;


class UserModel extends Component{
    state = { visible: false, userDetails:null, userName:null };

     showModal = async () => {
        this.setState({
          visible: true,
          userName:this.props.userName
        });
          await axios.get(`/api/content/getUserContent?userId=${this.props.userId}`).then(result => {
              this.setState({
                userDetails:result.data
              })
          })
      };
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      getContent(){
        console.log("insider render")
        return _.map(this.state.userDetails, content=>{
           return _.map(content,c=>{
            return <div>
                  <b>Title:  </b><a href={c.link} target="/" alt="/">{c.title}</a>
                </div> 
            })
        })
      }

      renderContent(){
        switch (this.state.userDetails) {
          case null:
              return <Loading css={override} />    
          default:
              return (
                <div>
                  <h4>My Contribution</h4>
                  <br></br>
                  {this.getContent()}
                </div>
                );
      }
      }
    render(){
        return(
        <div>
            <div onClick={this.showModal}>
                <Avatar src={this.props.avatar} />
            </div>
            <Modal
              title={this.state.userName}
              visible={this.state.visible}
              // onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              {this.renderContent()}
            </Modal>
          </div>);
    }
}

function mapStateToProps(state) {
  return {
      auth: state.auth,
      content: state.content
  };
}
export default connect(mapStateToProps, actions)(UserModel);