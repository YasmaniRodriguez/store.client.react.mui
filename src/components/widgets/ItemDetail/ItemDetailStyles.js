export const itemDetailStyle = theme => {

    return ({
        container: {
            height: '90vh',
            width: '100vw',
            display: 'flex',
            '& #item-galery': {
                width: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& img': {
                    width: '500px',
                    height: '500px'
                }
            },
            '& #vertical-line': {
                width: '1px',
                backgroundColor: '#8e6995'
            },
            '& #item-detail': {
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '10px 20px',
                '& :nth-child(1)': {
                    fontSize: '3em',
                    textTransform: 'uppercase'
                },
                '& :nth-child(2)': {
                    fontSize: '2em'
                },
                '& :nth-child(3)': {
                    fontSize: '2em'
                }
            }
        }
    })
}