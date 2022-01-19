import React from 'react';

import { GlobalStyle } from './global/styles';

import { Providers } from './providers';
import { MyRoutes } from './routes';

const App: React.FC = () => {
	return (
		<Providers>
			<GlobalStyle />
			<MyRoutes />
		</Providers>
	);
};

export default App;
