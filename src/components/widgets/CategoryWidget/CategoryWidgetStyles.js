export const categoryStyle = theme => {

    return ({
        categoryContainer: {
            height: '9vh',
            width: '9vh',
            borderRadius: '50%',
            boxShadow: '0px 0px 10px 0px black',
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            cursor: 'pointer',
            
            '& img': {
                height: '50%',
                width: '50%'
            }
        }
    })
}
