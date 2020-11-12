import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

const App = () => {
	const { REACT_APP_ID, REACT_APP_KEYS } = process.env;
	const [queryText, setQueryText] = useState('chicken');
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const getRecipes = async () => {
			const res = await fetch(
				`https://api.edamam.com/search?q=${queryText}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEYS}`
			);
			const data = await res.json();
			setRecipes(data.hits);
		};
		getRecipes();
	}, [queryText]);

	return (
		<>
			<RecipeList recipes={recipes} />
		</>
	);
};

export default App;
