import React from "react";
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import {reqGarbageData, reqGarbageDataTest} from "../../api";
import memoryUtils from "../../utils/memoryUtils";

//Adjust the CSS style of the page
const MyPaper = styled(Paper)({
    width: 355,
    height: 1540,
    marginLeft: 0,
    marginRight: 10,
    marginTop: 10,
    padding: '0 0px',
});

const MyCard = styled(Card)({
    marginTop: 10,
    width: 335,
    height: 280,
});

const MyMedia = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9
});

const MyBottomBar = styled(AppBar)( {
    top: 'auto',
        bottom: 0,
});

export default class GarbageRecycleMain extends React.Component{
    state = {
        garbages: [],
        point: 0,
        points: 0,
        image: "",
    };

    getGarbage = async (id, number)=>{
        const username =memoryUtils.username;
        const points = await reqGarbageData(username, id, number);
        console.log("points", points)
        this.setState({
            points
        })
    };

    getGarbageTest =async ()=>{
        const garbages = await reqGarbageDataTest();
        console.log("garbages", garbages)
        //if (garbages.RecyclableId == 1){
            //this.setState({image: "/images/glass.jpg"})
        //}
        this.setState({
            garbages
        })
    };

    componentDidMount() {
        this.getGarbageTest();
    }

    render() {
       const {garbages} = this.state;

        return(
            <React.Fragment>
                <header>
                </header>
                <main>
                    <MyPaper className={"classes.paper"}>{/*The background paper for the page*/}
                        {garbages.map((item, index) => (
                        <div key={garbages.RecyclableId} onClick={() => {this.getGarbage(item.RecyclableId, 1)}}>
                            <MyCard className={"classes.card"}>{/*The card part for the page*/}
                                <MyMedia
                                    className={"classes.media"}
                                    image={"/images/allGarbage.jpg"}
                                    title="Contemplative Reptile"
                                />{/*The picture part of the card*/}
                                <CardContent>{/*The text part of the card*/}
                                    <Typography>
                                        {item.RecyclableName}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.RecyclablePoint} points
                                    </Typography>
                                </CardContent>
                            </MyCard>
                        </div>))}

                    </MyPaper>
                </main>
                <footer>{/*The bottom bar shows the points which are added to the user's account.*/}
                    <React.Fragment>
                        <MyBottomBar position="fixed" color="default" className={"classes.bottomBar"}>
                            <Toolbar>
                                <Typography edge="start" variant="body1" component="p">
                                    You have added {this.state.points} points.
                                </Typography>
                                <div className={"classes.grow"} />
                            </Toolbar>
                        </MyBottomBar>
                    </React.Fragment>
                </footer>
            </React.Fragment>
        );
    }


}