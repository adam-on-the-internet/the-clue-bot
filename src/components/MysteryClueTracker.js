import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysteryClueTracker extends Component {
    render() {
        const {mystery} = this.props;

        let culpritClueTracker = "";
        if (mystery.culpritOptions !== undefined) {
            culpritClueTracker = buildClueTrackerTable("Suspect", mystery.culpritOptions, mystery.announcements);
        }
        let weaponClueTracker = "";
        if (mystery.weaponOptions !== undefined) {
            weaponClueTracker = buildClueTrackerTable("Weapon", mystery.weaponOptions, mystery.announcements);
        }
        let sceneClueTracker = "";
        if (mystery.sceneOptions !== undefined) {
            sceneClueTracker = buildClueTrackerTable("Scene", mystery.sceneOptions, mystery.announcements);
        }

        return (
            <div>
                <hr/>
                <h3>Clue Trackers</h3>
                <hr/>
                <div style={trackerStyle}>
                    {culpritClueTracker}
                    {weaponClueTracker}
                    {sceneClueTracker}
                </div>
            </div>
        );
    }
}

function buildClueTrackerTable(tableName, choices, announcements) {
    const choiceRows = choices.map((choice, index) => {
        return buildClueTrackerRow(choice, announcements, index);
    });
    return (
        <>
            <h3>{tableName} Clue Tracker</h3>
            <table>
                <thead>
                <tr>
                    <th>{tableName}</th>
                    <th>Eliminated</th>
                    <th>Clue</th>
                </tr>
                </thead>
                <tbody>
                {choiceRows}
                </tbody>
            </table>
        </>
    );
}

function buildClueTrackerRow(item, announcements, index) {
    const relevantClue = announcements.find((clue) => {
        return clue.includes("Clue #") && clue.includes(item);
    });
    const clueRevealed = relevantClue !== undefined;
    let itemSymbol = "";
    let itemClue = "";
    if (clueRevealed) {
        itemSymbol = "X";
        itemClue = removeStatusFromAnnouncement(relevantClue, item);
    }
    return (
        <tr key={index}>
            <td>{item}</td>
            <td>{itemSymbol}</td>
            <td>{itemClue}</td>
        </tr>
    );
}

function removeStatusFromAnnouncement(announcement) {
    const statusStart = announcement.indexOf("(The");
    return announcement.slice(0, statusStart);
}

const trackerStyle = {
    marginLeft: 20,
    marginRight: 20,
};

MysteryClueTracker.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryClueTracker;
