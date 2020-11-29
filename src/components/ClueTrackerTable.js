import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClueTrackerTable extends Component {
    render() {
        const {tableName, options, announcements} = this.props;

        if (options === undefined) {
            return (
                <></>
            );
        }

        const choiceRows = options.map((choice, index) => {
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

ClueTrackerTable.propTypes = {
    tableName: PropTypes.string,
    options: PropTypes.array,
    announcements: PropTypes.array,
}

export default ClueTrackerTable;
