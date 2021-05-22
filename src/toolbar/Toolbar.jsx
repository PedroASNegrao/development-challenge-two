import React from 'react';
import useStyles from './../styles'
import { Typography, AppBar, CssBaseline, Toolbar} from "@material-ui/core";
// Caso queria outro ícone, ir nesse site https://material-ui.com/pt/components/material-icons/
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const PageToolBar = () =>{
    const classes = useStyles();

    return(
        <>
            <CssBaseline></CssBaseline>
            <AppBar position="relative">
                <Toolbar>
                    <LocalHospitalIcon className = {classes.icon}></LocalHospitalIcon>
                    <Typography variant="h6">
                        Patient List
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default PageToolBar