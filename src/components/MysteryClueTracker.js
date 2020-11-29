import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClueTrackerTable from "./ClueTrackerTable";

class MysteryClueTracker extends Component {
    render() {
        const {mystery} = this.props;

        return (
            <div>
                <hr/>
                <h3>Clue Trackers</h3>
                <hr/>
                <div style={trackerStyle}>
                    <ClueTrackerTable tableName="Scene" announcements={mystery.announcements} options={mystery.sceneOptions} />
                    <ClueTrackerTable tableName="Weapon" announcements={mystery.announcements} options={mystery.weaponOptions} />
                    <ClueTrackerTable tableName="Suspect" announcements={mystery.announcements} options={mystery.culpritOptions} />
                </div>
            </div>
        );
    }
}

const trackerStyle = {
    marginLeft: 20,
    marginRight: 20,
};

MysteryClueTracker.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryClueTracker;
