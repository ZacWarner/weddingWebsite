export default (theme) => ({
    root: {
        height: '100vh',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: "#800000",
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
        }
    },
    image: {
        width: '100%',
        margin: theme.spacing(2),  
        [theme.breakpoints.down('md')]: {
            margin: 0,
        }
    },
    divider: {
        margin: theme.spacing(2),
        width: '25%'
    },
    hotelItem:{
        margin: theme.spacing(2),
    },
    anchorTag: {
        color: 'white'
    }
})