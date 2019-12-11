import React, { Component } from 'react'
import axios from 'axios'
import { Table, Divider, Popconfirm,Modal, Button,Popover } from 'antd';
import _ from "lodash";
import {connect} from 'react-redux'
import CreateCategoryModalForm from './UpdateCategoryModal'


class CategoryList extends Component {
  state = {
    loading: false,
    visible: false,
    categoryName:null,
    categoryDescription:null,
    imagePath:null,
    id:null,
    categoryLoading:true
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  renderModal(){
    const { visible} = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="Update Category"
          onOk={this.handleOk}
          width='50%'
          bodyStyle={{
            with:'50%'}}
          onCancel={this.handleCancel}
          footer={false}
          destroyOnClose={true}
        >
          <CreateCategoryModalForm id={this.state.id} categoryDescription={this.state.categoryDescription} imagePath={this.state.imagePath} categoryName={this.state.categoryName}/>
        </Modal>
      </div>
    );
  }
  
  renderCategoryList() {
    switch (this.props.category) {
      case null:
        return ;
      case false:
        return ;  
      default:
        return _.map(this.props.category.message, category => {
          return (
            {
              name: category.categoryName,
              ContentAvailable: 32,
              id:category._id,
              categoryDescription:category.categoryDescription,
              categoryImage:category.imagePath
            }
          );
        })
    }
  }
  getCategoryList(columns){
    switch (this.props.category) {
      case null:
        return <Table columns={columns} loading={true} dataSource={this.renderCategoryList()}/> ;
      case false:
        return <Table columns={columns} loading={true} dataSource={this.renderCategoryList()}/> ;  
      default:
        return <Table columns={columns} loading={false} dataSource={this.renderCategoryList()}/> ;
    }
  }
    render() {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'ContentAvailable',
          dataIndex: 'ContentAvailable',
          key: 'ContentAvailable',
        },
        {
          title: 'Action',
          key: 'id',
          key2: 'categoryDescription',
          key3: 'categoryImage',
          render: (text, record) => (
            <span>
                <Popover overlayStyle={{
                    maxWidth:'30%',
                    fontFamily:'Poppins',
                  }} content={
                  <div Style={{
                    maxWidth:'25%',
                    fontFamily:'Poppins',
                  }}>
                    <b>Category Name:</b><p>{record.name}</p>
                    <b>Category Description:</b><p>{record.categoryDescription}</p>
                    <b>Category Image:</b><p>{record.categoryImage}</p>
                  </div>
                } title="Category Details" trigger="click">
                  <Button type="link">View</Button>
                </Popover>
                <Divider type="vertical" />
                <Button type="link" onClick={()=>{
                  this.setState({
                    categoryName:`${record.name}`,
                    categoryDescription:`${record.categoryDescription}`,
                    imagePath:`${record.categoryImage}`,
                    id:`${record.id}`
                  })
                  this.showModal()
                }}>
                  Edit
                </Button>
                <Divider type="vertical" />
                <Popconfirm
                  title="Are you sure to delete this?"
                  onConfirm={async ()=>{
                    await axios.delete(`/api/content/deleteCategory?categoryId=${record.id}`)
                    window.location.reload();
                  }}
                  okText="Yes"
                  cancelText="No"
                  >
                    <a href="#">Delete</a>
                </Popconfirm> 
            </span>
          ),
        },
      ];
      
        return (
            <div>
                {/* <Table columns={columns} loading={this.state.categoryLoading} dataSource={this.renderCategoryList()}/> */}
                {this.getCategoryList(columns)}
                {this.renderModal()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {category: state.category};
  }
export default connect(mapStateToProps,null)(CategoryList);
