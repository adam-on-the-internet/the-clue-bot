import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysteryAnnouncements extends Component {
    render() {
        const {mystery} = this.props;

        const announcements = mystery.announcements.map((announcement, i) => {
            const trimmedAnnouncement = removeStatusFromAnnouncement(announcement);
            return (
                <li key={i} style={itemStyle}>
                    {trimmedAnnouncement}
                </li>
            );
        });

        return (
            <div>
                <hr/>
                <h3>Announcements</h3>
                <hr/>
                <ul style={listStyle}>
                    {announcements}
                </ul>
            </div>
        );
    }
}

function removeStatusFromAnnouncement(announcement) {
    const statusStart = announcement.indexOf("(The");
    return announcement.slice(0, statusStart);
}

const listStyle = {
    textAlign: "left",
};

const itemStyle = {
    marginTop: 10,
};

MysteryAnnouncements.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryAnnouncements;
