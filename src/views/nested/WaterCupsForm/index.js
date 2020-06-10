import React, { useState, useEffect } from 'react';
import { TextField, Button, Grow, Typography, Box } from '@material-ui/core';

import useStyles from './styles';

export default ({  }) => {
    const classes = useStyles();
    const [cups, setCups] = useState([{ id: 'day1', value: 0 }]);
    const [suma, setSuma] = useState({
        firstDays: 0,
        total: 0
    })

    const handleAddCup = () => {
        setCups([
            ...cups,
            { 
                id: `day${cups.length + 1}`,
                value: 0
            }
        ])
    }

    const getCount = () => {
        setSuma(0)
        let count = 0;
        cups.map((item, i) => {
            count = count + item.value;
            if (i < 5) {
                setSuma({
                    total: count,
                    firstDays: count
                })
            } else {
                setSuma({
                    ...suma,
                    total: count
                })
            }
        })
    }

    return (
        <div className={classes.container}>
            <Typography variant='subtitle2'>Cantidad de vasos consumidos en 5 días: { suma.firstDays } vasos</Typography>
            { 
                cups.map((cup, index) => (
                    <Grow in={true} timeout='auto' unmountOnExit>
                        <div className={classes['input-container']}>
                            <TextField
                                label={`Día ${index + 1}`}
                                variant='filled'
                                size='small'
                                name={cup.id}
                                defaultValue={cup.value}
                                onChange={(e) => {
                                    const newState = cups;
                                    newState[newState.indexOf(newState.find(item => item.id === cup.id))].value = +e.target.value;
                                    setCups(newState)
                                    getCount();
                                }}
                            />
                            { index === cups.length -1 && (
                                <Button
                                    className={classes['btn-add']}
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    onClick={handleAddCup}>Agregar día</Button>
                            )}
                        </div>
                    </Grow>
                ))
            }
            <Box
                width={{ xs:'100%', sm: '70%', md: '50%' }}
            >
                <div className={classes.ribbon}>
                    <Typography variant='subtitle1'>Total Vasos Consumidos: { suma.total } vasos</Typography>
                </div>
            </Box>
        </div>
    )
}