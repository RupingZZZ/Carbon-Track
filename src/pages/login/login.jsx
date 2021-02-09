import React,{Component} from "react";
import {message} from "antd";
import {reLogin} from "../../api"
import './login.less'
import { Form, Icon, Input, Button} from 'antd';
import {withRouter} from 'react-router-dom';
import memoryUtils from  '../../utils/memoryUtils';
import storageUtils from  '../../utils/storageUtils';



 class Login extends Component{
  handleSubmit = e => {
        e.preventDefault();

   this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {username,password} = values
                const response= await reLogin(username,password)
                if(response==true){
                message.success("success")

                    memoryUtils.username = username;
                    console.log('登入',memoryUtils.username);

                    console.log( '保存',storageUtils.saveUser(username))
                    this.props.history.replace('/')
                    console.log('xinxi',response,username)
                }
                else{

                    message.error("baocuo")
                    console.log('xinxi',response)
                }
            }else
                console.log('error')
        });
    };

     HandSigh=()=>{
     this.props.history.push('/register')

     }

    render() {

   //     const username = memoryUtils.username
     //   if (username) {
       //     return <Redirect to='/'></Redirect>
     //   }

        const { getFieldDecorator } = this.props.form;
        return (
          <div className={"body"}>
              <div className={"body-header"}></div>
              <div className={"login"}>
                  <div className={"login-header"}><h3>User Login</h3></div>
                  <div className={"login-content"}>
                      <Form onSubmit={this.handleSubmit} className="login-form" >
                          <Form.Item>
                              {getFieldDecorator('username', {
                                  rules: [
                                      { required: true, message: 'Please input your username!' },
                                      { min: 4, message: 'Need to pass 4 digits' },
                                      { max: 20, message: 'Enter up to 20 digits!' }

                                  ],
                              })(
                                  <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="Username"
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
                                  Log In
                              </Button>
                                  <Button type="primary"  onClick={this.HandSigh}   className="login-form-button">
                                      Sign Up
                                  </Button>
                          </Form.Item>
                      </Form>

                  </div>
                  <div className={"login-footer"}>  </div>
              </div>

          </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login)
export default withRouter(WrappedNormalLoginForm);