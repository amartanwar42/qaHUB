import React from 'react'
import * as actions from '../../../actions'
import { connect } from 'react-redux'
import '../../../index.css';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Button,
  AutoComplete,
  message,
  Modal,
  Spin,
  Alert
} from 'antd';
import Loading from '../../Loading'
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin-left: 45%;
    margin-top: 10%;
    border-color: red;
    margin-bottom: 5%;
`;

const { TextArea } = Input;

class UpdateCategoryModal extends React.Component {
    state = {
        isFetchingData: true,
        submittedClicked: false
      }
    
      renderLoading1() {
        if (this.state.submittedClicked) {
          return <Loading css={override} />
        }
    
      }

      success(successMessage) {
        Modal.success({
          title: 'Success',
          content: `${successMessage}`,
          onOk:()=>{
            // window.location.reload();
          }
        });
      }
      
      error(errorMessage) {
        Modal.error({
          title: 'There is an error while creating category',
          content: `${errorMessage}`,
        });
      }
    
      renderLoading() {
        if (this.state.submittedClicked) {
          return (
            <Spin size="large"tip="Processing...">
              <Alert
                message="Category update in process"
                type="info"
              />
            </Spin>
          )
        }
    
      } 
      handleSubmit = e => {
        this.setState({
          submittedClicked: true,
        })
    
        this.props.form.validateFieldsAndScroll(async (err, values) => {
          e.preventDefault();
          if (!err) {
            await this.props.updateCategory(`${this.props.id}`,values).then(() => {
              switch (this.props.updateCategory1.status) {
                case false:
                  this.setState({
                    submittedClicked: false,
                  })
                  this.error(`${this.props.updateCategory1.message.errmsg}`)
                  break;
                case true:
                  this.setState({
                    submittedClicked: false,
                  })
                  this.success(`${this.props.updateCategory1.message}`)
                  
                  break;
                default:
                  this.setState({
                    submittedClicked: true,
                  })
              }
    
    
            });
          }
          else {
            e.preventDefault();
    
          }
        });
      };
    
      render() {
        const { getFieldDecorator } = this.props.form;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 10 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 6,
            },
            sm: {
              span: 16,
              offset: 6,
            },
          },
        };
    
        return (
          <div>
            {this.renderLoading()}
            <Form {...formItemLayout} style={{ marginTop: '1%' }} onSubmit={this.handleSubmit} hideRequiredMark={true} >
    
              <Form.Item
                label={
                  <span>
                    Category Name &nbsp;
                  </span>
                }
              >
                {getFieldDecorator('categoryName', {initialValue:`${this.props.categoryName}`,
                  rules: [{ required: true, message: 'Please input category name!', whitespace: true,initialValue:"test"}],
                })(<AutoComplete
                  placeholder="Category Name"
                >
                  <Input />
                </AutoComplete>)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Image&nbsp;
                    <Tooltip title="Please provide link of the image to better render category">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('imagePath', {initialValue:`${this.props.imagePath}`,
                  rules: [{ required: true, message: 'Please enter link of the image!', whitespace: true }],
                })(<Input placeholder="Link of the image" />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Description&nbsp;
                    <Tooltip title="Short description about the category">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('categoryDescription', {initialValue:`${this.props.categoryDescription}`,
                  rules: [{ required: true, message: 'Please enter short description!', whitespace: true }],
                })(<TextArea placeholder="Short description of the content"
                  autosize={{ minRows: 2, maxRows: 3 }} />)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" disabled={this.state.submittedClicked}>
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </div>
        );
    
      }
    }
    
    const WrappedRegistrationForm = Form.create({ name: 'register' })(UpdateCategoryModal);
    function mapStateToProps(state) {
      return {
        updateCategory1: state.updateCategory
      };
    }
    
export default connect(mapStateToProps, actions)(WrappedRegistrationForm);
