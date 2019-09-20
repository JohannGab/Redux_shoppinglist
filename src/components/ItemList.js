import React from 'react'
import Article from './Article'

const ItemList = ({ articles, editArticle}) => {
    return (
        <>
        <h3>Votre liste de course</h3>
        {articles.map(article =>
        <Article 
        data={article}
        key={article.id}
        editArticle={editArticle}
        />)}
        </>
    )
}

export default ItemList