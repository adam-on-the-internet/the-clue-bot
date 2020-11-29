import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysteryAnnouncements extends Component {
    render() {
        const {mystery} = this.props;

        return (
            <div>
                <p>...</p>
            </div>
        );
    }
}

MysteryAnnouncements.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryAnnouncements;
