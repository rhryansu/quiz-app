import React, { useEffect, useReducer, useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'When you work in the field, do you work most of the time inside a plant greenhouse or in the field?',
			answerOptions: [
				{ answerText: 'In a plant greenhouse', point: 10 },
				{ answerText: 'In the field', point: 0 },
			],
		},
		{
			questionText: 'Do you have a habit of wearing a hat when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you have a habit of wearing long-sleeve clothes when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you have a habit of wearing a pair of gloves when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you have a habit of wearing a silk scarf when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you have a habit of using sunscreen when you work outside?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you have frequent exposure to water, such as manually watering crops?',
			answerOptions: [
				{ answerText: 'Yes', point: 0 },
				{ answerText: 'No', point: 10 },
			],
		},
		{
			questionText: 'How many hours do you need to be exposed to the sun?',
			answerOptions: [
				{ answerText: '0 hour', point: 20 },
				{ answerText: '0-0.5 hours', point: 15 },
				{ answerText: '0.5-1 hours', point: 10 },
				{ answerText: '> 1 hours', point: 5 },
			],
		},
		{
			questionText: 'Has your skin ever experienced heat, erythema, burning, pain, peeling or itching?',
			answerOptions: [
				{ answerText: 'Yes', point: 20 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'How many days have you had the skin symptoms, which are heat, erythema, burning, pain, peeling or itching?',
			answerOptions: [
				{ answerText: '> 3 days', point: 0 },
				{ answerText: '< 3 days', point: 5 },
			],
		},
	];

	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [advice, setAdvice] = useState('');

	const handleAnswerButtonClick = (point) => {

		const nextQuestion = currentQuestion + 1;
		const nextQuestionIndex = currentQuestionIndex + 1;
		console.log("the point passed to the function is " + point);
		console.log("the score before setScore is " + score);
		
			let localScore = score;	
			localScore += point;
			setScore(localScore);

		console.log("the score in function aferwards is " + score);
		console.log("the point passed to the function is " + point);

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowScore(true);
			adviceHandler(score);
		}
	}

	useEffect(() => {
		console.log("update state", score)
	}, [score]);

	const adviceHandler = (score) => {
		console.log("score in handler is " + score);
		if (score > 80) {
			setAdvice(`Congratulations! It looks like you are one of those people whose work and lifestyle habits don't make you too susceptible to skin cancer! It is very rare for you to have such a good working environment in rural Victoria where the incidence of skin cancer is very high. Congratulations and hope you will stay free of skin cancer ever! However, here are a few suggestions for your work and living environment and habits that we hope you will read carefully and use. This way, you will have a good chance of keeping your skin healthy!`);
		} else if (score > 40 && score <= 80) {
			setAdvice(`Ah-oh! It looks like you have some habits and work environments that expose you to the threat of UV rays. While it may not seem like such a threat is serious right now, you do need to be fully aware of the importance of sun protection. After all, staying healthy is extremely critical to you and your families! Here are a few suggestions for your work and living environment and habits that we hope you will read carefully and use. This way, you will have a good chance of keeping your skin healthy!`);
		} else {
			setAdvice(`Ooops! It looks like your work environment and lifestyle habits expose you to the threat of UV rays on a regular basis! Such a threat can put you at a much higher risk of developing skin cancer. But don't worry, we'll give you a series of tips that, if you really take them seriously and keep them up, you'll be well away from the risk of developing the disease. Take a look at the advice below! Do what you have to do to maintain healthy skin in the future.`);
		}
	}


	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>
					<div>Here's your personalized advice:<br/><br/>{advice}<br/><br/>
					
					<a className="App-link"
          href="http://www.protecturskin.social/"
          
          rel="noopener noreferrer">Return Home</a>
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
							<button onClick={() => {handleAnswerButtonClick(answerOption.point); console.log("the score onClick is " + answerOption.point);}}>{answerOption.answerText}</button>
						))}
					</div>
					
				</>
			)}
		</div>
	);
	
}
