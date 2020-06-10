import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({ 
    container: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.action.hover,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '100%',
        borderRadius: 20,
        padding: theme.spacing(2),
        boxSizing: 'border-box'
    },
    appbar: {
        boxShadow: 'none',
        backgroundColor: 'transparent'
    },
    brand: {
        paddingTop: theme.spacing(2),
        color: theme.palette.secondary.main,
        textAlign: 'center',
        background: '#fff',
        padding: theme.spacing(2),
        boxShadow: theme.shadows[2],
        borderRadius: '0 0 20px 20px'
    },
    'brand-logo': {
        lineHeight: 1
    },
    'bran-slogan': {
        lineHeight: 1
    }
}))