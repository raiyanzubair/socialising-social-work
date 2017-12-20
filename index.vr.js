import React from 'react';
import InfoBox from './components/InfoBox'
import IntroBox from './components/IntroBox'
import Button from './components/Button'
import { scenario, levelData } from './constants'

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
} from 'react-vr';


export default class WelcomeToVR extends React.Component {
  componentWillMount() {
    this.state = {
      level: 0,
      mood: 50,
      location: "",
      scenario: "",
    }
    this.changeLocation = this.changeLocation.bind(this)
    this.changeLevel = this.changeLevel.bind(this)
    this.setMood = this.setMood.bind(this)
    this.changeLocation(this.state.level) 
  }

  changeLocation(level) {
    this.setState({
      location: levelData[level].location
    })
  }

  changeLevel(level) {
    this.setState({level: level, mood: 50})
    this.changeLocation(level)
  }

  setMood(mood) {
    this.setState({mood: mood})
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: "row"}}>
        <Pano source={asset(this.state.location)}/>
        {this.state.level === 0  ? <IntroBox changeLevel={this.changeLevel} /> 
        : 
        <View>
          <InfoBox setMood={this.setMood} changeLevel={this.changeLevel} state={this.state} />
        </View>
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

//<Model 
//  source={{obj:asset('BodyMesh.obj'), mtl:asset('BodyMesh.mtl')}}
///>
