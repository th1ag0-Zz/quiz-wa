import React, { useState, createContext } from 'react';

import { FinalResultProps } from '../components/ResultsModal';

import api from '../services/api';

export interface QuestionPros {
	alternatives: string[];
	correct_answer: string;
	incorrect_answers: string[];
	question: string;
}

interface QuestionContextsProps {
	questions: QuestionPros[];
	getQuestions: (amount: number) => Promise<void>;
	deleteQuestions: () => void;
	saveQuestionsOnStorage: ({
		playerName,
		correctQuestionsNumber,
		finalResult,
	}: saveQuestionsOnStorageProps) => void;
}

interface responseApiProps {
	response_code: number;
	results: {
		correct_answer: string;
		incorrect_answers: string[];
		question: string;
	}[];
}

interface saveQuestionsOnStorageProps {
	playerName: string;
	correctQuestionsNumber: number;
	finalResult: FinalResultProps[];
}

const QuestionsContext = createContext({} as QuestionContextsProps);

const QuestionsProvider: React.FC = ({ children }) => {
	const [questions, setQuestions] = useState<QuestionPros[]>([]);

	function shuffleArray(inputArray: string[]) {
		return inputArray.sort(() => Math.random() - 0.5);
	}

	async function getQuestions(amount: number) {
		const { data } = await api.get<responseApiProps>('/', {
			params: { amount },
		});

		const newQuetionsArray = data.results.map(question => {
			let questionAnswers = shuffleArray([
				...question.incorrect_answers,
				question.correct_answer,
			]);

			return {
				...question,
				alternatives: questionAnswers,
			};
		});

		setQuestions(newQuetionsArray);
	}

	function deleteQuestions() {
		setQuestions([]);
	}

	function saveQuestionsOnStorage({
		playerName,
		correctQuestionsNumber,
		finalResult,
	}: saveQuestionsOnStorageProps) {
		const quizzesAnswered = localStorage.getItem('@wa-quiz:quizzesAnswered');

		if (quizzesAnswered) {
			const newQuizzesAnswered = [
				...JSON.parse(quizzesAnswered),
				{
					playerName,
					score: `${correctQuestionsNumber}/${questions.length}`,
					finalResult,
				},
			];

			localStorage.setItem(
				'@wa-quiz:quizzesAnswered',
				JSON.stringify(newQuizzesAnswered),
			);
		} else {
			localStorage.setItem(
				'@wa-quiz:quizzesAnswered',
				JSON.stringify([
					{
						playerName,
						score: `${correctQuestionsNumber}/${questions.length}`,
						finalResult,
					},
				]),
			);
		}
	}

	return (
		<QuestionsContext.Provider
			value={{
				questions,
				getQuestions,
				deleteQuestions,
				saveQuestionsOnStorage,
			}}
		>
			{children}
		</QuestionsContext.Provider>
	);
};

export { QuestionsContext, QuestionsProvider };
