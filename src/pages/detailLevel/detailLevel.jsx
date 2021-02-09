import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {reqMaxScore} from "../../api";
import LevelP from "../../components/levelPages/LevelP";
import "./index.less"
import memoryUtils from "../../utils/memoryUtils";


class detailLevel extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {maxScore} = values
                const username = memoryUtils.username
                console.log("邮箱",username);
                console.log("分数",maxScore)
                const response= await reqMaxScore(username,maxScore)
                if(response==true){
                    message.success("success")
                    this.props.history.replace('/')
                }
                else{
                    message.error("baocuo")
                    console.log('xinxi',response)
                }
            }else
                console.log('error')
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <LevelP/>
                <div className={"level"}>
                <Form onSubmit={this.handleSubmit} className="level-form"  >
                    <Form.Item>
                        {getFieldDecorator('maxScore', {
                            rules: [
                                { required: true, message: 'Please input your max score!' },
                                { min: 0, message: 'Need to pass 0 digits' },
                                { max: 20, message: 'Enter up to 20 digits!' }
                            ],
                        })(
                            <Input
                                placeholder="please the number of max score"
                            />
                        )}
                    </Form.Item>
                    <Form.Item className={"submit"}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            </div>
        )
    }

}
const WrappedNormalLoginForm = Form.create()(detailLevel)
export default WrappedNormalLoginForm;