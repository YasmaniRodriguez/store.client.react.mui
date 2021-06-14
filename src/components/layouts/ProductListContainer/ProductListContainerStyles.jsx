export const productListStyle = theme => {

    return ({
        productCatalog: {
            height: '70vh',
            width: '100vw',
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: 'auto auto auto auto auto',
            columnGap: '20px',
            rowGap: '20px',
            padding: '20px 20px'
        }
    })
}