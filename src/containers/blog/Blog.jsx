import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const articlesData = [
  {
    imgUrl: blog01,
    date: "Dic 9 2023",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog02,
    date: "Dic 9 2023",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog03,
    date: "Dic 9 2023",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog04,
    date: "Dic 9 2023",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog05,
    date: "Dic 9 2023",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <article className="gpt3__blog-container_groupA">
          <Article
            imgUrl={articlesData[0].imgUrl}
            date={articlesData[0].date}
            title={articlesData[0].title}
          />
        </article>
        <article className="gpt3__blog-container_groupB">
          {articlesData.slice(1).map((article, index) => (
            <Article
              imgUrl={article.imgUrl}
              date={article.date}
              title={article.title}
              key={article.title + index}
            />
          ))}
        </article>
      </div>
    </div>
  );
};

export default Blog;
