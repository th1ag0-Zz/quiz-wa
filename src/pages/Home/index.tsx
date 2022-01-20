import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useQuestions } from '../../hooks/useQuestions';

import {
	Container,
	Content,
	ButtonContainer,
	HeaderListContent,
	PlayersListContent,
} from './styles';
import { FinalResultProps, ResultsModal } from '../../components/ResultsModal';

interface QuizAnseredProps {
	playerName: string;
	score: string;
	finalResult: FinalResultProps[];
}

export const Home: React.FC = () => {
	const navigate = useNavigate();
	const { getQuestions } = useQuestions();

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const [isShowListQuizzes, setIsShowListQuizzes] = useState(false);
	const [isShowResultsModal, setIsShowResultsModal] = useState(false);
	const [currentResults, setCurrentResults] = useState<FinalResultProps[]>([]);
	const [quizzesAnswered, setQuizzesAnswered] = useState<QuizAnseredProps[]>(
		[],
	);

	function validateTextInput(text: string) {
		const numberValue = Number(text);

		if (numberValue && numberValue > 0) {
			setIsButtonDisabled(false);
			setQuantity(numberValue);
		} else {
			setIsButtonDisabled(true);
			setQuantity(0);
		}
	}

	async function goToConfirmationPage() {
		setIsLoading(true);

		await getQuestions(quantity);

		setIsLoading(false);

		navigate('/confirmation');
	}

	function openResultModal(finalResult: FinalResultProps[]) {
		setCurrentResults(finalResult);
		setIsShowResultsModal(true);
	}

	useEffect(() => {
		const quizzesAnswered = localStorage.getItem('@wa-quiz:quizzesAnswered');

		if (quizzesAnswered) {
			setQuizzesAnswered(JSON.parse(quizzesAnswered));
		}
	}, []);

	return (
		<Container>
			<ResultsModal
				isOpen={isShowResultsModal}
				results={currentResults}
				onClose={() => setIsShowResultsModal(false)}
			/>

			{!isShowListQuizzes ? (
				<Content style={{ height: 'auto' }}>
					<h1>WA Quiz</h1>

					<p>Welcome!</p>
					<p>Enter the number of questions you wish to answer.</p>

					<TextField
						label='Quantity'
						color='primary'
						variant='outlined'
						type='text'
						onChange={value => validateTextInput(value.target.value)}
					/>

					<ButtonContainer>
						{isLoading ? (
							<CircularProgress />
						) : (
							<Button
								onClick={goToConfirmationPage}
								variant='contained'
								size='large'
								disabled={isButtonDisabled}
							>
								Next
							</Button>
						)}
					</ButtonContainer>
				</Content>
			) : (
				<Content>
					<IconButton
						onClick={() => setIsShowListQuizzes(false)}
						className='backIcon'
					>
						<ChevronLeftIcon />
					</IconButton>

					{quizzesAnswered.length > 0 ? (
						<>
							<HeaderListContent>
								<p>Name of player:</p>
								<p>Score:</p>
							</HeaderListContent>

							<PlayersListContent>
								{quizzesAnswered.map((quiz, index) => (
									<Button
										key={String(index)}
										variant='outlined'
										onClick={() => openResultModal(quiz.finalResult)}
									>
										<p>{quiz.playerName}</p>
										<p>{quiz.score}</p>
									</Button>
								))}
							</PlayersListContent>
						</>
					) : (
						<p>No Quizzes Answered...</p>
					)}
				</Content>
			)}

			<Button
				variant='text'
				size='large'
				onClick={() => setIsShowListQuizzes(true)}
			>
				<ListIcon />
				Quizzes answered
			</Button>
		</Container>
	);
};
