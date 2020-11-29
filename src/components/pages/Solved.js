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
            <tr key={mystery._id}>
                <td>
                    {mystery.title}
                </td>
                <td>
                    <Link to={'/mystery/' + mystery._id} style={linkStyle}>
                        <button>
                            Details
                        </button>
                    </Link>
                </td>
            </tr>
        ));

        return (
            <div>
                <table style={styleCenter}>
                    <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Details
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {mysteries}
                    </tbody>
                </table>
            </div>
        );
    }
}

Solved.propTypes = {
    solvedMysteries: PropTypes.array,
}

const styleCenter = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none',
    padding: 5,
};

export default Solved;
