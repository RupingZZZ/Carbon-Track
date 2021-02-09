import React, {Component} from "react";
import "./searchJourney.less"
import {Form, Input, message} from "antd"


import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {reLogin, reqList} from "../../api";
import TableCell from "@material-ui/core/TableCell";
import {withRouter} from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";


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

export default class searchJourney extends Component {
    state = {
        eventlist: [],
        value: "",

    }

    handleSubmit = async (value) => {
        const response = await reqList(value);
        const eventlist = response;
        this.setState({
            eventlist
        })

    };

    componentDidMount() {

    }

    render() {
        const {eventlist} = this.state;
        const {Search} = Input;
        return (
            <div>

                <Search
                    placeholder="input search event"
                    enterButton="Search"
                    size="large"
                    onSearch={value => this.handleSubmit(value)}
                />



                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Event</StyledTableCell>
                                <StyledTableCell align="center">Type</StyledTableCell>
                                <StyledTableCell align="center">Point</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {eventlist.map((item, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{item.EventName}</StyledTableCell>
                                    <StyledTableCell align="center">{item.EventType}</StyledTableCell>
                                    <StyledTableCell align="center">{item.EventPoint}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        )
    }
}

