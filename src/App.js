import React, { useEffect, useReducer, useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'When you work in the field, do you work most of the time inside a plant greenhouse or in the field?',
			answerOptions: [
				{ answerText: 'In a plant greenhouse', point: 10, tips: 'Wear Sunglasses in CAT 2 (Transmission ratio from 18% to 43%) ' },
				{ answerText: 'In the field', point: 0, tips: 'Wear Sunglasses in CAT 3 (Transmission ratio from 8% to 18%) or CAT 4 (Transmission ratio from 3% - 8%) ' },
			],
		},
		{
			questionText: 'Do you have a habit of wearing a hat when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10, tips: 'Keep wearing a hap or other protective item. ' },
				{ answerText: 'No', point: 0, tips: 'Wear a hap when you are outside, especially in a sunny day. '},
			],
		},
		{
			questionText: 'Do you have a habit of wearing long-sleeve clothes when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10, tips: 'Keep wearing long-sleeve clothes. ' },
				{ answerText: 'No', point: 0, tips: 'Wear long-sleeve clothes when you are outside, especially in a sunny day. ' },
			],
		},
		{
			questionText: 'Do you have a habit of wearing a pair of gloves when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10, tips: 'Keep wearing a pair of gloves. '},
				{ answerText: 'No', point: 0, tips: 'Wear a pair of gloves when you are outside, especially in a sunny day. ' },
			],
		},
		{
			questionText: 'Do you have a habit of wearing a silk scarf when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10, tips: 'Keep wearing a silk scarf. ' },
				{ answerText: 'No', point: 0, tips: 'Wear a silk scarf to protect your neck when you are outside, especially in a sunny day. ' },
			],
		},
		{
			questionText: 'Do you have a habit of using sunscreen when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10, tips:'Keep using sunscreen. ' },
				{ answerText: 'No', point: 0, tips: 'Using sun screen when you are outside, especially in a sunny day. ' },
			],
		},
		{
			questionText: 'Do you have frequent exposure to water, such as manually watering crops?',
			answerOptions: [
				{ answerText: 'Yes', point: 0, tips: 'Choose sunscreen with water resistant (If a product is labelled with water resistant: 80 minutes, it means you need to reapply in after 80 minutes). ' },
				{ answerText: 'No', point: 10, tips: 'Choose normal sunscreen will be enough. ' },
			],
		},
		{
			questionText: 'How many hours do you need to be exposed to the sun?',
			answerOptions: [
				{ answerText: '0 hour', point: 20, tips: 'Use sunscreen with SPF 6-14 or PA+/PA++ '},
				{ answerText: '0-0.5 hours', point: 15, tips: 'Use sunscreen with SPF 15-29 or PA+/PA++ ' },
				{ answerText: '0.5-1 hours', point: 10, tips: 'Use sunscreen with SPF 30-50 or PA+/PA+++ ' },
				{ answerText: '> 1 hours', point: 5, tips: 'Use sunscreen with SPF 50+ or PA+++ ' },
			],
		},
		{
			questionText: 'Has your skin ever experienced heat, erythema, burning, pain, peeling or itching? If yes, how many days is it lasting?',
			answerOptions: [
				{ answerText: '> 3 days', point: 20, tips: 'Go to hospital when you have had symptoms of sunburn for more than three days!' },
				{ answerText: '< 3 days', point: 25, tips: 'Use cleansing products with the ingredient of Decyl glucoside, Cocoyl Glutamate or  Sodium Lauryl Glucose Carboxylate, aloe vera gel, product with Ectoine (tetrahydro methyl pyrimidine carboxylic acid), Serum with blue copper peptides.' },
				{ answerText: 'No', point: 0, tips: 'No need for sunburn repair and also continue good sun protection measures.'},
			],
		},
	];

	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [advice, setAdvice] = useState('');
	const [suggestions, setSuggestions] = useState('');


	const handleAnswerButtonClick = (point, tips) => {

		const nextQuestion = currentQuestion + 1;
		const nextQuestionIndex = currentQuestionIndex + 1;
		console.log("the point passed to the function is " + point);
		console.log("the score before setScore is " + score);
		
			let localScore = score;	
			localScore += point;
			setScore(localScore);
			let localSuggestions = suggestions;
			localSuggestions = localSuggestions + tips
			setSuggestions(localSuggestions);

		console.log("the score in function aferwards is " + score);
		console.log("the point passed to the function is " + point);

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowScore(true);
			adviceHandler(score, suggestions);
		
		}
	}

	useEffect(() => {
		console.log("update state", score)
	}, [score]);

	const adviceHandler = (score, suggestions) => {
		console.log("score in handler is " + score);
		if (score > 80) {
			setAdvice(`Congratulations! It looks like you are one of those people whose work and lifestyle habits don't make you too susceptible to skin cancer!` + suggestions)
		} else if (score > 40 && score <= 80) {
			setAdvice(`Ah-oh! It looks like you have some habits and work environments that expose you to the threat of UV rays.` + suggestions);
		} else {
			setAdvice(`Ooops! It looks like your work environment and lifestyle habits expose you to the threat of UV rays on a regular basis!` + suggestions);
		}
	}


	return (
		<div className='App'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>
					<div>Here's your personalized advice:<br/><br/>{advice}<br/><br/>
					
					<button className="App-link"
          href="http://www.protecturskin.social/"
          
          rel="noopener noreferrer">Return</button>
					</div>
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestionIndex}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button onClick={() => {handleAnswerButtonClick(answerOption.point, answerOption.tips); console.log("the score onClick is " + answerOption.point);}}>{answerOption.answerText}</button>
						))}
					</div>
					
				</>
			)}
		</div>
	);
	
}
