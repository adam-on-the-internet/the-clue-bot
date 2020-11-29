import React, {Component} from 'react';
import MysteryDisplay from "../MysteryDisplay";
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        const {currentMystery} = this.props;
        return (
            <div>
                <MysteryDisplay mystery={currentMystery}/>
            </div>
        );
    }
}

Home.propTypes = {
    currentMystery: PropTypes.object,
}

export default Home;
