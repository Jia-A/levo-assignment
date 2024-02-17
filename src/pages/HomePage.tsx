import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import Shimmer from "../components/Shimmer";
import { Article } from "../utils/types/article";
const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=6&offset=${blogCount}`
      );
      const response = await data.json();
      setArticles((prevArticles) => [...prevArticles, ...response.results]);
    };
    fetchData();
  }, [blogCount]);

  const handleMore = () => {
    setBlogCount((prev) => prev + 10);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <Header />
      {articles.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          id="blog-container"
        >
          {articles.map((item) => {
            return <ArticleCard key={item.id} {...item} />;
          })}
        </div>
      )}
      <button
        className="self-center px-6 py-2 border-black border-solid border-2 rounded-sm hover:bg-black hover:text-white"
        onClick={handleMore}
      >
        Load More ↓
      </button>
    </div>
  );
};

export default HomePage;
