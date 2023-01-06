import ArticleShow from './ArticleShow';
import {nanoid} from 'nanoid';

function MainNewsFeed({articles}) {
	const renderedArticles = articles.map((article) => {
		return <ArticleShow key={nanoid()} article={article} />;
	});

	return <div>{renderedArticles}</div>;
}

export default MainNewsFeed;