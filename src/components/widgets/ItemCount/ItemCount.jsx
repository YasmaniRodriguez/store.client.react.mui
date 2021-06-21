import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyles.js';

const useStyles = makeStyles((theme)=> itemCountStyle(theme));

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