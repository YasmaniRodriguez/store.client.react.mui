export const navBarStyle = theme => {

    return ({
        container: {
            backgroundColor: '#8e6995',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            '& #header-store-container': {
                display: 'flex',
                '& #store-view-cta': {
                    cursor: 'pointer'
                },
                '& #brand-container': {
                    display: 'flex',
                },
            },
            '& #header-category-container': {
                display: 'flex',
                '& .category': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textTransform: 'uppercase',
                    padding: '0px 5px'
                }
            },
            '& #header-order-container': {
                display: 'flex',
                '& #discount-view-cta': {
                    cursor: 'pointer'
                },
                '& #order-view-cta': {
                    cursor: 'pointer'
                }
            }
        }
    })
}
