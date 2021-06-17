export const productStyle = theme => {

    return ({
        productContainer: {
            height: '40vh',
            width: '20vh',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px 0px black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            padding: '5px 5px',

            '& .product-galery': {
                minHeight: '50%',
                width: '100%',
                backgroundColor: '#ededed',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',

                '& img': {
                    height: '50%',
                    width: '50%'
                }
            },

            '& .product-description': {
                height: '25%',
                width: '100%'
            }
        }
    })
}

// .product-card-container > .product-purchase > .product-quantity {
//     height: 50%;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 5px 5px;
// } 

// .product-card-container > .product-purchase > .product-quantity > .pdt-qty-value {
//     height: 100%;
//     width: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// } 

// .product-card-container > .product-purchase > .product-quantity > .pdt-qty-action {
//     height: 100%;
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
// } 

// .product-card-container > .product-purchase > .product-quantity > .pdt-qty-action > .qty-action {
//     height: 20px;
//     width: 20px;
//     border-radius: 20px;
//     background-color: #8e6995;
//     cursor: pointer;
// } 

// .product-card-container > .product-purchase > .product-add-cta {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 40%;
//     width: 100%;
//     border: solid 1px black;
//     font-size: 0.7em;
//     border-radius: 50px;
//     cursor: pointer;
// } 