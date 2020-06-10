import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
    palette: {
        primary: {
             main: '#577396'
        },
        secondary: {
            main: '#E17187'
        }
    },
    typography: {
        fontFamily: [
            'Poppins'
        ].join(',')
    }
})