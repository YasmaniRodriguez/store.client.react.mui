import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { counterStyle } from './CounterWidgetStyles';

const useStyles = makeStyles((theme)=> counterStyle(theme));

export const CounterWidget = () => {
    const classes = useStyles();

    const [counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter +1);
    }

    const decrement = () => {
        counter == 0 ? setCounter(0) : setCounter(counter -1);
    }

    return <div className={classes.counterQtyCta}>
        <button onClick={e => decrement()}>-</button>
        <p>{counter}</p>
        <button onClick={e => increment()}>+</button>
    </div>
}