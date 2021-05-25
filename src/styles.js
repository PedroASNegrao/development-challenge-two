import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.papper,
        padding: theme.spacing(8, 0, 6)
    },

    //ToolBar
    icon:{
        marginRight:'20px'
    },

    //Buttons
    button:{
        marginTop:'50px'
    },

    //Cards
    cardGrid:{
        padding: '20px 0'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%' // 16:9
    },
    cardContent:{
        flexGrow: 1,
    },

    //Insert Patients
    singInCard:{
        padding: '30px 20px',
        width: '50%',
        margin: '20px auto',
    },

    singInAvatar:{
        backgroundColor: '#3f51b5',
    },

    //Footer
    footer:{
        backgroundColor: theme.palette.background.papper,
        padding: '50px 0'
    }
}));

export default useStyles;