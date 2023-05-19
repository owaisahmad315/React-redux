

export const increment = () => {
    return {
        type: "INCREASE",
    }
}
export const decrement = () => {
    return {
        type: "DECREASE",
    }
}

export const incrementByAmount = (incrementAmount) => {
    return {
        type: "INCREMENTBYAMOUNT",
        payload: incrementAmount
    }
}

export const decrementByAmount = (decrementAmount) => {
    return {
        type: "DECREMENTBYAMOUNT",
        payload: decrementAmount
    }
}

// export const incrementByAsync = (incrementAmount) => {
//     return {
//         type: "INCREMENTBYASYNC",
//         payload: incrementAmount

//     }
// }

// export const decrementByAsync = (decrementAmount) => {
//     return {
//         type: "DECREMENTBYASYNC",
//         payload: decrementAmount

//     }
// }

export const reset = () => {
    return {
        type: "RESET",
    }
}



const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1;

        case "DECREASE":
            return state - 1;

        case "INCREMENTBYAMOUNT":
            return state + action.payload;

        case "DECREMENTBYAMOUNT":
            return state - action.payload;

        case "INCREMENTBYASYNC":
            return state + action.payload;

        case "DECREMENTBYASYNC":
            return state - action.payload;

        case "RESET":
            return state = 0;
        default:
            return state;
    }
}

export const incrementByAsync = (amount) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(incrementByAmount(amount))
        }, 1000)
    }

}

export const decrementByAsync = (amount) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(decrementByAmount(amount))
        }, 1000)
    }
}

export default counterReducer;