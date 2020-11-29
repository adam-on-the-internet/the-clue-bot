import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from "../layout/Loading";
import OccurrenceDisplay from "../MysteryStats/OccurrenceDisplay";

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
            crimeSceneOccurrences, culpritOccurrences, murderWeaponOccurrences, victimOccurrences,
            sceneCount, solvedMysteryCount, suspectCount, weaponCount
        } = this.props.stats;

        return (
            <div>
                <p>{solvedMysteryCount} mysteries have been solved!</p>
                <p>There are {sceneCount} crime scenes available.</p>
                <p>There are {suspectCount} suspects available.</p>
                <p>There are {weaponCount} weapons available.</p>
                <OccurrenceDisplay groupName="Crime Scenes" occurrences={crimeSceneOccurrences}/>
                <OccurrenceDisplay groupName="Culprits" occurrences={culpritOccurrences}/>
                <OccurrenceDisplay groupName="Murder Weapons" occurrences={murderWeaponOccurrences}/>
                <OccurrenceDisplay groupName="Victims" occurrences={victimOccurrences}/>
            </div>
        );
    }
}

Stats.propTypes = {
    stats: PropTypes.object,
}

export default Stats;
