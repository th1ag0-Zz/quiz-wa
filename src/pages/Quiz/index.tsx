import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { QuestionBox } from '../../components/QuestionBox';
import { ResultsModal } from '../../components/ResultsModal';

import { useQuestions } from '../../hooks/useQuestions';

import { Container, Content, ButtonContainer } from './styles';

interface FinalResultProps {
	questionTitle: string;
	isCorrect: boolean;
	alternativeSelected: string;
	correct_answer: string;
}

export const Quiz: React.FC = () => {
	const playerName = window.location.search.slice(12);
	const navigate = useNavigate();
	const { questions, deleteQuestions } = useQuestions();

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [alternativeSelected, setAlternativeSelected] = useState('');
	const [isQuizFinished, setIsQuizFinished] = useState(false);
	const [finalResult, setFinalResult] = useState<FinalResultProps[]>([]);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [correctQuestionsNumber, setCorrectQuestionsNumber] = useState(0);

	function nextQuestion() {
		setFinalResult([
			...finalResult,
			{
				questionTitle: questions[currentQuestionIndex].question,
				isCorrect:
					alternativeSelected ===
					questions[currentQuestionIndex].correct_answer,
				alternativeSelected,
				correct_answer: questions[currentQuestionIndex].correct_answer,
			},
		]);

		if (
			alternativeSelected === questions[currentQuestionIndex].correct_answer
		) {
			setCorrectQuestionsNumber(oldstate => oldstate + 1);
		}

		setCurrentQuestionIndex(oldstate => oldstate + 1);
		setAlternativeSelected('');
	}

	function finishQuiz() {
		setFinalResult([
			...finalResult,
			{
				questionTitle: questions[currentQuestionIndex].question,
				isCorrect:
					alternativeSelected ===
					questions[currentQuestionIndex].correct_answer,
				alternativeSelected,
				correct_answer: questions[currentQuestionIndex].correct_answer,
			},
		]);

		if (
			alternativeSelected === questions[currentQuestionIndex].correct_answer
		) {
			setCorrectQuestionsNumber(oldstate => oldstate + 1);
		}

		setIsQuizFinished(true);
	}

	function goToHome() {
		deleteQuestions();

		navigate('/', { replace: true });
	}

	return (
		<Container>
			<ResultsModal
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				results={finalResult}
			/>

			{!isQuizFinished ? (
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
			) : (
				<Content style={{ alignItems: 'center' }}>
					<h1>Quiz finished</h1>
					<p>
						{playerName}, You got {correctQuestionsNumber} out of{' '}
						{questions.length} questions correct.
					</p>

					<ButtonContainer>
						<Button
							variant='contained'
							size='large'
							onClick={goToHome}
							disabled={!alternativeSelected}
						>
							Go Home
						</Button>

						<Button
							variant='contained'
							size='large'
							onClick={() => setIsOpenModal(true)}
							disabled={!alternativeSelected}
							color='secondary'
						>
							See details
						</Button>
					</ButtonContainer>
				</Content>
			)}
		</Container>
	);
};
