import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Confirmation } from '../pages/Confirmation';
import { Quiz } from '../pages/Quiz';

export const MyRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='confirmation' element={<Confirmation />} />
			<Route path='quiz' element={<Quiz />} />
		</Routes>
	);
};
