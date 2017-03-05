var React = require("react");
var ReactDOM = require("react-dom");
require("./style/style.css");
import Slider from "./components/Slider";
var propsObj = {
    items: [
        {
            src: require("./images/1.jpg"),
            alt: "img-1"
        },
        {
            src: require("./images/2.jpg"),
            alt: "img-2"
        },
        {
            src: require("./images/3.jpg"),
            alt: "img-3"
        },
        {
            src: require("./images/4.jpg"),
            alt: "img-4"
        }
    ],
    dots: true,
    arrows: true,
    interval: 2000
};

ReactDOM.render(<Slider {...propsObj}/>, document.querySelector("#container"));

