export default function counter (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state+1, action)
            return state + 1
        case 'DECREMENT':
            console.log(state-1, action)
            return state - 1
        default:
            return state
    }
}