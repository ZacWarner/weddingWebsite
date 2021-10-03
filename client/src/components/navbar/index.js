import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(styles);

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color='transparent'>
                <Toolbar>
                    <Grid justifyContent='space-between' container>
                        <Grid className={classes.helpCenter} item>
                        </Grid>
                        <Grid item>
                            <Typography align='center' variant='h5'>Z & L</Typography>
                        </Grid>

                        <Grid item>
                            <Button color="inherit">Login</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}