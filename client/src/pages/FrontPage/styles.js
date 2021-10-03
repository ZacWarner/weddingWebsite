export default (theme) => ({
    heroContainer: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("frontPage/heroImage.png")',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
    },
    heroText: {
        color: 'white',
        fontStyle: 'italic',
        fontFamily: 'Ephesis, crusive'
    },
    break: {
        maxWidth: 70
    }
})