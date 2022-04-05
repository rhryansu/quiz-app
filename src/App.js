import React, { useReducer, useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'When you work in the field, do you work most of the time inside a large machine(large harvester,etc) or in the field?',
			answerOptions: [
				{ answerText: 'In a large machine', point: 10 },
				{ answerText: 'In the field', point: 0 },
			],
		},
		{
			questionText: 'Does your work require you to wear a mask or other item that covers your lips?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you need to fly frequently?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'Do you have frequent exposure to water, such as manually watering crops?',
			answerOptions: [
				{ answerText: 'Yes', point: 10 },
				{ answerText: 'No', point: 0 },
			],
		},
		{
			questionText: 'How many hours do you need to be exposed to the sun?',
			answerOptions: [
				{ answerText: 'Barely not', point: 20 },
				{ answerText: 'Casually walk in the sun', point: 15 },
				{ answerText: 'Might need to walk in more than 30 minutes', point: 10 },
				{ answerText: 'For a long time(more than 30 minutes)', point: 5 },
			],
		},
		{
			questionText: 'whether your skin is experiencing heat, erythema, burning, pain, peeling or itching? If yes, How many days have you had the above symptoms?',
			answerOptions: [
				{ answerText: 'After 3 days and symptoms are getting worse', point: 20 },
				{ answerText: 'Below 3 days', point: 20 },
				{ answerText: 'No', point: 0 },
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

		setScore(score + point);

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowScore(true);
			adviceHandler(score);
		}
	}

	const adviceHandler = (score) => {
		if (80 >= score > 60) {
			setAdvice(`Congratulations! It looks like you are one of those people whose work and lifestyle habits don't make you too susceptible to skin cancer! It is very rare for you to have such a good working environment in rural Victoria where the incidence of skin cancer is very high. Congratulations and hope you will stay free of skin cancer ever!
			However, here are a few suggestions for your work and living environment and habits that we hope you will read carefully and use. This way, you will have a good chance of keeping your skin healthy!`);
		} else if (60 >= score >= 40) {
			setAdvice(`Ah-oh! It looks like you have some habits and work environments that expose you to the threat of UV rays. While it may not seem like such a threat is serious right now, you do need to be fully aware of the importance of sun protection. After all, staying healthy is extremely critical to you and your familes!
			Here are a few suggestions for your work and living environment and habits that we hope you will read carefully and use. This way, you will have a good chance of keeping your skin healthy!`);
		} else if (40 >= score >0) {
			setAdvice(`Ooops! It looks like your work environment and lifestyle habits expose you to the threat of UV rays on a regular basis! Such a threat can put you at a much higher risk of developing skin cancer. But don't worry, we'll give you a series of tips that, if you really take them seriously and keep them up, you'll be well away from the risk of developing the disease.
			Take a look at the advice below! Do what you have to do to maintain a healthy skin in the future!`);
		}
	}


	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>
					<div>You scored {score} out of 100. <br/><br/>Here's your personalized advice:<br/>{advice}
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
							<button onClick={() => handleAnswerButtonClick(answerOption.point)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
	
}
