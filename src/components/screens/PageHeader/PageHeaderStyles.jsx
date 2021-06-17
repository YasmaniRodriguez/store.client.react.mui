export const pageHeaderStyle = theme => {

    return ({
        pageHeader: {
            backgroundColor: '#8e6995',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& #store-view-cta': {
                cursor: 'pointer'
            },
            '& #my-brand': {

            },
            '& #discount-view-cta': {
                cursor: 'pointer'
            }
        }
    })
}
