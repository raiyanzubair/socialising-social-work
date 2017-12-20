import React from 'react';
import Button from './Button'
import { scenarios } from '../constants'
import {
  Text,
  View,
  Box,
  VrButton
} from 'react-vr';

const headingStyle = {
	fontSize: 0.4,
	fontWeight: '400',
}

const textStyle = {
	fontSize: 0.2,
	fontWeight: '400',
}

export default class IntroBox extends React.Component {

	render() {
		return (
			<View
				style={{
					backgroundColor: '#777879',
				  layoutOrigin: [0.5, 0.5],
				  paddingLeft: 0.2,
				  paddingRight: 0.2,
				  transform: [{translate: [0, 0, -5]}]
				}}
			>
				<Text style={headingStyle}>Socialising Social Work</Text>
				<VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: "green"}} onClick={() => {this.props.changeLevel(1)}}>
				  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Level 1</Text>
				</VrButton>
				<VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: "green"}} onClick={() => {this.props.changeLevel(2)}}>
				  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Level 2</Text>
				</VrButton>
				<VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: "green"}} onClick={() => {this.props.changeLevel(3)}}>
				  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Level 3</Text>
				</VrButton>
			</View>
		)
	}
}
