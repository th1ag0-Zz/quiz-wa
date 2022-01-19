import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useQuestions } from '../../hooks/useQuestions';

import { Container, Content, ButtonContainer } from './styles';

export const Confirmation: React.FC = () => {
	const navigate = useNavigate();
	const { deleteQuestions } = useQuestions();

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [, setName] = useState('');

	function validateTextInput(text: string) {
		if (text) {
			setIsButtonDisabled(false);
			setName(text);
		} else {
			setIsButtonDisabled(true);
			setName('');
		}
	}

	function startQuiz() {
		navigate('/quiz');
	}

	function cancelAction() {
		deleteQuestions();

		navigate('/', { replace: true });
	}

	return (
		<Container>
			<Content>
				<h1>Good!</h1>

				<p>Now enter your name to get started. 😁</p>

				<TextField
					label='Name'
					color='primary'
					variant='outlined'
					type='text'
					onChange={value => validateTextInput(value.target.value)}
				/>

				<ButtonContainer>
					<Button
						onClick={cancelAction}
						variant='contained'
						size='large'
						color='error'
					>
						Cancel
					</Button>

					<Button
						onClick={startQuiz}
						variant='contained'
						size='large'
						disabled={isButtonDisabled}
					>
						Start
					</Button>
				</ButtonContainer>
			</Content>
		</Container>
	);
};
