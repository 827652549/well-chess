import React from "react";

/**
 * 计时器
 * 每秒+1
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {second: 0};
    }

    tick() {
        this.setState(
            state => ({
                second: state.second + 1
            }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (<div>
            Second:{this.state.second}
        </div>);
    }
}

export default Timer;
