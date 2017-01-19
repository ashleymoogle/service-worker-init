import './AppContainer.css'
import MenuNavTop from '../menus/MenuNavTop'

class AppContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        console.log("Component mounted with props :", this.props)
    }

    render () {
        let {factory, counter, value, plus, less} = this.props
        console.log(this.props)
        return (
            <div className={"wrapper"}>
                <div>
                    <MenuNavTop factory={factory}/>
                </div>
                <h1>{counter.getState()}</h1>
                <h1>{value}</h1>
                <button onClick={plus}>+</button>
                <button onClick={less}>-</button>
                <button onClick={() => console.log(counter.getState())}>state</button>
            </div>
        )
    }
}

export default AppContainer
