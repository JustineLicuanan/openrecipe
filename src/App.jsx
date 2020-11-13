import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Up from './components/Up';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';

const App = () => {
	const { REACT_APP_ID, REACT_APP_KEYS } = process.env;
	const [queryText, setQueryText] = useState('chicken adobo');
	const [count, setCount] = useState(10);
	const [recipes, setRecipes] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [isError, setIsError] = useState(false);

	const getRecipes = async () => {
		try {
			const res = await fetch(
				`https://api.edamam.com/search?q=${queryText}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEYS}`
			);
			const data = await res.json();
			setIsSearching(false);
			setCount(data.count);
			setRecipes(data.hits);
		} catch (err) {
			setIsError(true);
			setIsSearching(false);
			setCount(10);
			setRecipes([]);
		}
	};

	useEffect(() => {
		getRecipes();
	}, [queryText]);

	return (
		<>
			<Navbar
				title='OpenRecipe'
				states={{
					queryText,
					setQueryText,
					setRecipes,
					setIsError,
				}}
			/>
			<RecipeSearch
				setIsError={setIsError}
				setIsSearching={setIsSearching}
				setRecipes={setRecipes}
				setQueryText={setQueryText}
			/>
			<RecipeList
				count={count}
				recipes={recipes}
				queryText={queryText}
				isSearching={isSearching}
				isError={isError}
			/>
			{recipes.length ? (
				<>
					<RecipeSearch
						setIsError={setIsError}
						setIsSearching={setIsSearching}
						setRecipes={setRecipes}
						setQueryText={setQueryText}
					/>
					<Up />
				</>
			) : null}
			<Footer
				author='Justine Licuanan'
				link='github.com/justinelicuanan'
				year='2020'
			/>
		</>
	);
};

export default App;
