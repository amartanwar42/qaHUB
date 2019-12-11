import React, { Component } from 'react'
import axios from 'axios'
import { Table, Divider,Popconfirm, message } from 'antd';
import _ from "lodash";
import * as actions from '../../../actions'
import {connect} from 'react-redux'
import Axios from 'axios';

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
      key: 'id',
      key2:'link',

      render: (text,record) => (
        <span>
          <a href={record.link} target="_">Veiw</a>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure to publish this?"
            onConfirm={async ()=>{
              await axios.put(`/api/content/editShareKnowledge?contentId=${record.id}`,{"status":"published"})
              window.location.reload();
            }}
            okText="Yes"
            cancelText="No"
            >
              <a href="#">Publish</a>
          </Popconfirm>  
        </span>
      ),
    },
  ];

  
class Pendingsubmission extends Component {

  state={
    pendingSubmissionList:null,
    loadingStatusOfTable:true
  }

    async componentDidMount() {
        await this.props.fetchPendingContent('pending').then(results =>{
          switch(this.props.pendingSubmission){
            case null:
            this.setState({
              pendingSubmissionList:null
            })
            break
            default:
            this.setState({
              pendingSubmissionList:this.props.pendingSubmission.message
            })
          }
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
                  id: content._id,
                  link:content.link
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

export default connect(mapStateToProps,actions) (Pendingsubmission);
