import {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import MainNewsFeed from './components/MainNewsFeed';
import PopularNews from './components/PopularNews';
import {searchNews, popularNews} from './api';

function App() {
	const [articles, setArticles] = useState([]);
	const [popularArticles, setPopularArticles] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await searchNews("google");

			setArticles(result);
		}

		fetchData();
	}, []);

	useEffect(() => {
		const fetchPopular = async () => {
			const result = await popularNews();

			setPopularArticles(result);
		}

		fetchPopular();
	}, []);

	const handleSubmit = async (term) => {

		const result = await searchNews(term);

		setArticles(result);
	};

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<h1 className="text-lg font-bold">Welcome to Hacker News</h1>
			<div className="flex flex-row">
				<MainNewsFeed articles={articles} />
				<div className="mt-20">
					<h1 className="flex justify-center font-semibold">Top News</h1>
					<PopularNews articles={popularArticles}/>
				</div>		
			</div>
		</div>
	);
}

export default App; 