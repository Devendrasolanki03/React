import { Component } from "react";

class Life3 extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            color: "blue",
        };
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return `previous count was ${prevState.count}`;
    }

    componentDidUpdate(prevprops, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    increament = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log("render method");

        return (

            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.increament}>click</button>
            </>
        );
    }
}
export default Life3;