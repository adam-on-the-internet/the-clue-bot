import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysteryClueTracker extends Component {
    render() {
        const {mystery} = this.props;

        return (
            <div>
                <p>...</p>
            </div>
        );
    }
}

MysteryClueTracker.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryClueTracker;
