import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from "../layout/Loading";
import {Link} from "react-router-dom";

class Solved extends Component {
    render() {
        const {solvedMysteries} = this.props;
        if (solvedMysteries === null) {
            return (
                <Loading/>
            );
        }

        const mysteries = solvedMysteries.map(mystery => (
            <li>
                <Link to={'/mystery/' + mystery._id} style={linkStyle}>{mystery.title}</Link>
            </li>
        ));

        return (
            <div>
                <ul>
                    {mysteries}
                </ul>
            </div>
        );
    }
}

Solved.propTypes = {
    solvedMysteries: PropTypes.array,
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none',
    padding: 5,
};

export default Solved;
