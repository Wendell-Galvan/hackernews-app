import {Link} from 'react-router-dom';

function ArticleShow({article}) {

	//function to navigate to url 
	const handleClick = (event) => {
		event.preventDefault();
		window.location = (article.url);
	};

	return (
		<div className="flex flex-col p-2 m-2 border border-solid border-black bg-gray-100 rounded">
			<div className="w-1/2 font-bold text-xl">
				<img src={article.urlToImage} alt="news" />
				{article.title}
				<div className="my-2 font-normal text-sm">
					{article.description}
				</div>
				<div>
					<Link onClick={handleClick} className="text-blue-500 text-base" to={article.url} target="_blank">Click for full article</Link>
				</div>
			</div>
		</div>	
	);
}

export default ArticleShow;

//target="_blank" to route to new tab (but not working)