import React from 'react';
import {
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
} from '@mui/material';

import { QuestionPros } from '../../contexts/questionsContext';

import { Container, Alternatives } from './styles';

interface QuestionBoxProps {
	question: QuestionPros;
	setAlternative: React.Dispatch<React.SetStateAction<string>>;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
	question,
	setAlternative,
}) => {
	function changeAlternative(event: any) {
		setAlternative(event.target.value);
	}

	return (
		<Container>
			<p>{question.question}</p>

			<Alternatives>
				<FormControl>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						name='radio-buttons-group'
					>
						{question.alternatives.map(alternative => (
							<FormControlLabel
								key={alternative}
								value={alternative}
								control={<Radio />}
								label={alternative}
								onChange={changeAlternative}
							/>
						))}
					</RadioGroup>
				</FormControl>
			</Alternatives>
		</Container>
	);
};
