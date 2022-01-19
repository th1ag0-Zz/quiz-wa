import React, { useState, createContext } from 'react';

import api from '../services/api';

export interface QuestionPros {
	category: string;
	alternatives: string[];
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}

interface QuestionContextsProps {
	questions: QuestionPros[];
	getQuestions: (amount: number) => Promise<void>;
	deleteQuestions: () => void;
}

interface responseApiProps {
	response_code: number;
	results: {
		category: string;
		correct_answer: string;
		difficulty: string;
		incorrect_answers: string[];
		question: string;
		type: string;
	}[];
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

	return (
		<QuestionsContext.Provider
			value={{ questions, getQuestions, deleteQuestions }}
		>
			{children}
		</QuestionsContext.Provider>
	);
};

export { QuestionsContext, QuestionsProvider };
