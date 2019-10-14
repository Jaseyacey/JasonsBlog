import React, { useEffect, useState } from 'react';
import AddCommentForm from '../components/AddCommentForm';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import ArticleContent from './Article-Content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <notFoundPage />

    const otherArticles = ArticleContent.filter(article => article.name !== name);

    return (
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;