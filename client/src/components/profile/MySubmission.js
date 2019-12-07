import React, { Component } from 'react'
import { Table, Divider, Popconfirm } from 'antd';
import _ from "lodash";
import * as actions from '../../actions'
import {connect} from 'react-redux'

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      key2: 'id',
      render: (text,record) => (
        <span>
          <a href={record.action} target="_">Veiw</a>
          {/* <Divider type="vertical" />
          <Popconfirm
            title="Are you sure to delete this?"
            onConfirm={async ()=>{
              await axios.delete(`/api/content/deleteShareKnowledge?contentId=${record.id}`)
            }}
            okText="Yes"
            cancelText="No"
            >
              <a href="#">Delete</a>
          </Popconfirm>  */}
        </span>
      ),
    },
  ];

  
class MySubmission extends Component {

  state={
    submissionList:null,
    loadingStatusOfTable:true
  }

    async componentDidMount() {
        await this.props.fetchUserAllContents(`${this.props.auth.message._id}`).then(results =>{
          this.setState({
            submissionList:this.props.userContent.message
          })
        })
    }
    getSubmissionList() {
            return _.map(this.state.submissionList, content => {
              return (
                {
                  key: content.title,
                  name: content.title,
                  category: content.category,
                  type:content.type,
                  status:content.status,
                  action: content.link
                }
              );
            })
      }
      
      renderSubmissionList(){
        switch (this.state.submissionList) {
          case null:
            return <Table columns={columns} loading={true} dataSource={[]}/>
          default:
            return <Table columns={columns}  dataSource={this.getSubmissionList()}/>
        }
      }
    render() {
        return (
            <div>
                 {this.renderSubmissionList()}
            </div>
            
        )
    }
}
function mapStateToProps(state) {
    return {
        userContent: state.userContent,
        auth:state.auth
    };
}

export default connect(mapStateToProps,actions) (MySubmission);