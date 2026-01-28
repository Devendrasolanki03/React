import { Component } from "react";

class MassagesLife extends Component {
    constructor() {
        super();
        console.log("Constructor: MassagesLife component is being constructed.");
    }
    componentDidMount() {
        console.log("componentDidMount: MassagesLife component has mounted.");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: MassagesLife component is about to unmount.");
    }
    render() {
        console.log("Render: MassagesLife component is rendering.");
        return (
            <div>
                <h2>welcome in last phase in </h2>
            </div>
        )
    }
}


export default MassagesLife;
