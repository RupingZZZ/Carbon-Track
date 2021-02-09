import React,{Component} from "react";
import './register.less'
import { Form, Icon, Input, Button} from 'antd';
import {message} from "antd";
import {reqResiter} from "../../api";

 class Register extends Component{

  handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {surName,firstName,Email,password} = values
                const response= await reqResiter(surName,firstName,Email,password)
                if(response==true){
                    message.success("success")
                    this.props.history.replace('/login')
                    console.log('xinxi',response)
                }
                else{
                    message.error("baocuo")
                    console.log('xinxi',response)
                }
            }else
                console.log('error')
        });
    };

     Handlist=()=>{
        this.props.history.goBack();

     }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <div className={"body"}>
              <div className={"body-header"}></div>
              <div className={"loginres"}>
                  <div className={"login-header"}><h3>User Register</h3></div>
                  <div className={"login-content"}>
                      <Form onSubmit={this.handleSubmit} className="login-form" >
                          <Form.Item>
                              {getFieldDecorator('surName', {
                                  rules: [
                                      { required: true, message: 'Please input your surName!' },
                                      { min: 1, message: 'Need to pass 1 digits' },
                                      { max: 4, message: 'Enter up to 4 digits!' }
                                  ],
                              })(
                                  <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="lastName"
                                  />
                              )}
                          </Form.Item>
                          <Form.Item>
                              {getFieldDecorator('firstName', {
                                  rules: [
                                      { required: true, message: 'Please input your firstName!' },
                                      { min: 1, message: 'Need to pass 1 digits' },
                                      { max: 4, message: 'Enter up to 4 digits!' }
                                  ],
                              })(
                                  <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="firstName"
                                  />
                              )}
                          </Form.Item>
                          <Form.Item>
                              {getFieldDecorator('Email', {
                                  rules: [
                                      { required: true, message: 'Please input your Email!' },
                                      { min: 4, message: 'Need to pass 4 digits' },
                                      { max: 20, message: 'Enter up to 20 digits!' }
                                  ],
                              })(
                                  <Input
                                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="'Email"
                                  />
                              )}
                          </Form.Item>
                          <Form.Item>
                              {getFieldDecorator('password', {
                                  rules: [
                                      { required: true, message: 'Please input your Password!' },
                                      { pattern: /^[A-Za-z0-9]+$/, message: 'Can only contain numbers and letters!' },
                                      { min: 3, message: 'Need to pass 3 digits' },
                                      { max: 20, message: 'Enter up to 20 digits!' }
                                      ],
                              })(
                                  <Input
                                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      type="password"
                                      placeholder="Password"
                                  />
                              )}
                          </Form.Item>
                          <Form.Item>
                              <Button type="primary" htmlType="submit" className="login-form-button">
                                  Register
                              </Button>
                              <Button type="primary" className="login-form-button" onClick={this.Handlist}>
                                  Return
                              </Button>

                          </Form.Item>
                      </Form>
                  </div>
              </div>
          </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Register)
Register =WrappedNormalLoginForm;
export default Register;