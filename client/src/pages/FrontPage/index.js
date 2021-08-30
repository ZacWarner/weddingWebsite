import React from 'react';

import {
    Grid,
    makeStyles
} from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const FrontPage = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid container className={classes.heroContainer} item xs={12}>

            </Grid>
        </Grid>
    )
};

export default FrontPage;