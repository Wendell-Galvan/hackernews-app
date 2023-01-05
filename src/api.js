import axios from 'axios';

const searchNews = async (term) => {
	const response = await axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=a6346cb26498496b839aebe9f028ea18`, {
		headers: {
			Authorization: 'a6346cb26498496b839aebe9f028ea18'
		},
		params: {
			query: term
		}
	});

	return response.data.articles;
}

export default searchNews;
