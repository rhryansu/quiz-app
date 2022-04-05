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

	const handleAnswerButtonClick = (point) => {

		const nextQuestion = currentQuestion + 1;
		const nextQuestionIndex = currentQuestionIndex + 1;

			setScore(score + point);

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowScore(true);
		}
	}


	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>
					<div>You scored {score} out of 100. <br/><br/>Here's your personalized advice:
					
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
