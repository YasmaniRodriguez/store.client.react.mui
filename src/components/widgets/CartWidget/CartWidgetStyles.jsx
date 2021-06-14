export const cartStyle = theme => {

    return  ({
        cartViewCta : {
            backgroundColor: 'white',
            height: '70px',
            width: '70px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '-20px',

            '& #cart-btn': {
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px 0px black',
                cursor: 'pointer',
                opacity: '0.5'
            }
        }
    })
}
