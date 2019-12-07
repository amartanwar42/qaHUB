import React, { Component } from 'react'
import axios from 'axios'
import { Table, Divider, Popconfirm } from 'antd';
import _ from "lodash";
import * as actions from '../../../actions'
import {connect} from 'react-redux'

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Contributor',
      dataIndex: 'contributor',
      key: 'contributor',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Action',
      key: 'action',
      key2: 'id',
      render: (text,record) => (
        <span>
          <a href={record.action} target="_">Veiw</a>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure to delete this?"
            onConfirm={async ()=>{
              await axios.delete(`/api/content/deleteShareKnowledge?contentId=${record.id}`)
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

  
class PublishedSubmission extends Component {

  state={
    pendingSubmissionList:null,
    loadingStatusOfTable:true
  }

    async componentDidMount() {
        await this.props.fetchPendingContent('published').then(results =>{
          this.setState({
            pendingSubmissionList:this.props.pendingSubmission.message
          })
        })
    }
    getCategoryList() {
            return _.map(this.state.pendingSubmissionList, content => {
              return (
                {
                  key: content.title,
                  name: content.title,
                  contributor:content._user.name,
                  category: content.category,
                  type:content.type,
                  action: content.link,
                  id: content._id
                }
              );
            })
      }
      
      renderCategoryList(){
        switch (this.state.pendingSubmissionList) {
          case null:
            return <Table columns={columns} loading={true} dataSource={[]}/>
          default:
            return <Table columns={columns}  dataSource={this.getCategoryList()}/>
        }
      }
    render() {
        return (
            <div>
                 {this.renderCategoryList()}
            </div>
            
        )
    }
}
function mapStateToProps(state) {
    return {
        pendingSubmission: state.pendingSubmission
    };
}

export default connect(mapStateToProps,actions) (PublishedSubmission);
