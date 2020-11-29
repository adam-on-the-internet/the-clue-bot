import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysterySolved extends Component {
    render() {
        const {mystery} = this.props;

        const subtitle = mystery.solved
            ? `${mystery.victim} was killed by ${mystery.culprit} in the ${mystery.scene} with the ${mystery.weapon}.`
            : "The mystery has not yet been solved.";

        return (
            <div>
                <p>Solution: {subtitle}</p>
            </div>
        );
    }
}

MysterySolved.propTypes = {
    mystery: PropTypes.object,
}

export default MysterySolved;
