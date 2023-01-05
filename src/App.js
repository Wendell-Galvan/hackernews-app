import {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
// import MainNewsFeed from './components/MainNewsFeed';
import ArticleList from './components/ArticleList';
import SearchNews from './api';
// import {Route, Routes} from 'react-router-dom';

function App() {
	const [articles, setArticles] = useState([]);

	const handleSubmit = async (term) => {

		const result = await SearchNews(term);

		setArticles(result);
	};

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			{/*<MainNewsFeed articles={articles} />*/}
			<ArticleList articles={articles} />	
		</div>
	);
}

export default App; 