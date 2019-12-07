import React, {Component} from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Card, Icon } from 'antd';
import UserModel from '../generic/UserModel'
const { Meta } = Card;


class CardComponent extends Component{
    render(){
        return(
            <Card 
                hoverable={true}
                bordered={true}
                style={{ maxWidth:'330px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', marginBottom:'3%'}}
                cover={
                <img
                    alt="https://amartanwar42.github.io/ThoughtWorks-QA-Knowledge-Hub/images/cards/homePage/apitesting.png"
                    src={this.props.contentImage}
                />
                }
                actions={[
                <a href={this.props.contentLink} target="/" ><Icon type="read" />  Read More</a>,
                
                // <Icon type="like" />
                ]}
                
            >
                <Meta
                avatar={
                    <UserModel avatar={this.props.profileImage} userId={this.props.userId} userName={this.props.userName}/>
                }
                title={this.props.contentTitle}
                description={this.props.contentDescription}
                />
            </Card>
        )   
    }
}
export default CardComponent;