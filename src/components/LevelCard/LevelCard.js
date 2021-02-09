import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withRouter} from 'react-router-dom';

//import dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(theme => ({root: {
        maxWidth: 345,
        padding: theme.spacing(2, 2, 0),
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export  function LevelCard(props) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose1 = () => {
        setOpen(false);


        props.history.goBack();
    };

    const handleClose2 = () => {
        setOpen(false);

    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={props.info.imgURL}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.info.levelName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.info.levelContent}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Choose this level as your goal?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once you choose this level......
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose1} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default withRouter(LevelCard);