import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from "../layout/Loading";
import MysteryDisplay from "../MysteryDisplay/MysteryDisplay";

class Mystery extends Component {
    render() {
        const {solvedMysteries, id} = this.props;
        if (solvedMysteries === null || id === null) {
            return (
                <Loading/>
            );
        }

        const mystery = solvedMysteries.find((mystery) => {
            return mystery._id === id;
        });

        if (mystery === undefined) {
            return (
                <div>
                    <p>No mystery found.</p>
                </div>
            );
        }

        return (
            <div>
                <MysteryDisplay mystery={mystery} />
            </div>
        );
    }
}

Mystery.propTypes = {
    solvedMysteries: PropTypes.array,
    id: PropTypes.string,
}

export default Mystery;
