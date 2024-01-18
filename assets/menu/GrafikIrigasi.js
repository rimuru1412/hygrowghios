import React, { Component } from "react";
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { VictoryChart, VictoryLine } from "victory-native"
import database from '@react-native-firebase/database';

class GrafikIrigasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PPM: []
        };
    }

    componentDidMount() {
        database()
            .ref('LOG')
            .limitToLast(50)
            .on('value', snapshot => {
                let dataPoints = [];
                snapshot.forEach(childSnapshot => {
                    dataPoints.push(childSnapshot.val().PPM);
                });
                this.setState({ PPM: dataPoints });
            });
    }

    render() {
        return (
                <VictoryChart height={responsiveHeight(29)}>
                    <VictoryLine animate data={this.state.PPM} />
                </VictoryChart>
        )
    }
}

export default GrafikIrigasi;
