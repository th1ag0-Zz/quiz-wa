import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useQuestions } from '../../hooks/useQuestions';

import { Container, Content, ButtonContainer } from './styles';

export const Home: React.FC = () => {
	const navigate = useNavigate();
	const { getQuestions } = useQuestions();

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [quantity, setQuantity] = useState(0);

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

	return (
		<Container>
			<Content>
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
		</Container>
	);
};
