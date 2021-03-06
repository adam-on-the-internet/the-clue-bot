import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <hr/>
                <div style={textStyle}>
                <p>
                    The Clue Bot runs through a cycle of creating and solving murder mysteries. Each mystery consists of
                    a Victim, Culprit, Murder Weapon, Crime Scene, and Clues that lead to the solution. These aspects
                    and more are randomly-generated from lists I have compiled. A Twitter Bot tweets out updates as the
                    mysteries are unravelled.
                </p>
                <p>
                    Created by:
                </p>
                <p>
                    <a href="http://www.adamontheinternet.com/" target="_blank" rel="noreferrer">
                        Adam on the Internet
                    </a>
                </p>
                </div>
            </div>
        );
    }
}

const textStyle = {
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'left',
};

export default About;
