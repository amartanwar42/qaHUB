import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import CreateCategoryForm from './admin/CreateCategoryForm'
import CategoryList from './admin/CategoryList'
import PendingSubmissions from './admin/Pendingsubmission'
import PublishedSubmission from './admin/PublishedSubmission'
import UserAllSubmission from './MySubmission'
import * as actions from '../../actions'
import {connect} from 'react-redux'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;


class SideNav extends Component {

    state = {
        category: false,
        myDetails: false,
        mySubmission: false,
        pendingSubmissions: false,
        activeSubmissions: false,
        admin: false,
        categoryList:false,
        adminMenu:false
    }
    async componentWillMount(){
        await this.props.fetchUser().then(auth=>{
            switch(this.props.auth){
                case null:
                this.setState({
                    adminMenu:false
                })
                break
                default:
                this.setState({
                    adminMenu:true
                })
            }
        })
    }

    handler=()=>{
        this.setState({
            category: false,
            categoryList:true
        })
      }
      
   renderCategory(){
        if(this.state.category){
            return <CreateCategoryForm handler={this.handler} />
        }        
   }

   renderPendingSubmission(){
    if(this.state.pendingSubmissions){
        return <PendingSubmissions />
        }        
    }

    renderPublishedSubmission(){
        if(this.state.activeSubmissions){
            return <PublishedSubmission />
            }  
    }
    renderMySubmission(){
        if(this.state.mySubmission){
            return <UserAllSubmission />
            } 
    }


   renderCategoryList(){
        if(this.state.categoryList){
            return (
                <div>
                    <Button type="primary" style={{marginBottom:"10px"}} onClick={()=>{
                        this.setState({
                            categoryList:false,
                            category:true
                        })
                    }}>
                        Add New Category
                    </Button>
                    <CategoryList />
                </div>
            )
        }
    }

    renderAdmin(){
        switch (this.state.adminMenu){
            case false:
            return null;
            default:
            console.log(this.props.auth.message.role)
            if(this.props.auth.message.role==='admin')
        {
            return(<SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="laptop" />
                        Admin
                    </span>
                }
                onTitleClick={()=>{
                    this.setState({
                        category:false,
                        myDetails: false,
                        mySubmission: false,
                        pendingSubmissions: false,
                        activeSubmissions: false,
                        admin: false,
                        categoryList:false
                    })
                    
                }}
            > 
                <Menu.Item key="5" onClick={()=>{
                    this.setState({
                        category:false,
                        myDetails: false,
                        mySubmission: false,
                        pendingSubmissions: false,
                        activeSubmissions: false,
                        admin: false,
                        categoryList:true
                    })
                    
                }}>Category</Menu.Item>
                <Menu.Item key="6" onClick={()=>{
                    this.setState({
                        category:false,
                        myDetails: false,
                        mySubmission: false,
                        pendingSubmissions: true,
                        activeSubmissions: false,
                        admin: false,
                        categoryList:false
                    })
                    
                }}>Pending Submission</Menu.Item>
                <Menu.Item key="7" onClick={()=>{
                    this.setState({
                        category:false,
                        myDetails: false,
                        mySubmission: false,
                        pendingSubmissions: false,
                        activeSubmissions: true,
                        admin: false,
                        categoryList:false
                    })
                    
                }}>Published Submission</Menu.Item>
                {/* <Menu.Item key="8">option8</Menu.Item> */}
            </SubMenu>)
        }
        }
        
    }


    render() {
        return (
            <div>
                <Layout style={{ minHeight: '730px' }}>
                    <Sider width={220} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        Profile
                                    </span>
                                }
                                onTitleClick={()=>{
                                    this.setState({
                                        category:false,
                                        myDetails: false,
                                        mySubmission: false,
                                        pendingSubmissions: false,
                                        activeSubmissions: false,
                                        admin: false,
                                        categoryList:false
                                    })
                                    
                                }}
                            >
                                {/* <Menu.Item key="1" onClick={()=>{
                                    this.setState({
                                        category:false,
                                        myDetails: true,
                                        mySubmission: false,
                                        pendingSubmissions: false,
                                        activeSubmissions: false,
                                        admin: false,
                                        categoryList:false
                                    })
                                    
                                }}>My Details</Menu.Item> */}
                                <Menu.Item key="2" onClick={()=>{
                                    this.setState({
                                        category:false,
                                        myDetails: false,
                                        mySubmission: true,
                                        pendingSubmissions: false,
                                        activeSubmissions: false,
                                        admin: false,
                                        categoryList:false
                                    })
                                    
                                }}>My Submission</Menu.Item>
                            </SubMenu>
                            {this.renderAdmin()}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Profile</Breadcrumb.Item>
                            <Breadcrumb.Item>Admin</Breadcrumb.Item>
                            <Breadcrumb.Item>Category List</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.renderCategory()}
                            {this.renderCategoryList()}
                            {this.renderPendingSubmission()}
                            {this.renderPublishedSubmission()}
                            {this.renderMySubmission()}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth:state.auth
    };
}
export default connect(mapStateToProps,actions) (SideNav);
