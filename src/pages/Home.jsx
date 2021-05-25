import React from 'react';
import { Typography, Button, Grid, Container} from "@material-ui/core";
import useStyles from '../styles';
import {Link} from "react-router-dom";


const Home = () =>{
    const classes = useStyles();

    return(
        <>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Patient List
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello guys this is a test for material ui and I'm trying to make this sentence very long
                    </Typography>
                    <div className={classes.button}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Link to="/PatientList">
                                    <Button variant="contained" color="primary">
                                        See my patients 
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secundary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Home