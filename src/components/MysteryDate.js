import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MysteryDate extends Component {
    render() {
        const {mystery} = this.props;

        const d = new Date(mystery.dateStarted)
        const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d);
        const mo = new Intl.DateTimeFormat('en', {month: 'long'}).format(d);
        const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d);
        const dateNote = `Mystery started on ${mo} ${da}, ${ye}`;

        return (
            <div>
                <p>{dateNote}</p>
            </div>
        );
    }
}

MysteryDate.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryDate;
