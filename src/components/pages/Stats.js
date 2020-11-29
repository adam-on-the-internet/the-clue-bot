import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from "../layout/Loading";

class Stats extends Component {
    render() {
        if (this.props.stats === null) {
            return (
                <div>
                    <Loading/>
                </div>
            )
        }

        // each occurrence has a name & count
        const {
            crimeSceneOccurrences, culpritOccurrences, murderOccurrences, victimOccurrences,
            sceneCount, solvedMysteryCount, suspectCount, weaponCount
        } = this.props.stats;

        return (
            <div>
                <p>{solvedMysteryCount} mysteries have been solved!</p>
            </div>
        );
    }
}

Stats.propTypes = {
    stats: PropTypes.object,
}

export default Stats;
