import React from 'react';
import { ThemeProvider } from 'styled-components';

import { MuiProvider } from './muiProvider';
import { QuestionsProvider } from '../contexts/questionsContext';

// usar useTheme depois
import { defaultTheme } from '../themes';

export const Providers: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<MuiProvider>
				<QuestionsProvider>{children}</QuestionsProvider>
			</MuiProvider>
		</ThemeProvider>
	);
};
