import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Container, Content, ButtonContainer } from './styles';

export const Home: React.FC = () => {
	const navigate = useNavigate();

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	function validateTextInput(text: string) {
		const numberValue = Number(text);

		if (numberValue && numberValue > 0) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	}

	function goToConfirmationPage() {
		navigate('/confirmation');
	}

	return (
		<Container>
			<Content>
				<h1>WA Quiz</h1>

				<p>Welcome!</p>
				<p>Enter the number of questions you wish to answer.</p>

				<TextField
					label='Quantidade'
					color='primary'
					variant='outlined'
					type='text'
					onChange={value => validateTextInput(value.target.value)}
				/>

				<ButtonContainer>
					<Button
						onClick={goToConfirmationPage}
						variant='contained'
						disabled={isButtonDisabled}
					>
						Continuar
					</Button>
				</ButtonContainer>
			</Content>
		</Container>
	);
};
