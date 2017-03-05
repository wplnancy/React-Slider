var React = require("react");
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(i) {
        i = i - this.props.nowLocal;
        this.props.turn(i);
    }


    render() {
        var dots = [];
        var step = this.props.nowLocal === 4 ? 0 : this.props.nowLocal;
        for (var i = 0; i < this.props.count; i++) {
            dots.push(<li key={i} className={step === i ? "active" : ""} onClick={this.handleClick.bind(this, i)}>

            </li>);
        }
        return (
            <ul className="focusList">
                {
                    dots
                }
            </ul>

        )
    }
}


