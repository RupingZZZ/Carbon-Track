import React,{Component} from "react";
import {Layout} from 'antd';
import {Redirect,Route,Switch} from 'react-router-dom'
import './admin.less'
import LeftMenu from "../../components/leftmenu";
import Header from "../../components/header";
import memoryUtils from "../../utils/memoryUtils";

import Home from "../home/home";
import Rank from "../rank/rank";
import Achievement from "../achievement/achievement";
import DetailGarge from "../detailGarge/detailGarge";
import DetailLevel from "../detailLevel/detailLevel";
import chooseWay from "../chooseWay/chooseWay";
import searchJourney from "../searchJourney/searchJourney";




const { Sider,Content} = Layout;
export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    fun = (state) => {

        this.setState({
            collapsed: state
        });
    }

    render() {
      const username = memoryUtils.username
        if (username=="") {
            return <Redirect to='./login'></Redirect>
        }


            return (
                <Layout style={{height: '736px'}}>
                    <Sider collapsible collapsed={this.state.collapsed}>
                        <LeftMenu></LeftMenu>
                    </Sider>
                    <Layout>
                        <Header handle={this.fun}></Header>
                        <Content>
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/rank' component={Rank}/>
                                <Route path='/achievement' component={Achievement}/>
                                <Route path='/detailGarge' component={DetailGarge}/>
                                <Route path='/detailLevel' component={DetailLevel}/>
                                <Route path='/chooseWay' component={chooseWay}/>
                                <Route path='/searchJourney' component={searchJourney}/>
                                <Redirect to={'home'}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            )
        }

}