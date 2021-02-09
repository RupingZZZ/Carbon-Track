import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import LevelCard from '../LevelCard/LevelCard';

const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 0,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function LevelP() {
    //css
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Paper square className={classes.paper}>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            <LevelCard info={{imgURL: "https://source.unsplash.com/random",
                                levelName: "First Level",
                                levelContent: "Specific target content and reward description."}}/>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </React.Fragment>
    );
}
