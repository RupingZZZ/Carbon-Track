import React, {Component} from "react";
import './chooseWay.less'
import {Button, Form, Input, message} from 'antd';
import {reqappJourney, reqAppSetVtype, reqMaxScore} from "../../api";
import memoryUtils from "../../utils/memoryUtils";

 class chooseWay extends Component {
    state={
        id:3,
        journey:"walking",
        posts:[]
    }
    handleClick(params,VehicleName) {
        this.setState({
            id:params,
            journey:VehicleName,
            event:''
        })

    }
     handleSubmit =()=> {
         this.props.form.validateFields(async (err, values) => {
             if (!err) {
                 const {eventstort} =values;
                 memoryUtils.eventstort=eventstort;
                 console.log("jiru",memoryUtils.eventstort);
             }else
                 console.log('error')
         });
     };


    getData=async (username =memoryUtils.username)=>{
        const response = await reqappJourney(username);
        console.log(response)
        if(response.length > 0){
            for(var i=0;i<response.length;i++){
                if(response[i].VehicleName == "car"){
                    response[i]["icon"] = "iconfont iconcheliang-"
                }else if(response[i].VehicleName == "bike"){
                    response[i]["icon"] = "iconfont iconzihangche"
                }else if(response[i].VehicleName == "walking"){
                    response[i]["icon"] = "iconfont iconbuxing"
                }else if(response[i].VehicleName == "motorbike"){
                    response[i]["icon"] = "iconfont iconzihangche"
                }else if(response[i].VehicleName == "bus"){
                    response[i]["icon"] = "iconfont iconbusdaba"
                }
            }
        }

        this.setState({
            posts:response,
            id:memoryUtils.journeyId,
            journey:memoryUtils.journey,
        })

    }

    finish=async (username =memoryUtils.username)=>{
        const type = this.state.id
        const response = await reqAppSetVtype(username,type);
        if(response){
            memoryUtils.journeyId =  this.state.id;
            memoryUtils.journey = this.state.journey;
            this.props.history.replace('/')
        }

        memoryUtils.journeyId = this.state.id
        console.log("类型",this.state.id)
    }




    backClick(){
        window.history.back(-1)
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {posts} =this.state;
        const {id} =this.state;
        const { getFieldDecorator } = this.props.form;
        const content = posts.map((post) =>
            <div key={post.VehicleId} className={id == post.VehicleId ? "content-item selected" : "content-item"} onClick={() => this.handleClick(post.VehicleId,post.VehicleName)}>
			<span class="filter-option">
				<i className={post.icon}></i>
				 <span className="mg-left"> {post.VehicleName} </span>
			</span>
                <span className="iconfont iconicon_duihao-mian"></span>
            </div>
        );
        return (
            <div className="content">
                <div className="content-top">
                    <i className="iconfont iconfanhui" onClick={() => this.backClick()}></i>
                </div>
                {content}
                <Form  className="level-form"  >
                    <Form.Item>
                        {getFieldDecorator('eventstort', {
                            rules: [
                                { required: true, message: 'please input the name of event!' },
                                { min: 0, message: 'Need to pass 0 digits' },
                                { max: 20, message: 'Enter up to 20 digits!' }
                            ],
                        })(
                            <Input
                                placeholder="please input the name of event"
                            />
                        )}
                    </Form.Item>
                </Form>
                <div className="content-footer">
                    <Button type="primary" onClick={() => this.finish()}>finish</Button>
                    <Button type="primary" onClick={this.handleSubmit}>sumbit</Button>
                </div>
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(chooseWay)
export default WrappedNormalLoginForm;