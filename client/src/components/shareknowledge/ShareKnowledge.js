import _ from "lodash";
import React from 'react'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import '../../index.css';
import {
  Form,
  Input,
  Select,
  Tooltip,
  Icon,
  Button,
  AutoComplete,
  Modal,
  Spin,
  Alert 

} from 'antd';
const { TextArea } = Input;
const { Option } = Select
const Types=["Blog/Article","Project","Video/Podcast","Presentation/Slides"]

class RegistrationForm extends React.Component {
  state={
    submittedClicked: false
  }
  success(successMessage) {
    Modal.success({
      title: 'Success',
      content: `${successMessage}`,
      destroyOnClose:true,
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
        <Spin size="large" tip="Loading..." style={{marginTop:'150px'}}>
          <Alert
            message="Category creation processing"
            type="info"
            style={{marginTop:'10px'}}
          />
        </Spin>
      )
    }

  }

  handleSubmit = e => {  
    this.props.form.validateFieldsAndScroll(async(err, values) => {
      e.preventDefault();
      if (!err) {
        this.setState({
          submittedClicked: true,
        }) 
        await this.props.postShareknowledge(values).then(result => {
          switch (this.props.shareKnowledge.status) {
            case false:
              this.setState({
                submittedClicked: false,
              })
              this.error(`${this.props.shareKnowledge.message.errmsg}`)
              break;
            case true:
              this.setState({
                submittedClicked: false,
              })
              this.success(`${this.props.shareKnowledge.message}`)
              break;
            default:
              this.setState({
                submittedClicked: true,
              })
          }
        }); 
      }
      else{
        e.preventDefault();
      }
    });
  };


   renderCategory(){
     switch(this.props.category){
      case null:
        return "";
      default:
        return _.map(this.props.category.message, category => {
          return(
            <Option key={category.categoryName} value={category.categoryName}>{category.categoryName}</Option>
          );
        })
     }
     
  }

  renderType(){
    return _.map(Types, type => {
      return(
        <Option key={type} value={type}>{type}</Option>
      );
    })
  }
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
      <div className="container" >
      <h1 className="heading" style={{marginTop:'40px'}}>Share Knowledge</h1>
        {this.renderLoading()}
        <Form {...formItemLayout}  onSubmit={this.handleSubmit} hideRequiredMark={true}>
        
        <Form.Item
          label={
            <span>
              Title&nbsp;
            </span>
          }
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input title!', whitespace: true }],
          })(<AutoComplete
            placeholder="Title of the Blog/Artice/Project"
          >
            <Input />
          </AutoComplete>,)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Link&nbsp;
            </span>
          }
        >
          {getFieldDecorator('link', {
            rules: [{ required: true, message: 'Please input link!', whitespace: true }],
          })(<AutoComplete
            placeholder="Link of the Blog/Artice/Project"
          >
            <Input />
          </AutoComplete>,)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Type&nbsp;
              <Tooltip title="Type of the Content">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please select type!', whitespace: true }],
          })(<Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Type"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.renderType()}
            {/* <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option> */}
          </Select>)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Category&nbsp;
              <Tooltip title="Category of the Content">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please select Category!', whitespace: true }],
          })(<Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a category"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.renderCategory()}
          </Select>)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Image&nbsp;
              <Tooltip title="Please provide link of the image to better render your contribution">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('image', {
            rules: [{ required: false, message: 'Please enter link of the image', whitespace: true }],
          })(<Input placeholder="Link of the image"/>)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Description&nbsp;
              <Tooltip title="Short description about the content">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please enter short description!', whitespace: true }],
          })(<TextArea placeholder="Short description of the content"
          autosize={{ minRows: 2, maxRows: 3 }} />)}
        </Form.Item>
        
        {/* <Form.Item {...tailFormItemLayout} onValuesChange={this.renderSubmit}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(
            <Checkbox >
              I have read the <a href="test.com">agreement</a>
            </Checkbox>,
          )}
        </Form.Item> */}
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

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
function mapStateToProps(state) {
  return {category: state.category,
    shareKnowledge: state.shareKnowledge};
}

export default connect(mapStateToProps,actions)(WrappedRegistrationForm);