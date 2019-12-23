import React, { Component } from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,Avatar } from 'antd';
import axios from 'axios';
import _ from'lodash';
import Loading from '../Loading'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin-left: 45%;
    margin-top: 10%;
    border-color: red;
    margin-bottom: 5%;
`;

class LatestUpdates extends Component {
    state={
        publisedSubmissionList:null,
      }
    
        async componentDidMount() {
            axios.get('/api/content/latestshareKnowledge').then((result)=>{
                this.setState({
                    publisedSubmissionList:result.data.message
                })
            })
        }

        renderContent(){
            switch(this.state.publisedSubmissionList){
                case null:
                return <Loading css={override} /> ;
                default:
                return _.map(this.state.publisedSubmissionList,(content)=>{
                    return(<Col 
                        name={content.title}
                        className='feature7-block' key={content.title}>
                        <a href={content.link}style={{textDecoration: 'none'}} target="_" className='feature7-block-group'>
                            <div name="image" className="feature7-block-image">
                                <Avatar size="large" src={content._user.imageLink} >
                                </Avatar>
                            </div>
                            <p name="title"  style={{marginLeft:'50px', marginTop:'10px'}}><b>{content.title}</b></p>
                            <div name="content" style={{marginLeft:'50px'}} className="feature7-block-content"><p>{content.description}</p></div>
                        </a>
                    </Col>)
                });
            }
        }
    render() {
        return (
            <div className='home-page-wrapper feature7-wrapper k1iurmc5qno-editor_css'>
                <div className='home-page feature7 k1iuqzrjxpq-editor_css'>
                    <div className='feature7-title-wrapper'>
                        <h1 name='title' className='feature7-title-h1'>
                            <p>Recently Added</p>
                        </h1>
                    </div>
                    <OverPack playScale= '0.3'>
                        <QueueAnim
                            key="queue"
                            type="bottom"
                            leaveReverse
                            interval={50}
                            component={Row}
                            className='feature7-block-wrapper'
                        >
                            {this.renderContent()}
                        </QueueAnim>
                    </OverPack>
                </div>
            </div>
        )
    }
}

export default LatestUpdates;
