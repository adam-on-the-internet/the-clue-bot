import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClueTrackerRow from "./ClueTrackerRow";

class ClueTrackerTable extends Component {
    render() {
        const {tableName, options, announcements} = this.props;

        if (options === undefined) {
            return (
                <p>{tableName} options are not known yet.</p>
            );
        }

        const choiceRows = options.map((choice, index) => (
            <ClueTrackerRow key={index} item={choice} announcements={announcements} index={index}/>
        ));
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

ClueTrackerTable.propTypes = {
    tableName: PropTypes.string,
    options: PropTypes.array,
    announcements: PropTypes.array,
}

export default ClueTrackerTable;
