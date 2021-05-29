import React from 'react';
import { 
    Typography,
    Button,
    Grid,
    Paper,
    Avatar,
    TextField,
    Select,
    MenuItem,
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider, 
    KeyboardDatePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from '../styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const InsertPatient = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
                    <Grid className={classes.singInForm}>
                        <Grid className={classes.singInFormLabel}>
                            <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                            Email:
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="email"
                                name="email"
                                autoComplete="email"
                                label="Email"
                                autoFocus
                                fullWidth
                            />
                        </Grid>
                        <Grid className={classes.singInFormLabel}>
                            <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                            Name:
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                name="name"
                                autoComplete="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid className={classes.singInFormLabel}>
                            <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                            Patient Gender:
                            </Typography>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            label="Gender"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            >
                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                            </Select>
                        </Grid>
                        <Grid>
                            <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                                Birthday
                            </Typography>

                        </Grid>
                        <Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    
            </Paper>
        </Grid>
    );

}

export default InsertPatient
