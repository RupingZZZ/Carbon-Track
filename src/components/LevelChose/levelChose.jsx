import React, {Component, useState} from 'react';
import {Form, Input, Button, Icon} from 'antd';

 class levelChose extends Component{
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
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
                </Form>
            </div>

        )
    }

}
const WrappedNormalLoginForm = Form.create()(levelChose)
export default WrappedNormalLoginForm;