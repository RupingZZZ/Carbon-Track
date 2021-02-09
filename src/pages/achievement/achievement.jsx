import React, {Component} from "react";
import './achievement.less'
import {Link} from "react-router-dom";

import {Slider} from 'antd';
import {reqAchievement} from "../../api";
import memoryUtils from "../../utils/memoryUtils";

export default class chooseWay extends Component {
    state = {
        posts: []
    }
    getScore = async (username = memoryUtils.username) => {
        const response = await reqAchievement(username);
        var list = new Array();
        var lastPosts = [];
        if (response.length > 0) {
            for (var i in response) {
                list.push(response[i].AchievementPoint);
            }
            list.sort(function (num1, num2) {
                return num1 - num2;
            })
            var maxcnt = eval(list[list.length - 1]);
            for (var i in response) {
                if (response[i].AchievementPoint == maxcnt) {
                    lastPosts.push(response[i])
                }

            }
            console.log(lastPosts)
            this.setState({
                posts: lastPosts
            })
        }
    }

    handleClick(params) {
        this.state = {
            selected: true,
            id: params
        }
        console.log(params)
    }

    componentDidMount() {
        this.getScore();
        this.handleClick()
    }

    render() {
        const {posts} = this.state;

        const content = posts.map((post, i) =>
            <div key={i}>
                <div className="achievement-item">
                    <div className="lf_box"></div>
                    <div className={"goal-content"}>
                        <span className={"Goal"}>{post.AchievementName}</span>
                        <span className={"numb"}>{post.AchievementPoint} points</span>
                        <div>
                            <Slider max={parseInt(10000)} value={parseInt(post.AchievementPoint)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="content">
                <div className="content-top">
                    <Link to="/home">
                        <i className="iconfont iconfanhui"></i>
                    </Link>
                </div>
                {content}
            </div>
        );
    }
}