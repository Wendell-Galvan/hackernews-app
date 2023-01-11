import {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import MainNewsFeed from './components/MainNewsFeed';
import PopularNews from './components/PopularNews';
import {searchNews, popularNews} from './api';

function App() {
	const [articles, setArticles] = useState([]);
	const [popularArticles, setPopularArticles] = useState([]);

	//loading state 
	 const [loading, setLoading] = useState(false);

	const fetchData = async () => {
			setLoading(true);
			const result = await searchNews("google");

			setArticles(result);
			setLoading(false);
		};

	const fetchPopular = async () => {
			const result = await popularNews();

			setPopularArticles(result);
		};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		fetchPopular();
	}, []);

	const handleSubmit = async (term) => {

		const result = await searchNews(term);

		setArticles(result);
	};

	// const refreshPage = fetchData();

	return (
		<div>
			<div className="flex bg-green-300 items-end">
				<SearchBar onSubmit={handleSubmit} />
				 <button
	         		className="text-white bg-slate-800 px-4 py-2 h-fit mb-2"
	          		onClick={fetchData}
	        	>
	        		Refresh
	        	</button>
	        </div>
			<h1 className="text-lg font-bold">Welcome to Hacker News</h1>
			<div className="flex flex-col sm:flex-row">
				{loading ? (<p className="text-center text-xl ">Loading articles.....</p>) : (
					<MainNewsFeed articles={articles} />
				)}
				<div className="mt-20">
					<h1 className="flex justify-center font-semibold">Top News</h1>
					<PopularNews articles={popularArticles}/>
				</div>		
			</div>
		</div>
	);
}

export default App; 