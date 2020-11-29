import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysteryAnnouncements extends Component {
    render() {
        const {mystery} = this.props;

        const announcements = mystery.announcements.map((announcement, i) => {
           return (
               <li key={i}>
                   Announcement #{i}
               </li>
           );
        });

        return (
            <div>
                <ul>
                    {announcements}
                </ul>
            </div>
        );
    }
}

MysteryAnnouncements.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryAnnouncements;
