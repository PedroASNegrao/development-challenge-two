import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Container} from "@material-ui/core";
import useStyles from '../styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const PatientList = () =>{
    const classes = useStyles();

    return(
        <>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image Title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is a media Card you can use this section to describe the content
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary"> View</Button>
                                <Button size="small" color="primary"> Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default PatientList