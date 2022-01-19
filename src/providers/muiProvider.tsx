import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const MuiProvider: React.FC = ({ children }) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
