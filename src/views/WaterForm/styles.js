import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    title: {
        fontWeight: 'bold'      
    },
    form: {
        boxSizing: 'border-box',
        padding: `${theme.spacing(3)}px 20px`,
        paddingTop: 40,
        '& .MuiTextField-root': {
            margin: `${theme.spacing(1)}px 0`,
            width: '100%'
        }
    },
    buttonProgress: {
        color: theme.palette.common.white,
        marginLeft: 12
    },
    displayName: {
        display: 'flex',
        margin: `${theme.spacing(2)}px 0`,
        color: '#707070',
        '& > .label': {
            fontWeight: 'bold',
            marginRight: 10
        }
    }
}))