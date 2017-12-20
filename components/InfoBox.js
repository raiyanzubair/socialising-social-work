import React from 'react';
import Button from './Button'
import { levelOneScenarios, levelTwoScenarios, levelThreeScenarios} from '../constants'
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

export default class InfoBox extends React.Component {
	componentWillMount() {
		this.getScenario = this.getScenario.bind(this)
		this.getButtons = this.getButtons.bind(this)
		this.setState({ scenario: this.getScenario(this.props.state.level, 0) })
	}

	getScenario(level, id) {
		switch(level) {
			case 1: { 
				const meme = levelOneScenarios.find(scenario => scenario.id === parseInt(id))
				console.log(meme)
				return meme
			}
			case 2: { 
				const meme = levelTwoScenarios.find(scenario => scenario.id === parseInt(id))
				console.log(meme)
				return meme
			}
			case 3: { 
				const meme = levelThreeScenarios.find(scenario => scenario.id === parseInt(id))
				console.log(meme)
				return meme
			}
		}
	}

	getButtons(scenario) {
		return (
			scenario.buttons.map((item) => {
				return (
					<VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: "green"}}
						onClick={() => {
							if (item.message !== "TODO") {	
								var temp = ""
								if (scenario.id !== 0) {
									temp = scenario.id
								}
								const newMood = this.props.state.mood + item.moodChange
								const newScene = temp + "" + item.id
								this.setState({ scenario: this.getScenario(this.props.state.level, newScene)})
								this.props.setMood(newMood)
							}
							if (item.done) {
								this.props.changeLevel(0)
							}
						}}
					>
					  <Text style={{fontSize: 0.2, textAlign: 'center'}}>{item.message}</Text>
					</VrButton>
				)
			})
		)
	}

	render() {
		console.log(this.state)
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
				<VrButton onClick={() => this.props.changeLevel(0)}>
					<Text style={{fontSize: 0.2, textAlign: 'left'}}>Home</Text>
				</VrButton>
				<Text style={headingStyle}>
					Level {this.props.state.level}
				</Text>
				<Text style={{fontSize: 0.2, textAlign: 'left'}}>
					Customer mood is at {this.props.state.mood}
				</Text>
				<Text style={textStyle}>{this.state.scenario.message}</Text>
					{this.getButtons(this.state.scenario)}
			</View>
		)
	}
}
