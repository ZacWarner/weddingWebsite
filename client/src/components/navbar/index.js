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
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color='transparent'>
                <Toolbar>
                    <Grid justifyContent='space-between' container>
                       
                        <Grid item>
                           <NavLink to='/' className={classes.navLink}><Typography className={classes.button} align='center' variant='h5'>Z & L</Typography></NavLink> 
                        </Grid>

                        <Grid item>
                            <NavLink className={classes.navLink} to='/information'><Button className={classes.button}>Information</Button></NavLink>
                            <Button color="inherit">Login</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}