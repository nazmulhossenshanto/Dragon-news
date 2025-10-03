import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategories(data);
    } else if (id == "1") {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategories(breakingNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategories(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      Category news ------
      <div className="grid grid-cols-1 gap-3">
        {categories.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
