import React from "react";

type TTimeProps = {};
type TTimeState = {
    date: Date;
};

class Time extends React.Component<TTimeProps, TTimeState> {
    timer = null;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    updateDate() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateDate(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { date } = this.state;

        return <div>{date.toLocaleTimeString()}</div>;
    }
}

export default Time;
