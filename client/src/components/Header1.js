import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css'
import './cssFiles/header.css'
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { Link } from "react-router-dom";


const { Header} = Layout;
const menu = (
  <Menu theme="dark" style={{fontFamily: 'Poppins'}}>
    <Menu.Item>
      <Link to={"/profile"}>
        Profile
      </Link>
    </Menu.Item>
    <Menu.Item>
      <a href="/api/logout">
        Sign Out
      </a>
    </Menu.Item>
  </Menu>
);
class Header1 extends Component {

  renderShareKnowledge(){
    return(
      <Link to={this.props.auth ? "/shareKnowledge" : "/loginAlert"}>
        Share Knowledge
      </Link>
    )
  }
  
  

  
  renderHeader(){
    switch(this.props.auth){
      case null:
        return;
      case false:
      return(
        <Header className="header" >
                  <Link to={"/"}>
                    <h3>
                      qaHUB | ThoughtWorks
                    </h3>
                  </Link>
                <div style={{float:"right"}}>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '55px',fontFamily: 'Poppins',fontSize:"15px",backgroundColor:"black"}}
                    multiple={false}
                  >
                    <Menu.Item key="1" style={{float:"right"}}>
                      <a href="/auth/google">Login With Google</a>
                    </Menu.Item>
                    <Menu.Item key="2" style={{float:"right"}}>Trends</Menu.Item>
                    <Menu.Item key="3" style={{float:"right"}}>Events</Menu.Item>
                    <Menu.Item key="4" style={{float:"right"}}>{this.renderShareKnowledge()}</Menu.Item>
                  </Menu> 
                </div>
              </Header>
      );
      default:
      return(
        <Header className="header">
                <Link to={"/"}>
                    <h3>
                      qaHUB | ThoughtWorks
                    </h3>
                </Link> 
                  <div style={{float:"right"}}>
                    <Dropdown overlay={menu} placement="bottomRight">
                      <Avatar size="large" style={{marginLeft:'10px'}} src={this.props.auth.message.imageLink} /> 
                    </Dropdown>
                  </div>
                <div style={{float:"right"}}>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '55px',fontFamily: 'Poppins',fontSize:"15px",backgroundColor:"black"}}
                    multiple={false}
                  >
                    <Menu.Item key="1" style={{float:"right"}}>Trends</Menu.Item>
                    <Menu.Item key="2" style={{float:"right"}}>Events</Menu.Item>
                    <Menu.Item key="3" style={{float:"right"}}>
                    {this.renderShareKnowledge()}
                    </Menu.Item>
                  </Menu> 
                </div>
              </Header>
      );
    }
  }
    render (){
        return(
            <Layout>
              {this.renderHeader()}
            </Layout>
        )
    }
}
function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header1);

