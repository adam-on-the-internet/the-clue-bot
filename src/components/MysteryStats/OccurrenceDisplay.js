import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OccurrenceDisplay extends Component {
    render() {
        const {groupName, occurrences} = this.props;

        const size = 5;
        const items = occurrences
            .filter((occurrence, index) => {
                return index < size;
            })
            .map((occurrence, index) => (
                <p key={index}>
                    #{index + 1}. {occurrence.name} ({occurrence.count} times)
                </p>
            ));

        return (
            <div>
                <hr/>
                <h2>Occurrences of {groupName}</h2>
                {items}
            </div>
        );
    }
}

OccurrenceDisplay.propTypes = {
    groupName: PropTypes.string.isRequired,
    occurrences: PropTypes.array.isRequired,
}

export default OccurrenceDisplay;
