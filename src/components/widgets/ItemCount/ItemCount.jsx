import React , {useState} from 'react';
import { Button, makeStyles } from '@material-ui/core';

export const ItemCount = () => {
    const classes = useStyles();

    const [counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter +1);
    }

    const decrement = () => {
        counter == 0 ? setCounter(0) : setCounter(counter -1);
    }

    return <div className={classes.container}>
        <button onClick={e => decrement()}>-</button>
        <p>{counter}</p>
        <button onClick={e => increment()}>+</button>
    </div>
}

const useStyles = makeStyles((theme)=> ({
    container: {
        height: '200px',
        width: '400px',
        backgroundColor: '#ffffff',
        border: 'solid 1px black',
        display: 'flex'
    }
}));