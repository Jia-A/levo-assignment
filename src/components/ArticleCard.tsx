import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../utils/types/article";

const ArticleCard = (article: Article) => {
  const { published_at, summary, url, title } = article;
  const formattedDate = new Date(
    published_at ?? "2024-01-01"
  ).toLocaleDateString("en-GB");

  return (
    <div className="flex flex-col justify-between gap-5 p-4 text-left line-clamp-2 bg-slate-100 rounded-md shadow-sm shadow-gray-100 hover:bg-slate-200 hover:scale-105 hover:ease-in-out transition duration-300">
      <div className="flex flex-col gap-3">
        <span id="publish-date">{formattedDate}</span>
        <div id="article-title">
          <h3 className="h-14 text-xl font-semibold line-clamp-2 ">
            {title ?? ""}
          </h3>
        </div>
        <div id="article-summary">
          <p className="line-clamp-6">{summary ?? ""}</p>
        </div>
      </div>
      <Link to={url ?? "/"}>
        <button
          id="more-btn"
          className="mt-10 md:sm-20 px-4 py-2 border-black border-solid border-2 self-start rounded-md hover:bg-black hover:text-white"
        >
          Read more
        </button>
      </Link>
    </div>
  );
};

export default ArticleCard;
