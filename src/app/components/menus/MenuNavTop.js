import { Link, browserHistory } from 'react-router'
import "./MenuNavTop.css"

class MenuNavTop extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        console.log("Component MenuNavTop mounted with props :", this.props)
    }

    render () {
        let {factory} = this.props
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li onClick={() => browserHistory.push('/test')}>TEST</li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default MenuNavTop
