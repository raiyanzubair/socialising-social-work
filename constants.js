export const levelOneScenarios = [
	{
		id: 0,
		message: `You have entered the bedroom and it is time for Sarah to take her medication for the day. 
		Sarah has Fragile X Syndrome, is non-verbal and has severe anxiety. 
		Triggers for her anxiety are strangers, crowds, and dogs. Sarah likes art and music.
		How do you approach the situation?`,
		buttons: [
		{ id: 1, message: "Try to make small talk with Sarah", moodChange: 10 },
		{ id: 2, message: "Place her medications on the table and tell her to take it", moodChange: 0 },
		{ id: 3, message: "Physically hand Sarah her medications", moodChange: -5 },
		]
	},
	{
		id: 1,
		message: 
		`You mention what a beautiful day it is and how it would be a nice to go to the park,
		have some nice food, and listen to music. A smile peeks across Sarah's face`,
		buttons: [
		{ id: 1, message: "Tell Sarah that she needs to take her medication", moodChange: 0 },
		{ id: 2, message: "Sit down on the bed with Sarah and continue talking", moodChange: 10 },
		{ id: 3, message: "Place the medication on the table and leave the room", moodChange: -5 },
		]
	},
	{
		id: 2,
		message: 
		`You place the medication on the bedside table and tell Sarah to take her medication.
		Sarah seems unphased and is unresponsive`,
		buttons: [
		{ id: 1, message: "Nudge Sarah on shoulder", moodChange: -20 },
		{ id: 2, message: "Raise your voice and be firm with Sarah, telling her to take her medication", moodChange: -20 },
		{ id: 3, message: "Play some music from your phone", moodChange: 10 },
		]
	},
	{
		id: 3,
		message: `You hand Sarah her medication. She doesn't seem responsive and ignores you`,
		buttons: [
		{ id: 1, message: "Nudge Sarah on the shoulder", moodChange: -10 },
		{ id: 2, message: "Raise your voice and be firm with Sarah, telling her to take her medication", moodChange: -20 },
		{ id: 3, message: "Play some music from your phone", moodChange: 10 },
		]
	},
	{
		id: 11,
		message: `You tell Sarah that she needs to first take her medication before starting 
		such a beautiful day. Sarah gets out of bed and you watch her take the medication`,
		buttons: [
		{ id: 1, message: "Level Complete", done: true},
		]
	},
	{
		id: 12,
		message: 
		`You sit down on the bed and continue talking with Sarah. Her mood increases 
		and eventually she musters up the courage to take her medication and start the day.`,
		buttons: [
		{ id: 1, message: "Level Complete", done: true},
		]
	},
	{
		id: 13,
		message: 
		`You place the medication on the bedside table and leave the room.
		You do not know if Sarah ever takes her medication.`,
		buttons: [
		{ id: 1, message: "Level Failed", done: true},
		]
	},
	{
		id: 21,
		message: 
		`You nudge Sarah on the shoulder to get out of bed and take her medication.
		Sarah vocalises her discomfort in an outburst`,
		buttons: [
		{ id: 1, message: "Be forceful and tell Sarah to take her medication", done: true},
		{ id: 2, message: "De-escalate the situation with music", done: true},
		{ id: 3, message: "Leave the room", done: true},
		]
	},
	{
		id: 22, 
		message: 
		`You raise your voice and tell Sarah to take her medication.
		Sarah does not like this and vocalises her discomfort in an outburst`,
		buttons: [
		{ id: 1, message: "Be forceful and tell Sarah to take her medication", done: true},
		{ id: 2, message: "De-escalate the situation with music", done: true},
		{ id: 3, message: "Leave the room", done: true},
		]
	},
	{
		id: 23,
		message: 
		`You play a song from your phone that you know Sarah likes.
		She notices immediately and you notice her face brighten up.`,
		buttons: [
		{ id: 1, message: "Tell Sarah that she needs to take her medication", moodChange: 0, done: true },
		{ id: 2, message: "Sit down on the bed and talk with Sarah", moodChange: 10, done: true },
		{ id: 3, message: "Place the medication on the table and leave the room", moodChange: -5, done: true },
		]
	},
	{
		id: 31,
		message: 
		`You nudge Sarah on the shoulder to get out of bed and take her medication.
		Sarah vocalises her discomfort in an outburst`,
		buttons: [
		{ id: 1, message: "Be forceful and tell Sarah to take her medication", done: true},
		{ id: 2, message: "De-escalate the situation with music", done: true},
		{ id: 3, message: "Leave the room", done: true},
		]
	},
	{
		id: 32, 
		message: 
		`You raise your voice and tell Sarah to take her medication.
		Sarah does not like this and vocalises her discomfort in an outburst`,
		buttons: [
		{ id: 1, message: "Be forceful and tell Sarah to take her medication", done: true},
		{ id: 2, message: "De-escalate the situation with music", done: true},
		{ id: 3, message: "Leave the room", done: true},
		]
	},
	{
		id: 33,
		message: 
		`You play a song from your phone that you know Sarah likes.
		She notices immediately and you notice her face brighten up.`,
		buttons: [
		{ id: 1, message: "Tell Sarah that she needs to take her medication", moodChange: 0, done: true },
		{ id: 2, message: "Sit down on the bed and talk with Sarah", moodChange: 10, done: true },
		{ id: 3, message: "Place the medication on the table and leave the room", moodChange: -5, done: true },
		]
	},
]

export const levelTwoScenarios = [
	{
		id: 0,
		message: 
		`You customer is Tom who has epilepsy and cystic fibrosis. He requires medication to manage 
		his condition and is prone to seizures and sinus infections. Triggers for his seizures are stressful situations.

		You here a noise in the bathroom and enter to find your customer has slipped and fallen on the ground due to a seizure.
		How do you approach the situation?`,
		buttons: [
		{ id: 1, message: "Rush over to Tom and lift him off the ground", moodChange: 10, done: true },
		{ id: 2, message: "Support Tom through his seizure and prevent him from injuring himself", moodChange: 0, done: true },
		{ id: 3, message: "Call an ambulance", moodChange: -5, done: true },
		]
	},
]

export const levelThreeScenarios = [
	{
		id: 0,
		message: 
		`You are standing at the stove in the kitchen cooking for two of you customers.
		The first customer is John who has Prader-Willi syndrome and is allergic to nuts.  
		John has difficulties learning and following instructions. He dislikes eating egg and likes flowers. 
		The second customer is Samantha who experiences extreme mood swings including emotional highs as well as extreme lows.
		She is prone to self harm and emotional outbursts. She enjoys indoor plants and colorful objects. 

		John gets up and goes to the fridge to get food which he shouldn't be eating.
		How do you approach the situation?`,
		buttons: [
		{ id: 1, message: "Turn off the stove and physically tend to John.", moodChange: 10, done: true },
		{ id: 2, message: "Turn off the stove and show John flowers and take him outside to distract him.", moodChange: 0, done: true },
		{ id: 3, message: "Continue cooking and tell John to sit back down while your cooking.", moodChange: -5, done: true },
		]
	},
]



export const levelData = {
	0: 
	{
		location: "default.jpg"
	},
	1: 
	{
		location: "bedroom.jpg"
	},
	2: 
	{
		location: "bathroom.jpg"
	},
	3: 
	{
		location: "kitchen.png"
	},
}