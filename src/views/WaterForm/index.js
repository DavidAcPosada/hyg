import React, { useState } from 'react';
import _ from 'lodash';
import { Typography, TextField, Grid, Box, Button, CircularProgress, Collapse } from '@material-ui/core';
import { Formik } from 'formik';

import { nameValidations } from './../../utils/validations'

import useStyles from './styles';
import WaterCupsForm from '../nested/WaterCupsForm';

export default ({ }) => {
    const classes = useStyles();
    const [loadingName, setLoadingName] = useState(false);
    const [displayName, setDisplayName] = useState(null);

    const handleLoadName = (data) => {
        setLoadingName(true);
        setTimeout(() => {
            setLoadingName(false);
            setDisplayName(`${_.startCase(data.name)} ${_.startCase(data.lastName)}`);
        }, 1300);
    }
    
    return (
        <>
            <Typography variant='h4' color='primary' className={classes.title}>Registro Consumo de Agua</Typography>
            <Formik
                initialValues={{
                    name: '',
                    lastName: ''
                }}
                onSubmit={handleLoadName}
                validationSchema={nameValidations}
            >
                {({ handleSubmit, values, handleChange, errors, touched, handleBlur }) => (
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={5}>
                        <Grid xs={12} sm={12} md={6}>
                            <Grid sm={12} md={12}>
                                <TextField
                                    label='Nombres'
                                    variant='outlined'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={(errors.name && touched.name)}
                                    helperText={(errors.name && touched.name) && errors.name}
                                    required
                                />
                            </Grid>
                            <Grid sm={12} md={12}>
                                <TextField
                                    label='Apellidos'
                                    variant='outlined'
                                    name='lastName'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={(errors.lastName && touched.lastName)}
                                    helperText={(errors.lastName && touched.lastName) && errors.lastName}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={12} md={6}>
                            <Box
                                display='flex'
                                justifyContent={{sm: 'start', md: 'center'}}
                                alignItems='center'
                                height='100%'
                            >
                                <Button variant='contained' color='secondary' type='submit'>
                                    {
                                        loadingName ? (
                                            <>
                                                Cargando... <CircularProgress size={22} className={classes.buttonProgress} />
                                            </>
                                        ) : 'Mostrar'
                                    }
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
                )}
            </Formik>
            <Collapse in={Boolean(displayName)} timeout='auto' unmountOnExit>
                { displayName && (
                    <div className={classes.displayName}>
                        <Typography variant='subtitle1' className='label'>Nombre Completo:&nbsp;</Typography>
                        <Typography variant='subtitle1'>{displayName}</Typography>
                    </div>
                ) }
                <WaterCupsForm />
            </Collapse>
        </>
    )
}