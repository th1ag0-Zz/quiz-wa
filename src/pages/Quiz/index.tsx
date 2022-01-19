import React, { useState } from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

import { QuestionBox } from '../../components/QuestionBox';

import { useQuestions } from '../../hooks/useQuestions';

import { Container, Content, ButtonContainer } from './styles';

interface FinalResultProps {
	isCorrect: boolean;
	alternativeSelected: string;
	correct_answer: string;
}

export const Quiz: React.FC = () => {
	// const navigate = useNavigate();
	const { questions } = useQuestions();

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [alternativeSelected, setAlternativeSelected] = useState('');
	const [finalResult, setFinalResult] = useState<FinalResultProps[]>([]);
	// const [currentQuestion] = useState(questions[currentQuestionIndex]);

	function nextQuestion() {
		setFinalResult([
			...finalResult,
			{
				isCorrect:
					alternativeSelected ===
					questions[currentQuestionIndex].correct_answer,
				alternativeSelected,
				correct_answer: questions[currentQuestionIndex].correct_answer,
			},
		]);

		setCurrentQuestionIndex(oldstate => oldstate + 1);
		setAlternativeSelected('');
	}

	function finishQuiz() {
		setFinalResult([
			...finalResult,
			{
				isCorrect:
					alternativeSelected ===
					questions[currentQuestionIndex].correct_answer,
				alternativeSelected,
				correct_answer: questions[currentQuestionIndex].correct_answer,
			},
		]);
	}

	return (
		<Container>
			<Content>
				<h1>
					Question {currentQuestionIndex + 1} of {questions.length}
				</h1>

				<QuestionBox
					question={questions[currentQuestionIndex]}
					setAlternative={setAlternativeSelected}
				/>

				<ButtonContainer>
					{currentQuestionIndex + 1 === questions.length ? (
						<Button
							variant='contained'
							size='large'
							onClick={finishQuiz}
							disabled={!alternativeSelected}
						>
							Finish
						</Button>
					) : (
						<Button
							variant='contained'
							size='large'
							onClick={nextQuestion}
							disabled={!alternativeSelected}
						>
							Next
						</Button>
					)}
				</ButtonContainer>
			</Content>
		</Container>
	);
};
