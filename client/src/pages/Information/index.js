import React from 'react';

import {
    Grid,
    makeStyles,
    Typography,

} from '@material-ui/core'

import styles from './styles';

const useStyles = makeStyles(styles);
//this page has information
const Information = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems='flex-start' justifyContent="space-around" className={classes.root}>
            <Grid item xs={12} md={6}>
                <img src='/frontPage/cheers.jpg' className={classes.image} />
            </Grid>
            <Grid item container alignItems='center' justifyContent='center' direction='column' xs={12} md={6}>
                <Grid item>
                    <Typography variant='h2' align='center'>Hotels</Typography>
                </Grid>
                <hr className={classes.divider} />
                <Grid item className={classes.hotelItem}>
                    <Typography align='center' variant="h4">The Sterling Hotel</Typography>
                    <Typography align='center' variant='body1'>The hotel the wedding is taking place in.</Typography>
                    <Typography align='center' variant="body1">Call 1-916-448-1300 for group rate</Typography>
                </Grid>
                <Grid item className={classes.hotelItem}>
                    <Typography align='center' variant="h4">The Sheraton Grand Sacramento Hotel</Typography>
                    <Typography align='center' variant='body1'>Right down the street, 5 minute walk</Typography>
                    <Typography align='center' variant="body1">Call 1-916-813-7951 reference #M-LQCTJPP</Typography>
                    <a className={classes.anchorTag} href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1644868069822&key=GRP&app=resvlink" target="_blank">
                        <Typography align='center' variant='body1'>or Book Here</Typography>
                    </a>
                </Grid>
                <Grid item>
                    <Typography variant='h2' align='center'>Things to do</Typography>
                </Grid>
                <hr className={classes.divider} />
                <a className={classes.anchorTag} href="https://www.oldsacramento.com/" target="_blank"><Typography align='center' variant='body1'>Old Sacramento</Typography>   </a>
                <a className={classes.anchorTag} href="https://www.docosacramento.com/" target="_blank"><Typography align='center' variant='body1'>The Doco</Typography> </a>
                <a className={classes.anchorTag} href="https://www.imax.com/imax-esquire-oo" target="_blank"><Typography align='center' variant='body1'>Imax Theater</Typography>   </a>
                <a className={classes.anchorTag} href="https://www.saczoo.org/" target="_blank"><Typography align='center' variant='body1'>Sacramento Zoo</Typography>  </a>
                <a className={classes.anchorTag} href="https://www.beersinsac.com/sacramento-brewery-directory" target="_blank"><Typography align='center' variant='body1'>Breweries</Typography>  </a>
                <a className={classes.anchorTag} href="https://www.tripadvisor.com/Attractions-g32999-Activities-c49-Sacramento_California.html" target="_blank"><Typography align='center' variant='body1'>Musuems (crocker, Mosac, CA Museum)</Typography>   </a>
            </Grid>
        </Grid>
    )
};

export default Information;