import { connect } from 'react-redux';

import './FirstContainer.css'
import MenuNavTop from '../menus/MenuNavTop'

class FirstContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        console.log("Component mounted with props :", this.props)
    }

    render () {
        let {factory, counter, counter2, onIncrement, onDecrement} = this.props
        return (
            <div className={"wrapper"}>
                <h2>Home</h2>
                <div>
                    <MenuNavTop factory={factory}/>
                </div>
                <div>
                    <h1>{counter}</h1>
                    <button onClick={() => onIncrement()}>+</button>
                    <button onClick={() => onDecrement()}>-</button>
                </div>
                <div>
                    <h1>{counter2}</h1>
                    <button onClick={() => onIncrement('2')}>+</button>
                    <button onClick={() => onDecrement('2')}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        counter2: state.counter2
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onIncrement:(x = "") => {
            dispatch({
                type:`INCREMENT${x}`,
            })
        },
        onDecrement:(x = "") => {
            dispatch({
                type:`DECREMENT${x}`,
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstContainer)
