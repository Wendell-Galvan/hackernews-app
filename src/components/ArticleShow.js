function ArticleShow({article}) {
	return (
		<div className="flex flex-col p-2 m-2 border border-solid border-black bg-gray-100 rounded">
			<div className="w-1/2 font-bold text-xl">
				<img src={article.urlToImage} alt="news" />
				{article.title}
				<div className="my-2 font-normal text-sm">
					{article.description}
				</div>
				<div>
					<a className="text-blue-500 text-base" href={article.url}>Click for full article</a>
				</div>
			</div>
		</div>	
	);
}

export default ArticleShow;