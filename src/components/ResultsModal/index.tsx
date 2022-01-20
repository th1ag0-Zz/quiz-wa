import React from 'react';
import { Modal } from '@mui/material';

import {
	Container,
	ResultContent,
	CorrectResult,
	IncorrectResult,
} from './styles';

export interface FinalResultProps {
	questionTitle: string;
	isCorrect: boolean;
	alternativeSelected: string;
	correct_answer: string;
}

interface ResultsModalProps {
	isOpen: boolean;
	onClose: () => void;
	results: FinalResultProps[];
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
	isOpen,
	onClose,
	results,
}) => {
	return (
		<Modal
			open={isOpen}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Container>
				{results.map(result => {
					if (result.isCorrect) {
						return (
							<ResultContent key={result.questionTitle}>
								<p>{result.questionTitle}</p>
								<CorrectResult>{result.alternativeSelected}</CorrectResult>
							</ResultContent>
						);
					} else {
						return (
							<ResultContent key={result.questionTitle}>
								<p>{result.questionTitle}</p>
								<IncorrectResult>{result.alternativeSelected}</IncorrectResult>
								<CorrectResult>{result.correct_answer}</CorrectResult>
							</ResultContent>
						);
					}
				})}
			</Container>
		</Modal>
	);
};
