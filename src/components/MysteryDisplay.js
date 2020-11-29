import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from "./layout/Loading";
import MysteryDate from "./MysteryDate";
import MysterySolved from "./MysterySolved";
import MysteryAnnouncements from "./MysteryAnnouncements";
import MysteryClueTracker from "./MysteryClueTracker";

class MysteryDisplay extends Component {
    render() {
        const {mystery} = this.props;
        if (mystery === null) {
            return (
                <Loading/>
            );
        }

        console.log(mystery);

        return (
            <div>
                <h3>{mystery.title}</h3>
                <hr/>
                <MysteryDate mystery={mystery}/>
                <MysterySolved mystery={mystery} />
                <MysteryClueTracker mystery={mystery} />
                <MysteryAnnouncements mystery={mystery} />
            </div>
        );
    }
}

MysteryDisplay.propTypes = {
    mystery: PropTypes.object,
}

export default MysteryDisplay;
