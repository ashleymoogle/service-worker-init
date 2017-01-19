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
                <ul>
                    <li onClick={() => { factory.history.push(`/`)}}>HOME</li>
                    <li onClick={() => { factory.history.push(`/test`)}}>TEST</li>
                </ul>
            </div>
        )
    }
}

export default MenuNavTop
