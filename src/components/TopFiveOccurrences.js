import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TopFiveOccurrences extends Component {
    render() {
        const {occurrences} = this.props;
        const size = 5;
        return occurrences
            .filter((occurrence, index) => {
                return index < size;
            })
            .map((occurrence, index) => (
                <li key={index}>
                    {occurrence.name} ({occurrence.count} times)
                </li>
            ));
    }
}

TopFiveOccurrences.propTypes = {
    occurrences: PropTypes.array.isRequired,
}

export default TopFiveOccurrences;
