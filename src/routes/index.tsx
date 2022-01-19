import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Confirmation } from '../pages/Confirmation';

export const MyRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='confirmation' element={<Confirmation />} />
		</Routes>
	);
};
