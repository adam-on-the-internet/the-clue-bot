import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClueTrackerRow extends Component {
    render() {
        const {announcements, item} = this.props;
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
            <tr>
                <td>{item}</td>
                <td>{itemSymbol}</td>
                <td>{itemClue}</td>
            </tr>
        );
    }
}

function removeStatusFromAnnouncement(announcement) {
    const statusStart = announcement.indexOf("(The");
    return announcement.slice(0, statusStart);
}

ClueTrackerRow.propTypes = {
    item: PropTypes.string,
    announcements: PropTypes.array,
}

export default ClueTrackerRow;
