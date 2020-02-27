import React, { FC } from 'react';
import { TestComponent } from '../lib';

const App: FC<{}> = () => {
	const name = 'Juozas';
	const age = 60;

	return (
		<TestComponent name={name} age={age} />
	)
};

export default App;
