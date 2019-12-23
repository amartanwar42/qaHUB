import React, {Component} from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Card, Icon } from 'antd';
import UserModel from '../generic/UserModel'
import axios from 'axios';
const { Meta } = Card;



class CardComponent extends Component{
    
    render(){
        let imagesrc;
        if(`${this.props.contentImage}`===null || `${this.props.contentImage}`==='undefined'){
            imagesrc="https://raw.githubusercontent.com/amartanwar42/ThoughtWorks-QA-Knowledge-Hub/master/images/cards/agileContent/altImage.jpeg";
        }
        // else if(async ()=>{
        //      return await axios.get(`${this.props.contentImage}`).then(result=>{
        //         console.log(">>>>>>>>>>>>>>>>>>"+result)
        //         if(result.status===200){
        //             return true
        //         }
        //         else{
        //             return false
        //         }
                
        //     })
        // }){
        //     imagesrc="https://raw.githubusercontent.com/amartanwar42/ThoughtWorks-QA-Knowledge-Hub/master/images/cards/agileContent/altImage.jpeg1";
        // }
        else{
            imagesrc=`${this.props.contentImage}`;
        }
        return(
            <Card 

                hoverable={true}
                bordered={true}
                style={{ maxWidth:'330px',minWidth:'330px',maxHeight:'430px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', marginBottom:'3%'}}
                cover={
                <img
                src={imagesrc}
                alt="imageLink broken or not found"
                style={{maxHeight:'200px',minHeight:'200px'}}
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