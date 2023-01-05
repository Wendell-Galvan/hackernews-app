import ArticleShow from './ArticleShow';
import {nanoid} from 'nanoid';

function ArticleList({articles}) {
	const renderedArticles = articles.map((article) => {
		return <ArticleShow key={nanoid()} article={article} />;
	});

	return <div>{renderedArticles}</div>;
}

export default ArticleList;