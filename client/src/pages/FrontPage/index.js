import React from 'react';

import {
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const FrontPage = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid container className={classes.heroContainer} justifyContent='center' alignItems='center' item xs={12}>
                <Grid item xs={12}>
                    <Typography align='center' className={classes.heroText} variant='h1'>Zac And Lisa </Typography>
                    <Typography align='center' className={classes.heroText} variant='h2'>Are Getting Married! </Typography>
                    <hr className={classes.break} />
                    <Typography align='center' className={classes.heroText} variant='h4'>10-29-2022</Typography>
                    <Typography align='center' className={classes.heroText} variant='h4'>Sterling Hotel</Typography>
                    <Typography align='center' className={classes.heroText} variant='h4'>Sacramento California</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default FrontPage;