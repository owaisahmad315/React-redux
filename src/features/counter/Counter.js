import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
    incrementByAsync,
    reset,
    decrementByAsync,
} from './pureReduxCounter';
import style from './Counter.module.css';

export function Counter() {
    const count = useSelector((state) => state.counterReducer)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(2)
    const [decrementAmount, setDecrementAmount] = useState(2)
    return (
        <div>
            <div className={style.row}>
                <button
                    className={style.button}

                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className={style.value}>{count}</span>
                <button
                    className={style.button}
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div className={style.row}>
                <input
                    type="number"
                    className={style.textbox}
                    vaule={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={style.button}
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    (+) By Amount
                </button>
                <button
                    className={style.asyncButton}
                    onClick={() => dispatch(incrementByAsync(Number(incrementAmount) || 0))}
                >
                    (+) By Async
                </button>
            </div>
            <div className={style.row}>
                <input
                    type="number"
                    className={style.textbox}
                    value={decrementAmount}
                    onChange={e => setDecrementAmount(e.target.value)}
                />
                <button
                    className={style.button}
                    onClick={() => dispatch(decrementByAmount(Number(decrementAmount) || 0))}
                >
                    (-) By Amount
                </button>
                <button
                    className={style.asyncButton}
                    onClick={() => dispatch(decrementByAsync(Number(decrementAmount) || 0))}
                >
                    (-) By Async
                </button>

            </div>
            <div className={style.row}>
                <button
                    className={style.button}
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}