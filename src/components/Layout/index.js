import React from 'react';
import { Paper, Box, NoSsr, AppBar, Typography, Toolbar } from '@material-ui/core';

import useStyles from './styles'

export default ({ children }) => {
    const classes = useStyles();

    return (
        <NoSsr>
            <div class={classes.container}>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar>
                        <div className={classes.brand}>
                            <Typography variant='h3' className={classes['brand-logo']}>H&G</Typography>
                            <Typography variant='subtitle2' className={classes['brand-slogan']}>Consultores S.A.S</Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <Box width={{ 
                    xs: '100%',
                    sm: '90%',
                    md: '70%',
                    lg: '50%'
                 }}>
                    <Paper
                        elevation={3}
                        className={classes.content}
                        >
                        { children }
                    </Paper>
                </Box>
            </div>
        </NoSsr>
    )
}