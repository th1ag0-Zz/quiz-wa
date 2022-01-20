import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#896CEB',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			main: '#03B252',
			contrastText: '#fff',
			// dark: will be calculated from palette.secondary.main,
		},
	},
});

export const MuiProvider: React.FC = ({ children }) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
