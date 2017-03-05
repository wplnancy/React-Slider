var React = require("react");
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";
var imgUrl = require("../images/1.jpg");
var $ = require("jquery");
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
            isShow: false
        }
    }

    go(n) {
        var len = this.props.items.length;//4
        var _n = this.state.nowLocal + n;
        if (_n === len + 1) {
            this.$bannerInner.css({
                left: 0
            });
            _n = 1;
        }
        if (_n < 0) {
            this.$bannerInner.css({
                left: -3200
            });
            _n = len - 1;
        }

        this.setState({
            nowLocal: _n
        });

        this.$bannerInner.animate({
            left: -800 * _n
        }, 200);
    }


    autoPlay() {
        clearInterval(this.autoPlayFlag);
        this.autoPlayFlag = window.setInterval((item, index) => {
            this.go(1);
        }, this.props.interval);
    }

    componentDidMount() {
        var $bannerInner = $(".bannerInner");
        this.$bannerInner = $bannerInner;
        this.autoPlay();
    }

    handleMouseOut() {
        this.setState({
            isShow: false
        });
        this.autoPlay();
    };

    handleMouseOver() {
        this.setState({
            isShow: true
        });
        clearInterval(this.autoPlayFlag);

    }


    render() {
        var count = this.props.items.length;
        var arrowNodes = this.props.arrows ? <SliderArrow turn={this.go.bind(this)} isShow={this.state.isShow}/> : null;
        var dotsNodes = this.props.dots ?
            <SliderDots count={count} nowLocal={this.state.nowLocal} turn={this.go.bind(this)}/> : null;
        return (
            <div className="banner" onMouseOut={this.handleMouseOut.bind(this)}
                 onMouseOver={this.handleMouseOver.bind(this)}>
                <div className="bannerInner">
                    {
                        this.props.items.map((item, index) => {
                            return <div key={index}><img src={item.src} alt={item.alt}/></div>
                        })

                    }
                    <div><img src={imgUrl} alt=""/></div>
                </div>
                {
                    arrowNodes
                }
                {
                    dotsNodes
                }

            </div>

        )
    }
}


