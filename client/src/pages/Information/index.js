import React from 'react';

import {
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core'

import styles from './styles';

const useStyles = makeStyles(styles);

const Information = () =>{
    const classes = useStyles();
    return (
        <Grid container alignItems='center' justifyContent="space-around" className={classes.root}>
            <Grid item xs={6}>
                <img src='/frontPage/cheers.jpg' className={classes.image} />
            </Grid>
            <Grid item xs={5}></Grid>
        </Grid>
    )

};

export default Information;