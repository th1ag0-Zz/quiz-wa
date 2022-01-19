import { useContext } from 'react';

import { QuestionsContext } from '../contexts/questionsContext';

export function useQuestions() {
	const context = useContext(QuestionsContext);

	return context;
}
