import React from 'react';
import { ThemeProvider } from 'styled-components';

import { MuiProvider } from './muiProvider';

// usar useTheme depois
import { dark } from '../themes';

export const Providers: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={dark}>
			<MuiProvider>{children}</MuiProvider>
		</ThemeProvider>
	);
};
