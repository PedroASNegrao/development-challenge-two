import React from 'react';
import useStyles from './../styles'
import { Typography} from "@material-ui/core";
// Caso queria outro ícone, ir nesse site https://material-ui.com/pt/components/material-icons/

const PageFooter = () =>{
    const classes = useStyles();

    return(
        <>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant = "subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose
                </Typography>
            </footer>
        </>
    );
}

export default PageFooter