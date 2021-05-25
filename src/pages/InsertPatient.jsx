import React from 'react';
import { 
    Typography,
    Button,
    Grid,
    Paper,
    Avatar,
    TextField,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@material-ui/core";
import useStyles from '../styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const InsertPatient = () => {
    const classes = useStyles();

    return(
        <Grid>
            <Paper elevation={20} className={classes.singInCard}>
                    <Grid align="center">
                        <Avatar className={classes.singInAvatar}>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                            Sign up
                        </Typography>
                        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
                            Please fill this form to add a Patient to the list
                        </Typography>
                    </Grid>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Patient Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                    </form>
            </Paper>
        </Grid>
    );

}

export default InsertPatient
