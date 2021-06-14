export const productListStyle = theme => {

    return ({
        productCatalog: {
            height: '70vh',
            width: '100vw',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            columnGap: '1em',
            rowGap: '1em',
            padding: '20px 20px'
        }
    })
}