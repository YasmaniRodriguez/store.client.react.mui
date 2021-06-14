import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { counterStyle } from './CounterWidgetStyles';

const useStyles = makeStyles((theme)=> counterStyle(theme));

export const CounterWidget = () => {

    const [counter,setCounter] = useState(0);

    const classes = useStyles();

    const increment = () => {
        setCounter(counter +1);
    }

    const decrement = () => {
        setCounter(counter -1);
    }

    return <div className={classes.counterQtyCta}>
        <button onClick={e => decrement()}>-</button>
        {counter >= 0 && <p>{counter}</p> }
        <button onClick={e => increment()}>+</button>
    </div>
}