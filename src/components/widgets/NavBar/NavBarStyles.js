import { red } from "@material-ui/core/colors"

export const navBarStyle = theme => {

    return ({
        container: {
            backgroundColor: '#8e6995',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            // maxWidth: '100vw',

            '& #header-brand-container': {
                display: 'flex',
                justifyContent: 'center',
                minWidth: '10vw'
            },

            '& #header-category-container': {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                minWidth: '70vw'
            },

            '& #header-order-container': {
                display: 'flex',
                justifyContent: 'space-around',
                minWidth: '10vw'
            }
        }
    })
}
