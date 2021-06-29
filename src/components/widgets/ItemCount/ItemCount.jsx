import React , {useState} from 'react';
import { Button, makeStyles, Typography, Avatar, IconButton } from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';

export const ItemCount = props => {
    const classes = useStyles();

    return <div className={classes.container}>
        <div className={classes.counter}>
            <Typography variant="h1" component="p">1</Typography>
            <div className={classes.button}>
                <IconButton className={classes.cta}>
                    <Avatar>
                        <Add/>
                    </Avatar>
                </IconButton>
                <IconButton className={classes.cta}>
                    <Avatar>
                        <Remove/>
                    </Avatar>
                </IconButton>
            </div>
        </div>
        <Button variant="outlined">Agregar al carrito</Button>
    </div>
}

// export const ItemCount = () => {
//     const classes = useStyles();

//     const [counter,setCounter] = useState(0);
//     const initial = 1;
//     const stock = 10;

//     const increment = () => {
//         setCounter(counter +1);
//     }

//     const decrement = () => {
//         counter == 0 ? setCounter(0) : setCounter(counter -1);
//     }

//     return <div className={classes.container}>
//         <button onClick={e => decrement()}>-</button>
//         <p>{counter}</p>
//         <button onClick={e => increment()}>+</button>
//     </div>
// }

const useStyles = makeStyles((theme)=> ({
    container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 5px'
    },
    cta: {
        padding: '1px 1px'
    }
}));