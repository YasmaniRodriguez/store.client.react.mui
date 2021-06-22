import { red } from "@material-ui/core/colors"

export const navBarStyle = theme => {

    return ({
        container: {
            background: 'linear-gradient(to bottom, #000000 0%, #1E313E 100%)',
            color: '#fffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',

            '& #header-brand-container': {
                display: 'flex',
                justifyContent: 'center',
                minWidth: '10vw',
                color: '#FFFFFF'
            },

            '& #header-category-container': {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                minWidth: '70vw',
                color: '#FFFFFF'
            },

            '& #header-order-container': {
                display: 'flex',
                justifyContent: 'space-around',
                minWidth: '10vw',
                color: '#FFFFFF'
            }
        }
    })
}
