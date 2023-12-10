/* eslint-disable react/prop-types */
import "./article.css";

const Article = ({ imgUrl, date, title, linkText = "Read Full Article" }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="Blog article image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href="#readmore">{linkText}</a>
      </div>
    </div>
  );
};

export default Article;
