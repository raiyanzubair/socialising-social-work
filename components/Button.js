import React from 'react'
import {
  Text,
  View,
  Box,
  VrButton
} from 'react-vr';


export default class Button extends React.Component {
	render() {
		return (
			<VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: this.props.color}} onClick={() => this.props.buttonFunction()}>
			  <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.message}</Text>
			</VrButton>
		)
	}
}