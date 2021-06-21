export const brandWidgetStyle = theme => {

    return ({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '& img': {
                width: '60px',
                heigth: '60px'
            },
            '& h2': {
                fontSize: '2.5em',
                paddingLeft: '10px',
            }
        }
    })
}
