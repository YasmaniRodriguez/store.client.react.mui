export const itemDetailStyle = theme => {

    return ({
        container: {
            height: '90vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',

            '& #item-galery': {
                minWidth: '30vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                '& img': {
                    width: '80%',
                    height: '80%'
                }
            },

            '& #vertical-line': {
                width: '1px',
                height: '70vh',
                backgroundColor: '#8e6995'
            },

            '& #item-detail': {
                minWidth: '65vw',
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