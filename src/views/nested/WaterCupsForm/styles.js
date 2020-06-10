import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    'input-container': {
        margin: `${theme.spacing(1)}px 0`
    },
    'btn-add': {
        margin: theme.spacing(1)
    },
    ribbon: {
        background: theme.palette.primary.main,
        clipPath: 'polygon(0 0, 100% 0, 97% 50%, 100% 100%, 0 100%)',
        color: '#fff',
        position: 'relative',
        marginLeft: `-${theme.spacing(2)}px`,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
    }
}))