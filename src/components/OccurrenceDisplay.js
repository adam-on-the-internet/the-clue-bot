import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopFiveOccurrences from "./TopFiveOccurrences";

class OccurrenceDisplay extends Component {
    render() {
        const {groupName, occurrences} = this.props;

        return (
            <div>
                <hr/>
                <h2>Occurrences of {groupName}</h2>
                <ol>
                    <TopFiveOccurrences occurrences={occurrences}/>
                </ol>
            </div>
        );
    }
}

OccurrenceDisplay.propTypes = {
    groupName: PropTypes.string.isRequired,
    occurrences: PropTypes.array.isRequired,
}

export default OccurrenceDisplay;
