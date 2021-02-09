import React, {Component} from "react";
import './home.less'
import {Avatar} from "antd";
import {Slider} from 'antd';
import {Button} from 'antd';
import GarbageRecycleMain from "../../components/GarbageRecycleMain/GarbageRecycleMain";
import {Link} from "react-router-dom";
import {reqall, reqEvent, reqNowScore, reqScore, reqUserName} from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import {withRouter} from 'react-router-dom';

 class Home extends Component {
    state = {
        time: 0,
        journey: "",
        eventstort: "",
    }


    handleClick = () => {
        this.timer = setInterval(() => {
            this.setState({time: ++this.state.time})
        }, 1000)
    }
    handleSearch=()=> {
        this.props.history.push('/searchJourney')
    }

       putData = async (event) => {
        event.persist();
        const username = memoryUtils.username;
        const journeyId = memoryUtils.journeyId;
        const eventstort = memoryUtils.eventstort;
        clearInterval(this.timer);
        console.log("journeyId",journeyId);
       const response = await reqEvent  (username, journeyId, this.state.time, eventstort)
        if (response) {
            console.log("succeed", response)
        } else {
            console.log("false", response)
        }
        this.setState({time: 0});
    }

    /* handleReset = () => {
        clearInterval(this.timer);
        this.setState({time: 0});
        memoryUtils.time = this.state.time;
        console.log(this.state.time)
    } */

    getScore = async (username = memoryUtils.username) => {
        const response = await reqScore(username);
        const score = response;
        console.log("xinxi", score)
        this.setState({
            score
        })
    }

    getUserName = async (username = memoryUtils.username) => {
        const user = await reqUserName(username);
        this.setState({
            user
        })
    }

    getNowScore = async (username = memoryUtils.username) => {
        const nowScore = await reqNowScore(username);
        this.setState({
            nowScore
        })

    }

    getJourney = () => {
        this.setState({
            journey: memoryUtils.journey,
        })

    }



    componentDidMount() {
        this.getScore();
        this.getUserName();
        this.getNowScore();
        this.getJourney();
    }

    render() {
        const {user} = this.state;
        const {score} = this.state;
        const {nowScore} = this.state;


        return (
            <div className={"box"}>
                {/* 个人成绩*/}
                <div className={"goal"}>
                    <div className={"goal-top"}>
                        <Avatar size="large" icon="user"/>
                        <span className={"username"}> {user}</span>
                        <Link to="/detailLevel">
                            <Button className={"link"}> set </Button>
                        </Link>
                    </div>
                    <div className={"goal-content"}>
                        <span className={"Goal"}>Current</span>
                        <span>{nowScore} points</span>
                        <div>
                            <Slider max={parseInt(score)} value={parseInt(nowScore)}/>
                        </div>
                    </div>
                </div>
                <div className={"journey"}>
                    <div className={"journey-top"}>
                        <span>Journey Tracker</span>
                        <Link to="/chooseWay">
                            <Button className={"link"}> set </Button>
                        </Link>
                    </div>
                    <div className={"journey-middle"}>
                        <span className={"distance"}>Time</span>
                        <span className={"parameter"}>{this.state.time}</span>
                        <span>s</span>
                        <span className={"tool"}>{this.state.journey}</span>
                        <div className={"journey-button"}>
                            <div className={"journey-button1"}>
                                <Button type="primary" onClick={this.handleClick}>Start</Button>
                            </div>
                            <div className={"journey-button2"}>
                                <Button type="primary" onClick={this.putData}>save</Button>
                            </div>
                        </div>
                    </div>
                    <div className={"journey-button3"}>
                        <Button type="primary" onClick={this.handleSearch}>search</Button>
                    </div>
                </div>
               <GarbageRecycleMain></GarbageRecycleMain>
            </div>
        )
    }
}

export default withRouter(Home);