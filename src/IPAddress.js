import React, {Component} from 'react';
import './IPAddress.css';

class IPAddress extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.ip}</h1>
                <p>(It is your IP address, probably :p)</p>
            </div>
        );
    }
}

export default IPAddress;