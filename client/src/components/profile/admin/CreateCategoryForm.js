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
  Modal,
  Spin,
  Alert 
} from 'antd';
const { TextArea } = Input;

class CreateCategoryForm extends React.Component {
  state = {
    submittedClicked: false
  }

  success(successMessage) {
    Modal.success({
      title: 'Success',
      content: `${successMessage}`,
      onOk:()=>{
        window.location.reload();
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
        <Spin size="large"tip="Loading...">
          <Alert
            message="Category creation processing"
            type="info"
          />
        </Spin>
      )
    }

  }

  handleSubmit = e => {
  
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      // var handler = this.props.handler
      e.preventDefault();
      if (!err) {
        this.setState({
          submittedClicked: true,
        })
        await this.props.postCategory(values).then(() => {
          switch (this.props.createCategory.status) {
            case false:
              this.setState({
                submittedClicked: false,
              })
              this.error(`${this.props.createCategory.message.errmsg}`)
              break;
            case true:
              this.setState({
                submittedClicked: false,
              })
              this.success(`${this.props.createCategory.message}`)
              // handler()
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
                Category Name&nbsp;
              </span>
            }
          >
            {getFieldDecorator('categoryName', {
              rules: [{ required: true, message: 'Please input category name!', whitespace: true }],
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
            {getFieldDecorator('imagePath', {
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
            {getFieldDecorator('categoryDescription', {
              rules: [{ required: true, message: 'Please enter short description!', whitespace: true }],
            })(<TextArea placeholder="Short description of the content"
              autosize={{ minRows: 2, maxRows: 3 }} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" disabled={this.state.submittedClicked} >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );

  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(CreateCategoryForm);
function mapStateToProps(state) {
  return {
    category: state.category,
    shareknowledge: state.shareknowledge,
    createCategory: state.createCategory
  };
}

export default connect(mapStateToProps, actions)(WrappedRegistrationForm);