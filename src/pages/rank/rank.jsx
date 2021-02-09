import React,{Component} from "react";
import { Avatar} from 'antd';
import "./rank.less"
import {reqAllUser, reqNowScore, reqUserName, reqUserRank} from "../../api"
import memoryUtils from "../../utils/memoryUtils";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

export default class Rank extends Component{
    state={
        users:[]
    }

    getAllUser=async ()=>{
        const users =await reqAllUser()
         console.log("用户们",users)
           this.setState({
             users
           })

    }

    getUserName =async (username=memoryUtils.username)=>{
        const user = await reqUserName(username);

        this.setState({
            user
        })
    }

    getUserRank = async (username=memoryUtils.username)=>{
        const rank = await reqUserRank(username);

        this.setState({
            rank
        })
    }

    getUserScore = async (username=memoryUtils.username)=>{
        const score = await reqNowScore(username);
        this.setState({
            score
        })
}

    componentDidMount() {
       this.getAllUser();
       this.getUserName();
       this.getUserRank();
       this.getUserScore();
    }

    render() {
      const {users} = this.state;
      const {user} = this.state;
      const {rank} = this.state;
      const {score}= this.state;
        return(
            <div className={"box"}>
                <div className={"userRank"}>
                    <div className={"username"}>{user}</div>
                <div className={"rank-middle"}>
                    <span className={"num"}>{rank}nd</span>
                    <Avatar size={64} icon="user" />
                    <span className={"Score"}>{score}</span>
                </div>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Rank</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Points</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((item,index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{index+1}</StyledTableCell>
                                    <StyledTableCell align="center">{item.UserEmail}</StyledTableCell>
                                    <StyledTableCell align="center">{item.UsersPoints}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
           </div>

        )
    }
}